const functions = require('firebase-functions');
const admin = require('firebase-admin');
const Stripe = require('stripe');
const nodemailer = require('nodemailer');
const EmailTemplate = require('./EmailTemplate.js');
const cors = require('cors')({ origin: true });

admin.initializeApp();

const stripe = new Stripe(
  'sk_test_51O7xbUDdwhg4yy2RHesvc3ViQTlcEeV3RUtJ2xjAR69vLaDSHZU1JfvCeL7kyctyonHYOopKoBjOU4tV0c2HZ29a00VuXHiN9l',
);

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

exports.createPaymentLink = functions.https.onRequest((req, res) =>
  cors(req, res, async () => {
    try {
      // Extract data from the request
      const {
        amount,
        description,
        productName,
        productImage,
        buyerName,
        buyerEmail,
      } = req.body;

      const product = await stripe.products.create({
        name: productName,
        description,
        images: [productImage],
      });

      const price = await stripe.prices.create({
        unit_amount: Math.round(Number(amount) * 100), // The amount in the smallest currency unit (e.g., cents).
        currency: 'usd',
        product: product.id, // The ID of the product you created.
      });

      const paymentLink = await stripe.paymentLinks.create({
        line_items: [
          {
            price: price.id,
            quantity: 1,
          },
        ],
      });

      if (paymentLink && paymentLink.url !== '') {
        const paymentLinkUrl = paymentLink.url;
        const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
            user: 'lockersunlocked@gmail.com',
            pass: 'ofiuseiueurrlxza',
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
      }
    } catch (error) {
      console.error('Error creating payment link:', error);
      res.status(500).send('Internal Server Error');
    }
  }),
);
