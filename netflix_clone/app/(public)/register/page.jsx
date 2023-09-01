"use client";
import GoogleIcon from "@/public/icons/GoogleIcon";
import { AuthContext } from "@/context/AuthContext";
import React, { useContext, useState } from "react";

const Register = () => {
  //* ayrı stateler
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  //* birleştirilmiş state
  // const [info, setInfo] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   password: "",
  // });

  const {createUser} = useContext(AuthContext)
  // const { email, password, firstName, lastName } = info;

  const handleSubmit = (e) => {
    const displayName = `${firstName} ${lastName}`;
    e.preventDefault();
    createUser(email, password, displayName);

    console.log(firstName, lastName);
  };

  // const hadleChange = (e) =>
  //   setInfo({ ...info, [e.target.id]: e.target.value });

  const handleProviderLogin = () => {
    signUpProvider();
  };

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
                  className="peer"
                  type="text"
                  required
                  placeholder=" "
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <label htmlFor="floating_text">First Name</label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  name="floating_text"
                  className="peer"
                  type="text"
                  required
                  placeholder=" "
                  onChange={(e) => setLastName(e.target.value)}
                />
                <label htmlFor="floating_text">Last Name</label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  name="floating_email"
                  className="peer"
                  type="email"
                  placeholder=" "
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="floating_email">Email</label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  name="floating_password"
                  className="peer"
                  type="password"
                  placeholder=" "
                  required
                  onChange={(e) => setPassword(e.target.value)}
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
