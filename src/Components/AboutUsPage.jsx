import React from 'react';
import Footer from './Footer';
import Header from './Header';

const AboutUs = () => {
  return (
    <body>
        <Header/>
   
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-green-800 text-white p-6 text-center">
        <h1 className="text-4xl font-bold">About CoffeeWorld</h1>
        <p className="text-xl mt-2">Discover our passion for coffee and community</p>
      </header>

      <section className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2005, CoffeeWorld started with a simple idea: to bring exceptional coffee
              to our community. What began as a small coffee stand grew into multiple cafes across
              the city, each serving freshly roasted beans from around the world.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              Today, CoffeeWorld is known for its commitment to quality, sustainability, and
              exceptional customer service. We continue to innovate, offering new blends and
              experiences while maintaining our dedication to the craft of coffee.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              At CoffeeWorld, our mission is to enrich lives through the love of coffee. We strive
              to create a welcoming environment where every cup tells a story and every visit feels
              like coming home. We source our beans responsibly, support local farmers, and foster
              connections within our community.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src=".\Images\CEO.jpg" alt="Team Member 1" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Hasbulla</h3>
                <p className="text-gray-600">Founder & CEO</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src=".\Images\Employee2.jpg" alt="Team Member 2" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Jane Smith</h3>
                <p className="text-gray-600">Head of Operations</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src=".\Images\Employee3.jpg" alt="Team Member 3" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Michael Lee</h3>
                <p className="text-gray-600">Master Roaster</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
    <Footer/>
    </body>
  );
};

export default AboutUs;
