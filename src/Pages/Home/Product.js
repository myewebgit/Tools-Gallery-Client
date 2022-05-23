import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Product = ({ product }) => {
    const { id, name, img, description, price, moq, available } = product;
   
    
    return (
        <div>

            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h5 class="card-title">
                        Name:{name}<br />
                        Price:{price}<br />
                        MOQ:{moq}<br />
                        Available:{available}
                    </h5>
                    <p>Description:{description}</p>
                    <div class="card-actions justify-end">
                        


<Link to="/products">
                    <button className='btn btn-primary'>Purchase</button>
                </Link>
                
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
