import React from 'react';
import Footer from './Footer';
import Header from './Header';

const LoginPage = () => {
  return (
    <body>
        <Header/>
    <div className="bg-yellow-500 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-extrabold text-black mb-6 text-center">Log In to CoffeeWorld</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-black font-semibold">Email Address</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm bg-brown-800 text-yellow-600" />
          </div>
          <div>
            <label htmlFor="password" className="block text-black font-semibold">Password</label>
            <input type="password" id="password" name="password" className="mt-1 block w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm bg-brown-800 text-yellow-600" />
          </div>
          <button type="submit" className="w-full bg-yellow-500 text-brown-800 py-2 px-4 rounded-md hover:bg-yellow-600 focus:outline-none font-bold focus:ring focus:ring-yellow-500 focus:ring-opacity-50 transition-colors duration-300">Log In</button>
        </form>
        <p className="mt-4 text-center text-black">
          Don't have an account? <a href="/SignUp" className="text-black font-bold hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
    <Footer/>
    </body>
  );
};

export default LoginPage;
