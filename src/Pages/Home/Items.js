import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import Product from "./Product";

const Items =()=>{
    const [items, setItems] = useState([]);
    const [orders, setOrders] = useState(null);

    const navigate = useNavigate();
    const navigateToAllProduct = id =>{
        navigate(`/products`)}

    useEffect( ()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setItems(data.slice(-3)))
    },[]);
    return (
        <div className="">
		<h1 className=" flex justify-center m-10 text-5xl"> Tools </h1>

        <div className="flex justify-between grid grid-cols-1 lg:grid-cols-3">
        {
            items.map(product=><Product 
            key={product.id}
            product={product}
            setOrders={setOrders}
            ></Product>)
            
        }
         <button class="btn btn-active btn-secondary flex justify-center" onClick={()=>navigateToAllProduct()}>All Products</button>
        </div>
        {orders && <Modal orders={orders}></Modal>}
       
        </div>
    );
};

export default Items;
