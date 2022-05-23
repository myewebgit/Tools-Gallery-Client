import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Product from "./Product";

const Items =()=>{
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    const navigateToAllProduct = id =>{
        navigate(`/AllProduct`)}

    useEffect( ()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setItems(data.slice(-3)))
    },[]);
    return (
        <div className=" ">
		<h1 className=" flex justify-center m-10 text-5xl"> Tools </h1>
        <div className="flex justify-between grid grid-cols-1 lg:grid-cols-3">
        {
            items.map(product=><Product
            key={product.id}
            product={product}
            ></Product>)
        }
        </div>
       
        </div>
    );
};

export default Items;
