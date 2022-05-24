import React from "react";


const Product = ({ product, setOrders }) => {
    const { id, name, img, description, price, moq, available } = product;
   
    
    return (
        <div>

            <div class="card w-96 bg-base-100 shadow-xl ">
                
                <img className="h-64 w-64 mx-auto" src={img }  alt="Shoes" />
                <h5 class="card-title ml-8 text-sm">
                        Name:{name}<br />
                        Price:{parseInt(price)}<br />
                        MOQ:{parseInt(moq)}<br />
                        Available:{parseInt(available)}<br/>
                        
                        Description:{description}
                    </h5>
                     
                <div class="card-body">
                   
                    <div class="card-actions justify-end">
                        



                    
<label for="booking-modal"
                       disabled={ (available) == 0 }
                       onClick={()=> setOrders(product)}
                       class="btn modal-button">Purchase</label>

               
                
                    </div>
                </div>
            </div>

           

            
        </div>
    );
};

export default Product;
