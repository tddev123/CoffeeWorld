import React from 'react'
import { motion } from "framer-motion";

const ProductPastries = () => {
  return (
<div className="grid grid-cols-2 md:grid-cols-3 gap-8">
  {/* Menu Item 1 */}
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300"
  >
    <div className="relative">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/2018_01_Croissant_IMG_0685.JPG/1200px-2018_01_Croissant_IMG_0685.JPG"
        alt="Croissant"
        className="w-full h-44 md:h-64 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-25"></div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-yellow-800">Croissant</h3>
      <p className="text-gray-700 mb-2">Flaky and buttery French pastry.</p>
      <p className="text-gray-700">Calories: 231</p>
      <p className="text-gray-700">Price: $2.50</p>
    </div>
  </motion.div>
  {/* Menu Item 2 */}
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300"
  >
    <div className="relative">
      <img
        src="https://www.allrecipes.com/thmb/VxNNFRBxh5G9osvtKw9J6T5PKsw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/9175447-d4cafe297e4746bfbe97e485ee057a0e.jpg"
        alt="Cinnamon Roll"
        className="w-full h-44 md:h-64 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-25"></div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-yellow-800">Cinnamon Roll</h3>
      <p className="text-gray-700 mb-2">Sweet and gooey, topped with cream cheese icing.</p>
      <p className="text-gray-700">Calories: 320</p>
      <p className="text-gray-700">Price: $3.00</p>
    </div>
  </motion.div>
  {/* Menu Item 3 */}
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300"
  >
    <div className="relative">
      <img
        src="https://sallysbakingaddiction.com/wp-content/uploads/2017/07/slice-of-apple-pie-2.jpg"
        alt="Apple Pie"
        className="w-full h-44 md:h-64 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-25"></div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-yellow-800">Apple Pie</h3>
      <p className="text-gray-700 mb-2 ">Classic apple pie with a flaky crust.</p>
      <p className="text-gray-700">Calories: 411</p>
      <p className="text-gray-700">Price: $4.00</p>
    </div>
  </motion.div>
  {/* Menu Item 4 */}
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300"
  >
    <div className="relative">
      <img
        src="https://handletheheat.com/wp-content/uploads/2020/10/BAKERY-STYLE-CHOCOLATE-CHIP-COOKIES-9-637x637-1.jpg"
        alt="Chocolate Chip Cookies"
        className="w-full h-44 md:h-64 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-25"></div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-yellow-800">Chocolate Chip Cookies</h3>
      <p className="text-gray-700 mb-2">Warm, chewy, and packed with chocolate chips.</p>
      <p className="text-gray-700">Calories: 150 (per cookie)</p>
      <p className="text-gray-700">Price: $1.50</p>
    </div>
  </motion.div>
  {/* Menu Item 5 */}
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300"
  >
    <div className="relative">
      <img
        src="https://sugarspunrun.com/wp-content/uploads/2021/05/Best-Blueberry-Muffins-Recipe-1-of-1.jpg"
        alt="Blueberry Muffins"
        className="w-full h-44 md:h-64 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-25"></div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-yellow-800">Blueberry Muffins</h3>
      <p className="text-gray-700 mb-2 ">Bursting with fresh blueberries.</p>
      <p className="text-gray-700">Calories: 180</p>
      <p className="text-gray-700">Price: $2.00</p>
    </div>
  </motion.div>
  {/* Menu Item 6 */}
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300"
  >
    <div className="relative">
      <img
        src="https://wildgrain.com/cdn/shop/articles/Macarons_800x.png?v=1686664193"
        alt="Macaroons"
        className="w-full h-44 md:h-64 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-25"></div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-yellow-800">Macaroons</h3>
      <p className="text-gray-700 mb-2">Delicate French pastries with a crisp shell and chewy center.</p>
      <p className="text-gray-700">Calories: 70 (per piece)</p>
      <p className="text-gray-700">Price: $1.75</p>
    </div>
  </motion.div>
</div>
  )
}

export default ProductPastries