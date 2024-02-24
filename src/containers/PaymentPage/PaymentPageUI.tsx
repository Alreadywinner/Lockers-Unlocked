import React, { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { Stripe, loadStripe } from '@stripe/stripe-js';
import { CheckoutForm } from '@components';

export default function PaymentPageUI() {
  const [stripePromise, setStripePromise] = useState<Promise<Stripe | null>>();
  const [fetchedClientSecret, setFetchedClientSecret] = useState('');
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    fetch(`${backendUrl}/config`).then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    fetch(`${backendUrl}/create-payment-intent`, {
      method: 'POST',
      body: JSON.stringify({}),
    }).then(async (result) => {
      const { clientSecret } = await result.json();
      setFetchedClientSecret(clientSecret);
    });
  }, []);
  return (
    <div className="h-screen">
      {fetchedClientSecret && stripePromise && (
        <Elements
          stripe={stripePromise}
          options={{ clientSecret: fetchedClientSecret }}
        >
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
