"use client";
import GoogleIcon from "@/public/icons/GoogleIcon";
import { AuthContext } from "@/context/AuthContext";
import React, { useContext, useState } from "react";
import Link from 'next/link';


const Register = () => {
  //* ayrı stateler
  // const [firstName, setFirstName] = useState();
  // const [lastName, setLastName] = useState();
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  //* birleştirilmiş state
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const {createUser,signUpProvider} = useContext(AuthContext)
  // const { email, password, firstName, lastName } = info;

  const handleSubmit = (e) => {
    // const displayName = `${firstName} ${lastName}`;
    const displayName = `${info.firstName} ${info.lastName}`;
    
    e.preventDefault();

    createUser(info.email, info.password, displayName);

    setInfo({
      firstName: "",
      lastName: "",
      email: "",
      password: "",})
    
  };

  const handleChange = (e) => {setInfo({ ...info, [e.target.id]: e.target.value })};


  const handleProviderLogin = () => {
    signUpProvider();
  };


  console.log(info)

  return (

    <div className="relative h-screen w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center relative top-28 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <form onSubmit={handleSubmit}>
              <h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
                Sign Up
              </h2>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  name="floating_text"
                  id="firstName"
                  value={info.firstName}
                  className="peer"
                  type="text"
                  required
                  placeholder=" "
                  onChange={handleChange}
                />
                <label htmlFor="floating_text">First Name</label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  name="floating_text"
                  id="lastName"
                  value={info.lastName}
                  className="peer"
                  type="text"
                  required
                  placeholder=" "
                  onChange={handleChange}
                />
                <label htmlFor="floating_text">Last Name</label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  name="floating_email"
                  id="email"
                  value={info.email}
                  className="peer"
                  type="email"
                  placeholder=" "
                  required
                  onChange={handleChange}
                />
                <label htmlFor="floating_email">Email</label>
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
                Register
              </button>
              <button
                className="flex justify-between text-center items-center btn-danger"
                type="button"
                onClick={handleProviderLogin}
              >
                Continue with Google
                <GoogleIcon color="currentColor" />
              </button>

              <div className="text-center mt-5">
              <Link href="/login" className='text-gray-500 hover:text-gray-400'>
                Do you have an account ?
              </Link>
              </div>
              

            </form>
          </div>
        </div>
      </div>
    </div>



  );
};

export default Register;
