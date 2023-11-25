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

    let product = await stripe.products.search({
      query: `name~"${productName}" AND description~"${description}"`,
    });
    if (product.data.length === 0) {
      // Create a new product if it doesn't exist
      product = await stripe.products.create({
        attributes: ['name'],
        name: productName,
        description,
        images: [productImage],
      });
    } else {
      // Use the existing product
      product = product.data[0];
    }

    // Check if a price with the same unit amount exists
    let price = await stripe.prices.list({
      product: product.id,
      unit_amount: Math.round(Number(amount) * 100),
      currency: 'usd',
      limit: 1,
    });

    if (price.data.length === 0) {
      // Create a new price if it doesn't exist
      price = await stripe.prices.create({
        unit_amount: Math.round(Number(amount) * 100),
        currency: 'usd',
        product: product.id,
      });
    } else {
      // Use the existing price
      price = price.data[0];
      console.log('Using the existing price');
    }

    // Check if a payment link with the same product and price exists
    // let paymentLink = await stripe.paymentLinks.list({
    //   line_items: [
    //     {
    //       price: price.id,
    //       quantity: 1,
    //     },
    //   ],
    //   limit: 1,
    // });
    // let paymentLinks = await stripe.paymentLinks.list({});
    const paymentLink = await stripe.paymentLinks.create({
      line_items: [
        {
          price: price.id,
          quantity: 1,
        },
      ],
    });
    // if (paymentLink.data.length === 0) {
    //   // Create a new payment link if it doesn't exist
    //   paymentLink = await stripe.paymentLinks.create({
    //     line_items: [
    //       {
    //         price: price.id,
    //         quantity: 1,
    //       },
    //     ],
    //   });
    // } else {
    //   // Use the existing payment link
    //   paymentLink = paymentLink.data[0];
    // }

    res.json({ url: paymentLink });
  } catch (error) {
    console.error('Error creating payment link:', error);
    res.status(500).send('Internal Server Error');
  }
});
