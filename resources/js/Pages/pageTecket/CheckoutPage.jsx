import React, { useEffect, useState } from "react";
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { faCircleCheck, faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { redirect } from "react-router";
// import {}

const appearance = {
  theme: 'night',
  labels: 'floating',

  variables: {
    colorPrimary: '#0570de',
    colorBackground: '#101b56',
    colorTextPlaceholder: '#828ab3',
    colorText: '#6370b9',
    colorTextSecondary: '#8c9eff',
    colorDanger: '#df1b41',
    fontFamily: 'Ideal Sans, system-ui, sans-serif',
    spacingUnit: '3px',
    borderRadius: '4px',

  },

  rules: {
    '.Input': {
      color: '#fff'
    }
  }
};

const stripePromise = loadStripe('pk_test_51HtyfhFcT3SQ1CDfD2mFcdGw3mBJQ9rFggRPmmd2GbZ0bMHQQWJElxOFhfQVTDERIQvbTjefeduYFrmSMuAvbcP500F4vzZdnd');

const Checkout = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentCompleted, setPaymentCompleted] = useState(false)
  // const [paymentProccessing, setPaymentProccessing] = useState(false);
  const [paymentOnProccess, setPaymentOnProccess] = useState(false);
  const [error, setError] = useState();

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "http://127.0.0.1:8000/payment",
      },
      redirect: 'if_required'
    })

    // paymentIntent !== undefined && setPayementStatus(paymentIntent?.status)

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      setError(result.error)
      console.log(result?.error);
    } else {
      setPaymentCompleted(true)
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }

  };

  useEffect(() => {
    if (paymentCompleted) {
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  }, [paymentCompleted])

  return (

    paymentCompleted ?
      <div className="w-full h-full flex flex-col items-center justify-center p-5 gap-y-12">
        <FontAwesomeIcon className="text-secondary-dark text-4xl opacity-100 transition" icon={faCircleCheck} />
        <p className="text-white font-bold text-2xl">Payment success</p>
      </div>
      :
      <>
        <PaymentElement className="w-full"/>
        <button className="w-full bg-secondary-dark rounded-sm mt-3 py-2 disabled:bg-[#33636a]" disabled={!stripe} onClick={() => (setPaymentOnProccess(true), setError(''))}>{(!error && paymentOnProccess && !paymentCompleted) && <FontAwesomeIcon icon={faCircleNotch} spin />} Submit</button>
      </>
  )
};

export default function CheckoutPage() {
  let token = document.getElementById('meta_token').getAttribute('content');
  const [clientSecret, setClientSecret] = useState('')

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/charge", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-CSRF-TOKEN": token },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch((err) => console.log(err))
  }, []);

  const options = {
    clientSecret,
    appearance,
  };

  return (
    clientSecret &&
    <Elements stripe={stripePromise} options={options} >
      <div className="w-full">
        <Checkout />
      </div>
    </Elements>
  )
}