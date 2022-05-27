import React from "react";
import { useForm } from "react-hook-form";

const AddProduct =()=>{
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
         console.log(data);
         const url = `http://localhost:5000/service`;
         fetch(url,{
             method:'POST',
             headers: {
                 'content-type': 'application/json'
             },
             body:JSON.stringify(data)
         })
         .then(res => res.json())
         .then(result =>{
             console.log(result);
         })
        };
    return (
        <div >
		<h1> my description…………… AddProduct </h1>
      
        <form className="grid gap-1" onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Tools" type="text"  class="input input-bordered w-full max-w-xs" {...register("name")} />
      <input placeholder="Photo " type="text"  class="input input-bordered w-full max-w-xs"  {...register("img")} />
      <input placeholder="Price" type="text" class="input input-bordered w-full max-w-xs"  {...register("price")}  />
      <input placeholder="Minimum Ordered Qty" type="text" class="input input-bordered w-full max-w-xs"  {...register("moq")}  />
      <input placeholder="Available" type="text" class="input input-bordered w-full max-w-xs"  {...register("available")}  />
      <input placeholder="Description" type="text" class="input input-bordered w-full max-w-xs"  {...register("description")}  />
      <input type="submit" value="add" class="input input-bordered w-full max-w-xs" />
    </form>

     
        
    </div>
    );
};

export default AddProduct;
