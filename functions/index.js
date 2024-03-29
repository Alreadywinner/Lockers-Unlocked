const functions = require('firebase-functions');
const admin = require('firebase-admin');
const Stripe = require('stripe');
const express = require('express');
const nodemailer = require('nodemailer');
const EmailTemplate = require('./EmailTemplate.js');
const cors = require('cors')({ origin: true });
const dotenv = require('dotenv');

dotenv.config();
admin.initializeApp();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const corsOptions = {
  // Allow origins based on your requirements
  origin: [
    'https://lockers-unlocked.web.app',
    'https://lockersunlocked.com',
    'https://www.lockersunlocked.com',
  ],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};
const app = express();
app.use(cors);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// exports.createPaymentLink = functions.https.onRequest((req, res) =>
//   cors(req, res, async () => {
//     try {
//       // Extract data from the request
//       const {
//         amount,
//         description,
//         productName,
//         productImage,
//         buyerName,
//         buyerEmail,
//       } = req.body;

//       const product = await stripe.products.create({
//         name: productName,
//         description,
//         images: [productImage],
//       });

//       const price = await stripe.prices.create({
//         unit_amount: Math.round(Number(amount) * 100), // The amount in the smallest currency unit (e.g., cents).
//         currency: 'usd',
//         product: product.id, // The ID of the product you created.
//       });

//       const paymentLink = await stripe.paymentLinks.create({
//         line_items: [
//           {
//             price: price.id,
//             quantity: 1,
//           },
//         ],
//       });

//       if (paymentLink && paymentLink.url !== '') {
//         const paymentLinkUrl = paymentLink.url;
//         const transporter = nodemailer.createTransport({
//           host: 'smtp.gmail.com',
//           port: 465,
//           secure: true,
//           auth: {
//             user: 'lockersunlocked@gmail.com',
//             pass: 'ofiuseiueurrlxza',
//           },
//         });
//         let info = await transporter.sendMail({
//           from: '"Locker Unlocked" <lockersunlocked@gmail.com>', // sender address
//           to: `${buyerEmail}`, // list of receivers
//           subject: 'Buy your Product', // Subject line
//           text: 'Congratulations! Now you can Buy your product', // plain text body
//           html: EmailTemplate(buyerName, buyerEmail, paymentLinkUrl), // html body
//         });
//         res.json({ msg: `Message sent successfully ${info.messageId}` });
//       }
//     } catch (error) {
//       console.error('Error creating payment link:', error);
//       res.status(500).send('Internal Server Error');
//     }
//   }),
// );

app.get('/config', (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

app.post('/winner-email', async (req, res) => {
  try {
    const { buyerName, buyerEmail, paymentLinkUrl } = req.body;
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.NODE_MAILER_EMAIL,
        pass: process.env.NODE_MAILER_PASSWORD,
      },
    });
    let info = await transporter.sendMail({
      from: '"Locker Unlocked" <lockersunlocked@gmail.com>', // sender address
      to: `${buyerEmail}`, // list of receivers
      subject: 'Buy your Product', // Subject line
      text: 'Congratulations! Now you can Buy your product', // plain text body
      html: EmailTemplate(buyerName, buyerEmail, paymentLinkUrl), // html body
    });
    res.json({ msg: `Message sent successfully ${info.messageId}` });
  } catch (e) {
    return res.status(400).send({
      error: {
        message: e.message || 'Unexpected Error occurred',
      },
    });
  }
});

app.post('/create-payment-intent', async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: 'EUR',
      amount: 1999,
      automatic_payment_methods: { enabled: true },
    });

    // Send publishable key and PaymentIntent details to client
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
});

app.get('/', (request, response) => {
  return response.status(200).json({ msg: 'hello World' });
});

exports.app = functions.https.onRequest(app);
