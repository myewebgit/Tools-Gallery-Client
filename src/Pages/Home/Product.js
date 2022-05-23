import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
    const { id, name, img, description, price, moq, available } = product;
   
    
    return (
        <div>

            <div class="card w-96 bg-base-100 shadow-xl ">
                
                <img className="h-64 w-64 mx-auto" src={img }  alt="Shoes" />
                <h5 class="card-title ml-8 text-sm">
                        Name:{name}<br />
                        Price:{price}<br />
                        MOQ:{moq}<br />
                        Available:{available}<br/>
                        Description:{description}
                    </h5>
                     
                <div class="card-body">
                   
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
