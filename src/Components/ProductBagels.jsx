import React from 'react'
import { motion } from "framer-motion";


const ProductBagels = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
    {/* Menu Item 1 */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300"
    >
      <div className="relative">
        <img
          src="https://omg-bakery.com/wp-content/uploads/2019/03/Plain-bagel.jpg"
          alt="Plain Bagel"
          className="w-full h-44 md:h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-25"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-yellow-800">Plain Bagel</h3>
        <p className="text-gray-700 mb-2">Classic and simple, perfect with cream cheese.</p>
        <p className="text-gray-700">Calories: 250</p>
        <p className="text-gray-700">Price: $1.50</p>
      </div>
    </motion.div>
    {/* Menu Item 2 */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300"
    >
      <div className="relative">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/20090424_Bagels_001.JPG/1200px-20090424_Bagels_001.JPG"
          alt="Everything Bagel"
          className="w-full h-44 md:h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-25"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-yellow-800">Everything Bagel</h3>
        <p className="text-gray-700 mb-2">Loaded with sesame, poppy seeds, garlic, and more.</p>
        <p className="text-gray-700">Calories: 280</p>
        <p className="text-gray-700">Price: $2.00</p>
      </div>
    </motion.div>
    {/* Menu Item 3 */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300"
    >
      <div className="relative">
        <img
          src="https://thecookstreat.com/wp-content/uploads/2022/07/BlueberryBagels.jpg"
          alt="Blueberry Bagel"
          className="w-full h-44 md:h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-25"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-yellow-800">Blueberry Bagel</h3>
        <p className="text-gray-700 mb-2">Sweet and fruity, perfect for breakfast.</p>
        <p className="text-gray-700">Calories: 270</p>
        <p className="text-gray-700">Price: $2.00</p>
      </div>
    </motion.div>
    {/* Menu Item 4 */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300"
    >
      <div className="relative">
        <img
          src="https://shelskys.com/wp-content/uploads/2023/05/SesameBagelPerfect-scaled-e1616623777263.jpeg"
          alt="Sesame Bagel"
          className="w-full h-44 md:h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-25"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-yellow-800">Sesame Bagel</h3>
        <p className="text-gray-700 mb-2">Toasted sesame seeds give this bagel a nutty flavor.</p>
        <p className="text-gray-700">Calories: 260</p>
        <p className="text-gray-700">Price: $1.75</p>
      </div>
    </motion.div>
    {/* Menu Item 5 */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300"
    >
      <div className="relative">
        <img
          src="https://www.recipegirl.com/wp-content/uploads/2021/03/Cinnamon-Raisin-Bagels-1.jpeg"
          alt="Cinnamon Raisin Bagel"
          className="w-full h-44 md:h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-25"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-yellow-800">Cinnamon Raisin Bagel</h3>
        <p className="text-gray-700 mb-2">Sweet and spiced, perfect with a spread of butter.</p>
        <p className="text-gray-700">Calories: 290</p>
        <p className="text-gray-700">Price: $2.25</p>
      </div>
    </motion.div>
    {/* Menu Item 6 */}
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300"
    >
      <div className="relative">
        <img
          src="https://i5.peapod.com/c/TU/TUS38.png"
          alt="Mini Bagels"
          className="w-full h-44 md:h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-25"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-yellow-800">Mini Bagels</h3>
        <p className="text-gray-700 mb-2">Perfect bite-sized bagels, great for snacks.</p>
        <p className="text-gray-700">Calories: 100 (per mini bagel)</p>
        <p className="text-gray-700">Price: $0.75</p>
      </div>
    </motion.div>
  </div>
  
  )
}

export default ProductBagels