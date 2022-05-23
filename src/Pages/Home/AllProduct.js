import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import Product from "./Product";

const AllProduct =()=>{
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState(null);
    useEffect( ()=>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data => setProducts(data))
    },[]);
    return (
        <div>
		<h1 className="flex justify-center text-emerald-900 text-7xl m-8"> Get Your All Tools Here............ </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 place-content-around gap-4 m-10">
            {
                products.map(product => <Product
                key={product.id}
                product={product}
                setOrders={setOrders}
                ></Product>)
                
            }
           
        </div>
        {orders && <Modal orders={orders}></Modal>}
        
        </div>
    );
};

export default AllProduct;
