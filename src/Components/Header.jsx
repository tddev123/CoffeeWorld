import React from 'react';
import NavBar from './NavBar';

const Header = () => {
 

  return (

    <header className='bg-amber-950 text-zinc-100 sticky flex-wrap top-0 z-20 mx-auto flex w-full items-center justify-between border-zinc-950 p-8'>
<div className='flex space-x-2 items-center'><a className='flex space-x-2 items-center' href="/"><img className='md:h-12 w-12' src=".\Images\icons8-coffee-100.png" alt="" />
<h1 className='text-xl md:text-3xl font-serif'>CoffeeWorld</h1></a></div>

<NavBar/>


<div className="hidden md:flex items-center space-x-4">
          <a href="/Login">
            <button className="hover:bg-opacity-50  hover:bg-yellow-200 bg-transparent border-2 text-white font-bold py-2 px-4 rounded-lg transition duration-300">Login</button>
          </a>
          <a href="/SignUp">
            <button className="hover:bg-opacity-50  hover:bg-yellow-200 bg-transparent border-2 text-white font-bold py-2 px-4 rounded-lg transition duration-300">Sign Up</button>
          </a>
        </div>


    </header>
   
  )
};

export default Header;

