import React from "react";
import { toast } from "react-toastify";


const OwnerList =({owner, index, refetch})=>{
    const {img,name, email } = owner;

const handleDelete = email =>{
  fetch(`http://localhost:5000/owner/${email}`,{
    method:'DELETE',
    headers:{
      authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  })
  .then(res => res.json())
  .then(data =>{
    console.log(data);
    if(data.deleteCount){
      toast.success(`Admin:${name} is deleted`)
      refetch();
    }
  })
}

    return (
        <tr>
        <th>{ index + 1}</th>
        <td><div class="avatar">
  <div class="w-16 rounded">
    <img src={img} alt={name} />
  </div>
</div></td>
        <td>{name}</td>
        <td>{email}</td>
        <td><button onClick={() => handleDelete(email)}  className="btn btn-xs btn-error">Delete</button></td>
      </tr>

       
    );
};

export default OwnerList;
