import React from "react";

const Modal = ({ orders }) => {
  const { name, moq, img, available, price } = orders;
  let total = price*moq
  // let total1 = price*number
  // let oq = parseFloat(oq);
  let orderQty = moq;
  let tt = orderQty * price;
  return (
    <div>

      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle ">
        <div class="modal-box ">
          <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
         
         
         <img className="h-24 w-24 mx-auto" src={img} alt="" />
         <div className="text-center">
          <h3 class="font-bold text-lg ">{name}</h3>
          <h3 class="font-bold text-sm">Unit Price:{price}</h3>
          <h3 class="font-bold text-sm">Min Order Qty:{moq}</h3>
          <h3 class="font-bold text-sm">Available Qty:{available}</h3>
         </div>
          <form className="grid grid-cols-1 gap-2 justify-items-center mt-2 ">
            <input type="text" name="Name" placeholder="Your Name" class="input input-bordered w-full max-w-xs" />
            <input type="email" name="email" placeholder="Email Address"
            class="input input-bordered w-full max-w-xs" />
            <input type="text" name="Total" placeholder={total} class="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder={tt} class="input input-bordered w-full max-w-xs" />
            <input type="number" placeholder="Order Quantity" class="input input-bordered w-full max-w-xs" />
            <input type="Submit" placeholder="Order" class="btn btn-secondery w-full max-w-xs" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
