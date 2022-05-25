import React from "react";
import { useCreateUserWithEmailAndPassword,  useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from "../../firebasse.init";
import { useForm } from "react-hook-form";
import Loading from "../../Shared/Loading";
import { Link, Navigate, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";


const Registration =()=>{
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      
      const [updateProfile, updating, updateerror] = useUpdateProfile(auth);

      const [token] = useToken (user || guser)
      const navigate = useNavigate();
let signInError;
      if(loading || gloading || updating){
<Loading></Loading>
      }

      if(error || gerror || updateerror){
          signInError= <p className="text-red-500"><small>{error?.message ||gerror?.message ||updateerror?.message}</small> </p>
      }
    if (token) {
        
        navigate('/products')
    }
    const onSubmit = async data =>{
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile ( {displayName: data.name});
        console.log('update done');
        
    } 


    return (
        <div className="flex h-screen justify-center items-center">

            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-bold">Sign Up</h2>
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
                                <span class="label-text">Password</span>
                            </label>
                            <input type="password"
                                placeholder="Your Password"
                                class="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minlength: {
                                        value: 6,
                                        message: 'Must be 6 charecters or longer'
                                    }
                                })} />
<label className="label">
{errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
{errors.password?.type === 'minlength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
</label>
                        </div>
{signInError}
                       
                        <input class="btn w-full max-w-xs" type="submit" value="signup" />
                    </form>

<p className="text-red-500">Already have an Account? <Link className="text-blue-500" to='/login'>Please Login</Link></p>
                    <div class="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        class="btn btn-secondary">Continue with Google</button>

                </div>
            </div>
        </div>
    );
};

export default Registration;
