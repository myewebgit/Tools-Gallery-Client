import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import Product from "./Product";

const Best =()=>{
    const [items, setItems] = useState([]);
    const [orders, setOrders] = useState(null);

    const navigate = useNavigate();
    const navigateToAllProduct = id =>{
        navigate(`/products`)}

    useEffect( ()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setItems(data.slice(0,3)))
    },[]);
   
    return (
        <div className="">
		<h1 className=" flex justify-center  text-3xl font-bold"> Best Seller ....... </h1>

        <div className="flex justify-between gap-5 grid grid-cols-1 lg:grid-cols-3">
        {
            items.map(product=><Product 
            key={product.id}
            product={product}
            setOrders={setOrders}
            ></Product>)
            
        }
        
        </div>
        {orders && <Modal orders={orders}></Modal>}
        <div className="flex justify-center" >
            <button class="btn btn-active btn-info my-2 " onClick={()=>navigateToAllProduct()}>All Products</button></div>
		
        </div>
    );
};

export default Best;