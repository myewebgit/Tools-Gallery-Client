import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../../Shared/Loading";

const MakeAdmin = () => {
    const { register, formState: { errors }, handleSubmit , reset} = useForm();
    const { data: services, isloading } = useQuery('services', () => fetch('http://localhost:5000/service').then(res => res.json()));

    const imgStorageKey = 'f5dcc6ac97219df06ca86f0a21822e96';




    const onSubmit = async data => {
        // console.log('data', data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const  owner = {
                        name: data.name,
                        email: data.email,
                        designation: data.designation,
                        img: img

                    }
                    fetch('http://localhost:5000/owner', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(owner)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                        if(inserted.insertedId){
                            toast.success('Admin is made Successfully!!!')
                            reset();
                        }
                        else{
                            toast.error('Failed to make an Admin!!!')
                        }
                        })
                }
                console.log('imgbb', result);
            })

    }
    if (isloading) {
        return <Loading></Loading>
    }
    return (
        <div>

            <h1 className=""> Make Admin</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Name</span>
                    </label>
                    <input type="name"
                        placeholder="Your Name"
                        class="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is required'
                            }
                        })} />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                    </label>
                    
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input type="email"
                        placeholder="Your Email"
                        class="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is required'
                            },
                            pattern: {
                                value: /[A-Za-z]{3}/,
                                message: 'Provide a valid Email'
                            }
                        })} />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>

                    <label class="label">
                        <span class="label-text">Designation</span>
                    </label>

                    <select class="select input-bordered  w-full max-w-xs">
                        <option disabled selected>Required Designation</option>
                        <option>CEO</option>
                        <option>CFO</option>
                        <option>CTO</option>
                        <option>MD-FINANCE</option>
                        <option>MD-MARKETING</option>
                        <option>MD-HUMANE RESOURCES</option>
                    </select>

                </div>
                <label class="label">
                    <span class="label-text">Photo</span>
                </label>
                <input type="file"
                    placeholder="Your Name"
                    class="input input-bordered w-full max-w-xs"
                    {...register("image", {
                        required: {
                            value: true,
                            message: 'Image is required'
                        }
                    })} />
                <label className="label">
                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                </label>

                <input class="btn w-full max-w-xs" type="submit" value="Make Admin" />
            </form>

        </div>
    );
};

export default MakeAdmin;
