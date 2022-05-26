import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebasse.init";

const MyOrders = () => {

  const [carts, setCarts] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?client=${user.email}`, {
        method: 'GET',
        headers: {
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
        .then(res => {
          console.log('res', res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/')
          }
          return res.json()
        })
        .then(data =>
          setCarts(data));
    }
  }, [user]);
  return (
    <div>
      <h1>MyOrders:{carts.length}</h1>
      <div class="overflow-x-auto">
        <table class="table w-full">

          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Email</th>
              <th>Product</th>
              <th>Unit</th>
              <th>Price</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {
              carts.map((o, index) => <tr>
                <th>{index + 1}</th>
                <td>{o.clientName}</td>
                <td>{o.client}</td>
                <td>{o.order}</td>
                <td>{o.orQty}</td>
                <td>{o.price}</td>
                <td>{o.amount}</td>

              </tr>)
            }
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default MyOrders;
