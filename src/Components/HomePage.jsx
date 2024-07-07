import { motion, AnimatePresence  } from "framer-motion";
import Header from "./Header";
import ProductsMenu from "./ProductsMenu";
import Footer from "./Footer";
import { FaCoffee, FaSmile, FaMugHot } from 'react-icons/fa';

const HomePage = () => {
  return (
    <body className="flex-wrap">

      <Header/>
    

      {/* Welcome Section */}
      <section className="bg-yellow-500 flex-wrap py-20">
        <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 2 }}
          className="md:order-2"
        >
          <h2 className="text-4xl font-bold font-serif text-amber-950 mb-4">Welcome to Coffee World</h2>
          <p className="text-lg text-amber-950 mb-6">
            Discover the finest coffee experience in a cozy atmosphere.
          </p>
          <a
            href="#menu"
            className="bg-white text-amber-950 hover:bg-gray-200 text-sm font-semibold px-6 py-3 rounded-full transition duration-300 shadow-lg"
          >
            View Our Menu
          </a>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="md:order-1"
        >
          <motion.img
            src="https://img.freepik.com/premium-photo/internationalcoffeeday_148391-11183.jpg"
            alt="CoffeeHouse Interior"
            className="w-full rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </AnimatePresence>
    </div>

    <img className="top-4 right-0 size-1/4 absolute md:size-1/2 md:top-2 md:right-28" src=".\Images\CoffeeGrains.png" alt="" />
        </div>
      </section>

      {/* Menu Section */}
      <ProductsMenu/>
     
   
      {/* Features Section */}
      <section id="features" className="py-20 bg-blue-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-brown-800 mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Feature 1 */}
          <div className="text-center p-6 bg-white shadow-lg rounded-lg">
            <div className="flex items-center justify-center mb-4">
              <FaSmile className="text-brown-800 text-6xl" />
            </div>
            <h3 className="text-xl font-semibold text-brown-800 mb-2">Friendly Atmosphere</h3>
            <p className="text-gray-700">
              Enjoy our welcoming environment that feels just like home.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="text-center p-6 bg-white shadow-lg rounded-lg">
            <div className="flex items-center justify-center mb-4">
              <FaCoffee className="text-brown-800 text-6xl" />
            </div>
            <h3 className="text-xl font-semibold text-brown-800 mb-2">Quality Coffee Beans</h3>
            <p className="text-gray-700">
              We source the finest coffee beans from around the world.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="text-center p-6 bg-white shadow-lg rounded-lg">
            <div className="flex items-center justify-center mb-4">
              <FaMugHot className="text-brown-800 text-6xl" />
            </div>
            <h3 className="text-xl font-semibold text-brown-800 mb-2">Skilled Baristas</h3>
            <p className="text-gray-700">
              Our baristas are highly trained to craft the perfect cup for you.
            </p>
          </div>
        </div>
      </div>
    </section>

      {/* About Us Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At CoffeeWorld, we are passionate about coffee. Our journey began with a simple idea:
                to create a welcoming space where people can enjoy high-quality coffee and
                exceptional service. We carefully select our beans, roast them to perfection, and
                craft each cup with care. Whether you're stopping by for your daily espresso or
                trying our seasonal specials, we strive to make every visit memorable.
              </p>
              <a
                href="#"
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 shadow-lg"
              >
                Learn More
              </a>
            </div>
            <div>
              <motion.img
                src="https://blog-assets.lightspeedhq.com/img/2021/03/b26bcdcf-blog_coffee-shop-equipment-list_1200x628.jpg"
                alt="CoffeeHouse Storefront"
                className="w-full rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contact Us</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Have a question or want to provide feedback? Reach out to us through the methods
                below and we'll get back to you as soon as possible.
              </p>
              <div className="flex items-center space-x-4">
                <img
                  src=".\Images\icons8-location-100.png"
                  alt="Location Icon"
                  className="h-6 w-6 text-gray-600"
                />
                <span className="text-gray-700">123 Coffee Street, New York, NY 10001</span>
              </div>
              <div className="flex items-center space-x-4 mt-4">
                <img
                  src=".\Images\icons8-email-100.png"
                  alt="Email Icon"
                  className="h-6 w-6 text-gray-600"
                />
                <span className="text-gray-700">contact@coffeehouse.com</span>
              </div>
              <div className="flex items-center space-x-4 mt-4">
                <img
                  src=".\Images\icons8-telephone-96.png"
                  alt="Phone Icon"
                  className="h-6 w-6 text-gray-600"
                />
                <span className="text-gray-700">+1 (123) 456-7890</span>
              </div>
            </div>
            <div>
              <form className="max-w-lg mx-auto">
                <div className="grid grid-cols-1 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="py-3 px-4 bg-gray-200 rounded-lg w-full focus:outline-none focus:bg-white"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="py-3 px-4 bg-gray-200 rounded-lg w-full focus:outline-none focus:bg-white"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows="5"
                    className="py-3 px-4 bg-gray-200 rounded-lg w-full focus:outline-none focus:bg-white"
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 shadow-lg"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
     
    </body>
  );
};

export default HomePage;
