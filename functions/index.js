const functions = require('firebase-functions');
const admin = require('firebase-admin');
const Stripe = require('stripe');

admin.initializeApp();

const stripe = new Stripe(
  'sk_test_51O7xbUDdwhg4yy2RHesvc3ViQTlcEeV3RUtJ2xjAR69vLaDSHZU1JfvCeL7kyctyonHYOopKoBjOU4tV0c2HZ29a00VuXHiN9l',
);

// const db = admin.firestore();

exports.createPaymentLink = functions.https.onRequest(async (req, res) => {
  try {
    // Extract data from the request
    const { productId, amount, currency, description } = req.body;

    // Fetch product details from Firestore using productId
    // const productSnapshot = await db
    //   .collection('products')
    //   .doc(productId)
    //   .get();
    // const productData = productSnapshot.data();

    // if (!productData) {
    //   throw new Error('Product not found');
    // }

    // Create a payment link
    const paymentLink = await stripe.paymentLinks.create({
      line_items: [
        {
          price: '100', // Replace with the actual Stripe Price ID
          quantity: 1,
        },
      ],
      currency: currency || 'usd',
      description: description || 'Payment description',
      //   client_reference_id: productId,
      //   success_url: 'https://your-website.com/success',
      //   cancel_url: 'https://your-website.com/cancel',
    });

    res.json({ url: paymentLink.url });
  } catch (error) {
    console.error('Error creating payment link:', error);
    res.status(500).send('Internal Server Error');
  }
});
