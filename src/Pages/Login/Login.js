import React from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../firebasse.init";
import { useForm } from "react-hook-form";
import Loading from "../../Shared/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Login = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

let signInError;
const navigate = useNavigate();
const location = useLocation();
let from = location.state?.from?.pathname || '/';

      if(loading || gloading){
<Loading></Loading>
      }

      if(error || gerror){
          signInError= <p className="text-red-500"><small>{error?.message ||gerror?.message}</small> </p>
      }
    if (user || guser) {
        navigate (from,{replace:true});
    }
    const onSubmit = data =>{
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
    } 

    return (
        <div className="flex h-screen justify-center items-center">

            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
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
                       
                        <input class="btn w-full max-w-xs" type="submit" value="login" />
                    </form>

<p>New to Tools-Gallery? <Link className="text-blue-500" to='/registration'>Create New Account</Link></p>
                    <div class="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        class="btn btn-secondary">Continue with Google</button>

                </div>
            </div>
        </div>
    );
};

export default Login;
