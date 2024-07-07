import React from 'react';
import Header from './Header';
import Footer from './Footer';

const SignupPage = () => {
  return (
    <body>
        <Header/>
    <div className="bg-yellow-500 min-h-screen flex items-center justify-center">
   <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-extrabold text-brown-800 mb-6 text-center">Create an Account</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-brown-800 font-semibold">Name</label>
            <input type="text" id="name" name="name" className="mt-1 block w-full px-4 py-2 border border-brown-600 rounded-md border-black focus:outline-none focus:ring focus:ring-amber-950  focus:border-brown-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="email" className="block text-brown-800 font-semibold">Email Address</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full px-4 py-2 border border-brown-600 rounded-md border-black focus:outline-none focus:ring focus:ring-amber-950 focus:border-brown-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="password" className="block text-brown-800 font-semibold">Password</label>
            <input type="password" id="password" name="password" className="mt-1 block w-full px-4 py-2 border border-brown-600 border-black rounded-md focus:outline-none focus:ring focus:ring-amber-950  focus:border-brown-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="confirm-password" className="block text-brown-800 font-semibold">Confirm Password</label>
            <input type="password" id="confirm-password" name="confirm-password" className="mt-1 block w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring focus:ring-amber-950  focus:border-brown-500 sm:text-sm" />
          </div>
          <button type="submit" className="w-full bg-yellow-500 text-brown-800 py-2 px-4 font-bold rounded-md hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 transition-colors duration-300">Sign Up</button>
        </form>
        <p className="mt-4 text-center text-black">
          Already have an account? <a href="/Login" className="text-brown-900 font-bold hover:underline">Log In</a>
        </p>
      </div>
    </div>
    <Footer/>
    </body>
  );
};

export default SignupPage;
