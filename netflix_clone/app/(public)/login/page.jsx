"use client";

import React, { useContext } from 'react'
import { useState } from 'react'
import GoogleIcon from "@/public/icons/GoogleIcon";
import { AuthContext } from "@/context/AuthContext";
import Link from 'next/link';

 const Login = () => {


   
    const {signIn,signUpProvider} = useContext(AuthContext)

  const [info, setInfo] = useState({
    email:"",
    password:""
  })


  const handleChange=(e)=>{

    setInfo({...info,[e.target.id]:e.target.value})

  }

  const handleProviderLogin = () => {
    signUpProvider();
  };

  const handleSubmit=(e)=>{
    e.preventDefault();

    signIn(info.email,info.password)

    setInfo({
      email:"",
      password:""
    })
  }

  return (
    
    <div className="relative h-screen w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center relative top-28 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <form onSubmit={handleSubmit}>
              <h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
                Sign In
              </h2>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  name="floating_text"
                  id="email"
                  value={info.email}
                  className="peer"
                  type="email"
                  required
                  placeholder=" "
                  onChange={handleChange}
                />
                <label htmlFor="floating_text">Email</label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  name="floating_password"
                  id="password"
                  value={info.password}
                  className="peer"
                  type="password"
                  placeholder=" "
                  required
                  onChange={handleChange}
                />
                <label htmlFor="floating_password">Password</label>
              </div>
              <button className="btn-danger" type="submit">
                Login
              </button>
              <button
                className="flex justify-between text-center items-center btn-danger"
                type="button"
                onClick={handleProviderLogin}
              >
                Continue with Google
                <GoogleIcon color="currentColor" />
              </button>

              <div className='text-center mt-5'>
              <Link href="/register" className='text-gray-500 hover:text-gray-400'>
                Don't you have an account ?
              </Link>
              </div>
              

            </form>
          </div>
        </div>
      </div>
    </div>


  )
}


export default Login