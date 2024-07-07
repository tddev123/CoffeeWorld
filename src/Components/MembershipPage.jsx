import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Membership = () => {
  return (
    <body>
        <Header/>
        

    <div className="bg-gray-100 min-h-screen">

    <header className="bg-green-800 text-white p-6 text-center">
      <h1 className="text-4xl font-bold">CoffeeWorld Membership</h1>
      <p className="text-xl mt-2">Join our community and enjoy exclusive benefits</p>
    </header>

    <section className="container mx-auto p-6">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Membership Benefits</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-8">
            <svg className="h-12 w-12 mx-auto text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2 text-center">Exclusive Discounts</h3>
            <p className="text-gray-600 text-center">Get up to 20% off on all our products and services.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-8">
            <svg className="h-12 w-12 mx-auto text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2 text-center">Free Monthly Coffee</h3>
            <p className="text-gray-600 text-center">Enjoy a free coffee of your choice every month.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-8">
            <svg className="h-12 w-12 mx-auto text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2 text-center">Priority Service</h3>
            <p className="text-gray-600 text-center">Skip the line and get priority service at all our locations.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-8">
            <svg className="h-12 w-12 mx-auto text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2 text-center">Member-Only Events</h3>
            <p className="text-gray-600 text-center">Access to exclusive events and coffee tastings.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-8">
            <svg className="h-12 w-12 mx-auto text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2 text-center">Special Gifts</h3>
            <p className="text-gray-600 text-center">Receive special gifts on your birthday and holidays.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-8">
            <svg className="h-12 w-12 mx-auto text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2 text-center">Newsletter</h3>
            <p className="text-gray-600 text-center">Stay updated with our latest news and offers.</p>
          </div>
        </div>
      </div>
    </section>

      <section className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Membership Tiers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-slate-600 mb-4">Silver</h3>
            <p className="text-gray-600 mb-4">Basic membership with access to all standard benefits.</p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>5% discount on all purchases</li>
              <li>1 free coffee per month</li>
            </ul>
            <button className="bg-green-800 text-white py-2 px-4 rounded-lg shadow hover:bg-green-700 transition duration-300">
              Join Silver
            </button>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-yellow-600 mb-4">Gold</h3>
            <p className="text-gray-600 mb-4">Enhanced membership with additional perks.</p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>10% discount on all purchases</li>
              <li>2 free coffees per month</li>
              <li>Priority service</li>
            </ul>
            <button className="bg-green-800 text-white py-2 px-4 rounded-lg shadow hover:bg-green-700 transition duration-300">
              Join Gold
            </button>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Platinum</h3>
            <p className="text-gray-600 mb-4">Premium membership with all the exclusive benefits.</p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>20% discount on all purchases</li>
              <li>Unlimited free coffee</li>
              <li>Priority service</li>
              <li>Exclusive events and gifts</li>
            </ul>
            <button className="bg-green-800 text-white py-2 px-4 rounded-lg shadow hover:bg-green-700 transition duration-300">
              Join Platinum
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto p-6 mt-10 bg-gray-50 rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Register for Membership</h2>
        <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
            <input className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-green-800" type="text" id="name" name="name" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-green-800" type="email" id="email" name="email" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="membership-tier">Membership Tier</label>
            <select className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-green-800" id="membership-tier" name="membership-tier" required>
              <option value="silver">Silver</option>
              <option value="gold">Gold</option>
              <option value="platinum">Platinum</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">Address</label>
            <input className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-green-800" type="text" id="address" name="address" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Phone Number</label>
            <input className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-green-800" type="tel" id="phone" name="phone" required />
          </div>
          <div className="mb-6 text-center">
            <button className="bg-green-800 text-white py-2 px-4 rounded-lg shadow hover:bg-green-700 transition duration-300">
              Register
            </button>
          </div>
        </form>
      </section>

      <section className="container mx-auto p-6 mt-10">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Frequently Asked Questions</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-green-800 mb-4">How do I join the membership?</h3>
          <p className="text-gray-600 mb-4">Fill out the registration form above and select your preferred membership tier. Once you submit the form, you will receive a confirmation email with further details.</p>

          <h3 className="text-2xl font-semibold text-green-800 mb-4">What are the payment options?</h3>
          <p className="text-gray-600 mb-4">We accept all major credit cards, PayPal, and direct bank transfers. Payment details will be provided after you register.</p>

          <h3 className="text-2xl font-semibold text-green-800 mb-4">Can I upgrade my membership tier?</h3>
          <p className="text-gray-600 mb-4">Yes, you can upgrade your membership at any time. Simply contact our support team, and they will assist you with the process.</p>
        </div>
      </section>

   
    </div>
    <Footer/>
    </body>
  );
};

export default Membership;
