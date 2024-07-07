import React from 'react';
import Header from './Header';
import Footer from './Footer';

const locations = [
  {
    name: 'Coffee Shop 1',
    address: '70 Hudson St, Hoboken, NJ 07030',
    imgUrl: './Images/Shop1.png',
    mapUrl: 'https://www.google.com/maps/@40.7358015,-74.0307302,16z?entry=ttu'
  },
  {
    name: 'Coffee Shop 2',
    address: '72-78 Coles St, Jersey City, NJ 07302',
    imgUrl: './Images/Shop2.png',
    mapUrl: 'https://www.google.com/maps/@40.7245118,-74.0472125,17.5z?entry=ttu'
  },
  {
    name: 'Coffee Shop 3',
    address: '554 Jersey Ave, Jersey City, NJ 07302',
    imgUrl: './Images/Shop3.png',
    mapUrl: 'https://www.google.com/maps/place/Finally+Home+JC/@40.722294,-74.0483399,17z/data=!3m1!4b1!4m6!3m5!1s0x89c2518add620ee5:0xf7272f640ed673cb!8m2!3d40.72229!4d-74.045765!16s%2Fg%2F11tf5mzb5q?entry=ttu'
  }
];

const Locations = () => {
  return (
    <body>
      
    
    <Header/>
    <div className="container mx-auto p-8 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">Our Locations </h2>
      <h3 className='mb-4 text-2xl'>note for recruiter: I was going to put an actual google maps API in, until I found out I would have to pay for it.</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {locations.map((location, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <img src={location.imgUrl} alt={location.name} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{location.name}</h3>
              <p className="text-gray-600 mb-4">{location.address}</p>
              <a href={location.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors duration-300">
                View on Google Maps
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </body>
  );
};

export default Locations;

