import React from 'react'
import { motion } from "framer-motion";


const ProductCoffee = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
    {/* Menu Item 1 */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300"
    >
      <div className="relative">
        <img
          src="https://www.thespruceeats.com/thmb/HJrjMfXdLGHbgMhnM0fMkDx9XPQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-espresso-765702-hero-03_cropped-ffbc0c7cf45a46ff846843040c8f370c.jpg"
          alt="Espresso"
          className="w-full h-44  md:h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-25"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-yellow-800">Espresso</h3>
        <p className="text-gray-700 mb-2">Strong and rich, perfect pick-me-up.</p>
        <p className="text-gray-700">Small: 5 cal - $2.00</p>
        <p className="text-gray-700">Medium: 10 cal - $3.00</p>
        <p className="text-gray-700">Large: 15 cal - $4.00</p>
      </div>
    </motion.div>
    {/* Menu Item 2 */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300"
    >
      <div className="relative">
        <img
          src="https://www.caffesociety.co.uk/assets/recipe-images/latte-small.jpg"
          alt="Latte"
          className="w-full h-44  md:h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-25"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-yellow-800">Latte</h3>
        <p className="text-gray-700 mb-2">Smooth espresso with steamed milk.</p>
        <p className="text-gray-700">Small: 150 cal - $3.50</p>
        <p className="text-gray-700">Medium: 200 cal - $4.50</p>
        <p className="text-gray-700">Large: 250 cal - $5.50</p>
      </div>
    </motion.div>
    {/* Menu Item 3 */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300"
    >
      <div className="relative">
        <img
          src="https://www.thespruceeats.com/thmb/POPhcPYBWx7fNJu8Bc7YjS-Flso=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-mocha-4797918-hero-01-1-f8fb7ebd74914895b61366f6fc1d4b05.jpg"
          alt="Mocha"
          className="w-full h-44  md:h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-25"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-yellow-800">Mocha</h3>
        <p className="text-gray-700 mb-2">Indulgent mocha with rich chocolate flavors.</p>
        <p className="text-gray-700">Small: 180 cal - $4.00</p>
        <p className="text-gray-700">Medium: 230 cal - $5.00</p>
        <p className="text-gray-700">Large: 280 cal - $6.00</p>
      </div>
    </motion.div>
    {/* Menu Item 4 */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300"
    >
      <div className="relative">
        <img
          src="https://www.simplyrecipes.com/thmb/t9ZeQC3Nb2YUoQTnxUJrjJbnKEA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Cold-Brew-Coffee-LEAD-16-428691bcdd594281b2f5dc6dbc8235e4.jpg"
          alt="Cold Brew"
          className="w-full h-44  md:h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-25"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-yellow-800">Cold Brew</h3>
        <p className="text-gray-700 mb-2">Refreshing cold brew, perfect for hot days.</p>
        <p className="text-gray-700">Small: 10 cal - $3.00</p>
        <p className="text-gray-700">Medium: 15 cal - $4.00</p>
        <p className="text-gray-700">Large: 20 cal - $5.00</p>
      </div>
    </motion.div>
    {/* Menu Item 5 */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300"
    >
      <div className="relative">
        <img
          src="https://www.livingnorth.com/images/media/articles/food-and-drink/eat-and-drink/coffee.png?w=1200&h=630&fit=crop&fm=pjpg&q=90"
          alt="Cappuccino"
          className="w-full h-44  md:h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-25"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-yellow-800">Cappuccino</h3>
        <p className="text-gray-700 mb-2">Classic espresso with frothy milk and a sprinkle of cocoa.</p>
        <p className="text-gray-700">Small: 130 cal - $3.50</p>
        <p className="text-gray-700">Medium: 170 cal - $4.50</p>
        <p className="text-gray-700">Large: 210 cal - $5.50</p>
      </div>
    </motion.div>
    {/* Menu Item 6 */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300"
    >
      <div className="relative">
        <img
          src="https://pastaevangelists.com/cdn/shop/articles/Affogato_1200x1200.png?v=1621613046"
          alt="Affogato"
          className="w-full h-44  md:h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-25"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-yellow-800">Affogato</h3>
        <p className="text-gray-700 mb-2">Espresso poured over a scoop of vanilla ice cream.</p>
        <p className="text-gray-700">Small: 200 cal - $4.50</p>
        <p className="text-gray-700">Medium: 250 cal - $5.50</p>
        <p className="text-gray-700">Large: 300 cal - $6.50</p>
      </div>
    </motion.div>
  </div>
  
  )
};



export default ProductCoffee