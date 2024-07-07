import React, { useState } from 'react'
import { motion } from "framer-motion";
import ProductMenuHeading from './productMenuHeading';
import ProductCoffee from './ProductCoffee';
import ProductPastries from './ProductPastries';
import ProductBagels from './ProductBagels';

const ProductsMenu = () => {

const [isOpenCoffee, setIsOpenCoffee] = useState(false);
const [isOpenPastries, setIsOpenPastries] = useState(false);
const [isOpenBagels, setIsOpenBagels] = useState(false);

const CoffeeMenu = () => {
setIsOpenCoffee(!isOpenCoffee);
setIsOpenPastries(false);
setIsOpenBagels(false);

};

const PastriesMenu = () => {
  setIsOpenPastries(!isOpenPastries);
  setIsOpenCoffee(false);
  setIsOpenBagels(false);
  };

  const BagelsMenu = () => {
    setIsOpenBagels(!isOpenBagels);
    setIsOpenCoffee(false);
    setIsOpenPastries(false);
    };


  return (
    <section id="menu" className="  py-20 flex-wrap mb-14 bg-gray-50 ">
    <div className="container mx-auto px-4">
<ProductMenuHeading/>,

<div className='flex items-center space-x-8  md:space-x-56 justify-center '>
<div className='text-center'> <h1 className='text-2xl mb-4 md:text-3xl md:mb-8 tex font-bold'>Coffees </h1> <img
    src='https://www.caffesociety.co.uk/assets/recipe-images/latte-small.jpg' 
    alt='Button Image'
    className={`border-4 border-black ${isOpenCoffee ? 'bg-red-500 text-white border-green-500 border-8' : 'bg-yellow-500'}  text-black hover:text-white text-lg rounded-full h-20 w-20 md:text-3xl mb-14 md:h-36 md:w-36`}
    onClick={CoffeeMenu}
  /> </div>
  <div className='text-center'> <h1 className='text-2xl text-center mb-4 md:text-3xl md:mb-8 font-bold'>Pastries</h1> <img
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/2018_01_Croissant_IMG_0685.JPG/1200px-2018_01_Croissant_IMG_0685.JPG"
    alt='Button Image'
    className={`border-4  border-black ${isOpenPastries ? 'bg-red-500 border-green-500 border-8 text-white' : 'bg-yellow-500'} hover:bg-red-700 text-black hover:text-white text-lg rounded-full h-20 w-20 md:text-3xl mb-14 md:h-36 md:w-36`} onClick={PastriesMenu}
  /> </div>
    <div className='text-center'> <h1 className='text-2xl mb-4 md:text-3xl text-center md:mb-8 font-bold'>  Bagels</h1> <img
    src="https://omg-bakery.com/wp-content/uploads/2019/03/Plain-bagel.jpg" 
    alt='Button Image'
    className={`border-4 border-black ${isOpenBagels ? 'bg-red-500 text-white border-green-500 border-8' : 'bg-yellow-500'} hover:bg-red-700 text-black hover:text-white text-lg rounded-full h-20 w-20 md:text-3xl mb-14 md:h-36 md:w-36`} onClick={BagelsMenu}
  /> </div>
  
</div>
  

{isOpenCoffee && (
<ProductCoffee/> 
)}

{isOpenPastries && (
<ProductPastries/>
)}

{isOpenBagels && (
<ProductBagels/>
)}



     
    </div>
  </section>

  )
};

export default ProductsMenu;