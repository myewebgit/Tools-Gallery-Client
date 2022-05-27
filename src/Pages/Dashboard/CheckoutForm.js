import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const Checkout = ({ orders }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCerdError] = useState('');
  const [success, setSuccess] = useState('');
  const [procecssing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  const [clientSecret, setClientSecret] = useState('');

  const { _id, price, client, clientName } = orders;

  useEffect(() => {
    fetch('http://localhost:5000/create-payment-intent', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify({ price })
    })
      .then(res => res.json())
      .then(data => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [price])

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }


    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card

    });

    setCerdError(error?.message || '');
    setSuccess('');
    setProcessing(true);

    //card payment confirmation//
    const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: clientName,
            email: client,
          },

        },
      },
    );
    if (intentError) {
      setCerdError(intentError?.message);
      setProcessing(false);
    }
    else {
      setCerdError('');
      setTransactionId(paymentIntent.id);
      console.log(paymentIntent);
      setSuccess('Congrates!!! Your Payment is Completed.');


/////////////store  payment on database
const payment = {
  // appointment
  orders:_id,
  transactionId: paymentIntent.id
}


      fetch(`http://localhost:5000/booking/${_id}`,{
        method:'PATCH',
        headers:{
          'content-type':'application/json',
          'authorization':`Bearer ${localStorage.getItem('accessToken')}`
        },
        body:JSON.stringify(payment)
      }).then(res =>res.json())
      .then(data => {
        setProcessing(false);
        console.log(data);
      })
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="btn btn-success" type="submit" disabled={!stripe || !clientSecret}>

          Pay
        </button>
      </form>
      {
        cardError && <p className="text-red-500">{cardError}</p>
      }
      {
        success && <div className="text-green-500">
          <p>{success}</p>
          <p>Your transaction Id:<span className="text-orange-500 font-bold">{transactionId}</span></p>
        </div>
      }
    </div>
  );
};

export default Checkout;
