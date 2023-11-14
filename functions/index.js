const functions = require('firebase-functions');
const admin = require('firebase-admin');
const Stripe = require('stripe');

admin.initializeApp();

const stripe = new Stripe(
  'sk_test_51O7xbUDdwhg4yy2RHesvc3ViQTlcEeV3RUtJ2xjAR69vLaDSHZU1JfvCeL7kyctyonHYOopKoBjOU4tV0c2HZ29a00VuXHiN9l',
);

exports.createPaymentLink = functions.https.onRequest(async (req, res) => {
  try {
    // Extract data from the request
    const { amount, description, productName, productImage } = req.body;

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

    res.json({ url: paymentLink.url });
  } catch (error) {
    console.error('Error creating payment link:', error);
    res.status(500).send('Internal Server Error');
  }
});
