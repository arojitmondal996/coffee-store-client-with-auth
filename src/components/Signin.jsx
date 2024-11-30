import React, { useContext } from 'react';
import Header from './Header';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const Signin = () => {

    const { signInUser } = useContext(AuthContext);

    const handleSignIn = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);
        signInUser(email, password)
            .then(result => {
                console.log(result.user);

                // update last login time
                const lastSignInTime = result?.user?.metadata?.lastSignInTime;
                const loginInfo = { email, lastSignInTime };

                fetch(`https://coffee-store-server-sepia-iota.vercel.app/users`,{
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loginInfo)
                })
                .then(res => res.json())
                .then(data => {
                    console.log('sign in info updated in db', data)
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <>
            <Header />
            <div>
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Sign In!</h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <form onSubmit={handleSignIn} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">SignIp</button>
                                </div>
                                <p>New to Coffee Drinker: <Link to={"/signup"}>Sign Up</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signin;