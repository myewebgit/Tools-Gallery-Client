import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe('pk_test_51L3wAuKF1J02KEfCzcBWojxmCfSdfQhg0jXbY0hFW9QABhMm5lUC9usi49Nysm2zSHIcsbFO5ibVMLvE7dATTzkH00WpSO7H4p');

const Payment =()=>{
    const {id} = useParams();
    const url = `http://localhost:5000/booking/${id}`;

    const {data:orders, isLoading} = useQuery(['booking', id], () => fetch(url,{
        method:'GET',
        headers: {
            'authorization':`Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()));

    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
		
  <div class="card w-50 bg-base-100 max-w-sm shadow-xl my-12">
  <div class="card-body">
    <h2 class="card-title text-success">Hello!!! Mr. {orders.clientName}.</h2>
    <h2 class="card-title">Please pay for {orders.order}</h2>
    <p>Please Pay ${orders.amount}.00 </p>
    <h2 >Product will be delivered with in 7 days.</h2>
    
  </div>
</div>
    <div class="card flex-shrink-0 w-50 max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
      <Elements stripe={stripePromise}>
    <CheckoutForm orders={orders}/>
  </Elements> 
       
        
      </div>
    </div>
  

        </div>
    );
};

export default Payment;
