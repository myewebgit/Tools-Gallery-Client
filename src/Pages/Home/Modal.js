import React from "react";

const Modal =({orders})=>{
    const {name, moq,img, available,price} = orders;
    return (
        <div>
		
        <input type="checkbox" id="booking-modal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
  <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="font-bold text-lg">Order for:{name}</h3>
     <img className="h-24 w-24 mx-auto" src={img}  alt=""/>
    <h3 class="font-bold text-lg">Order for:{moq}</h3>

    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
    <p class="py-4">{price}You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="modal-action">
      <label for="booking-modal" class="btn">Yay!</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default Modal;
