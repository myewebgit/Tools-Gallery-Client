import React from "react";
import useServices from "../../hooks/useServices";

const ManageProduct = () => {
    const [services, setServices] = useServices();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
const url = `http://localhost:5000/service/${id}`;
fetch(url,{
    method: 'DELETE'
})
.then(res =>res.json())
.then(data =>{
    console.log(data);
const remaining = services.filter(service => service._id !== id);
setServices(remaining);
})
        }
    }

    return (
        <div>
            <h1> Manage Product:{services.length} </h1>
            {
                services.map(service => <div key={service._id}>
                    <img className="h-24 w-24" src={service.img} ></img>
                    <h3>{service.name}<br></br>
                        <button onClick={() =>handleDelete(service._id)} class="btn btn-warning">Delete</button></h3>
                </div>)
            }
        </div>
    );
};

export default ManageProduct;
