import React from "react";


const OwnerList =({owner, index})=>{
    const {img,name, email } = owner;


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
        <td><button  className="btn btn-xs btn-error">Delete</button></td>
      </tr>

       
    );
};

export default OwnerList;
