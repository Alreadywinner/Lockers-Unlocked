import React, { useState } from 'react';
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { Button, Toast } from '@components';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [shippingAddress, setShippingAddress] = useState('');
  const [showToast, setShowToast] = useState({
    visible: false,
    text: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (shippingAddress.trim() === '') {
      setShowToast({
        text: 'Please Enter Your Shipping Address',
        visible: true,
      });
      return;
    }

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/completion`,
      },
    });

    if (error?.type === 'card_error' || error?.type === 'validation_error') {
      setMessage(error.message || '');
    } else {
      setMessage('An unexpected error occurred.');
    }

    setIsProcessing(false);
  };

  return (
    <div className="flex items-center justify-center mt-10">
      {showToast.visible && (
        <Toast
          text={showToast.text}
          visible={showToast.visible}
          setVisible={setShowToast}
        />
      )}
      <form
        id="payment-form"
        onSubmit={handleSubmit}
        className="md:w-2/5 md:p-0 w-full p-5"
      >
        <PaymentElement id="payment-element" />
        <input
          type="text"
          placeholder="Shipping Address"
          required
          value={shippingAddress}
          onChange={(e) => setShippingAddress(e.target.value)}
          className="mt-3 p-2 border border-gray-300 rounded w-full"
        />
        <Button
          type="submit"
          disabled={isProcessing || !stripe || !elements}
          className="bg-red400 text-white hover:bg-red500 mt-5 w-full rounded p-2"
        >
          <span id="button-text">
            {isProcessing ? 'Processing ... ' : 'Pay now'}
          </span>
        </Button>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>
    </div>
  );
}
