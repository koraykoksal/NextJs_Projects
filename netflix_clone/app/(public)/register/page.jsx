"use client";
import GoogleIcon from "@/public/icons/GoogleIcon";
import { AuthContext } from "@/context/AuthContext";
import React, { useContext, useState } from "react";

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

  const {createUser} = useContext(AuthContext)
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

  const hadleChange = (e) => {setInfo({ ...info, [e.target.id]: e.target.value })};


  const handleProviderLogin = () => {
    signUpProvider();
  };

  return (

    <div className="relative h-screen w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-50 px-16 py-16 self-center relative top-28 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <form onSubmit={handleSubmit}>

              <h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
                Sign Up
              </h2>

              <div className="relative z-0 w-full mb-6 group">
              
                <input
                  name="floating_text"
                  id="firstName"
                  value={info.firstName}
                  className="peer rounded-sm p-1"
                  type="text"
                  required
                  placeholder=" "
                  onChange={hadleChange}
                />
                <label htmlFor="floating_text" >First Name</label>
              </div>

              <div className="relative z-0 w-full mb-6 group">
             
                <input
                  name="floating_text"
                  id="lastName"
                  value={info.lastName}
                  className="peer rounded-sm p-1"
                  type="text"
                  required
                  placeholder=" "
                  onChange={hadleChange}
                />
                 <label htmlFor="floating_text">Last Name</label>
              </div>

              <div className="relative z-0 w-full mb-6 group">
              
                <input
                  name="floating_text"
                  id="email"
                  value={info.email}
                  className="peer rounded-sm p-1"
                  type="email"
                  placeholder=" "
                  required
                  onChange={hadleChange}
                />
                <label htmlFor="floating_text">Email</label>
              </div>

              <div className="relative z-0 w-full mb-6 group">
              
                <input
                  name="floating_text"
                  id="password"
                  value={info.password}
                  className="peer rounded-sm p-1"
                  type="password"
                  placeholder=" "
                  required
                  onChange={hadleChange}
                />
                <label htmlFor="floating_password">Password</label>
              </div>


              <button className="bg-red-700 p-2 rounded-md w-full text-white mb-3 hover:bg-red-600" type="submit">
                Register
              </button>

              <button
                className="flex justify-center text-center items-center btn-danger w-full bg-white hover:bg-slate-100 rounded-md p-2 text-black"
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

  //   <section className="bg-gray-50 dark:bg-gray-900">
  // <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
  //   <a
  //     href="#"
  //     className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
  //   >
  //     <img
  //       className="w-8 h-8 mr-2"
  //       src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
  //       alt="logo"
  //     />
  //     Flowbite
  //   </a>
  //   <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
  //     <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
  //       <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
  //         Create and account
  //       </h1>
  //       <form className="space-y-4 md:space-y-6" action="#">
  //         <div>
  //           <label
  //             htmlFor="email"
  //             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  //           >
  //             Your email
  //           </label>
  //           <input
  //             type="email"
  //             name="email"
  //             id="email"
  //             className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  //             placeholder="name@company.com"
  //             required=""
  //           />
  //         </div>
  //         <div>
  //           <label
  //             htmlFor="password"
  //             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  //           >
  //             Password
  //           </label>
  //           <input
  //             type="password"
  //             name="password"
  //             id="password"
  //             placeholder="••••••••"
  //             className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  //             required=""
  //           />
  //         </div>
  //         <div>
  //           <label
  //             htmlFor="confirm-password"
  //             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
  //           >
  //             Confirm password
  //           </label>
  //           <input
  //             type="confirm-password"
  //             name="confirm-password"
  //             id="confirm-password"
  //             placeholder="••••••••"
  //             className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  //             required=""
  //           />
  //         </div>
  //         <div className="flex items-start">
  //           <div className="flex items-center h-5">
  //             <input
  //               id="terms"
  //               aria-describedby="terms"
  //               type="checkbox"
  //               className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
  //               required=""
  //             />
  //           </div>
  //           <div className="ml-3 text-sm">
  //             <label
  //               htmlFor="terms"
  //               className="font-light text-gray-500 dark:text-gray-300"
  //             >
  //               I accept the{" "}
  //               <a
  //                 className="font-medium text-primary-600 hover:underline dark:text-primary-500"
  //                 href="#"
  //               >
  //                 Terms and Conditions
  //               </a>
  //             </label>
  //           </div>
  //         </div>
  //         <button
  //           type="submit"
  //           className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
  //         >
  //           Create an account
  //         </button>
  //         <p className="text-sm font-light text-gray-500 dark:text-gray-400">
  //           Already have an account?{" "}
  //           <a
  //             href="#"
  //             className="font-medium text-primary-600 hover:underline dark:text-primary-500"
  //           >
  //             Login here
  //           </a>
  //         </p>
  //       </form>
  //     </div>
  //   </div>
  // </div>
  //   </section>



  );
};

export default Register;
