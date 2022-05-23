import React, { useEffect, useState } from "react";
import Product from "./Product";

const AllProduct =()=>{
    const [products, setProducts] = useState([]);

    useEffect( ()=>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data => setProducts(data))
    },[]);
    return (
        <div>
		<h1 className="flex justify-center text-emerald-900 text-7xl m-8"> Get Your All Tools Here............ </h1>
        <div className="grid grid-cols-3 place-content-around gap-4 m-10">
            {
                products.map(product => <Product
                key={product.id}
                product={product}
                ></Product>)
                
            }
           
        </div>

        </div>
    );
};

export default AllProduct;
