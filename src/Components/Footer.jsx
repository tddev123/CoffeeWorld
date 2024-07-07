import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
                <h2 className="font-bold text-lg mb-4">About Us</h2>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:underline">Our Company</a></li>
                    <li><a href="#" className="hover:underline">Our Coffee</a></li>
                    <li><a href="#" className="hover:underline">Stories and News</a></li>
                    <li><a href="#" className="hover:underline">CoffeeWorld Archive</a></li>
                    <li><a href="#" className="hover:underline">Investor Relations</a></li>
                    <li><a href="#" className="hover:underline">Customer Service</a></li>
                </ul>
            </div>
            <div>
                <h2 className="font-bold text-lg mb-4">Careers</h2>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:underline">Culture and Values</a></li>
                    <li><a href="#" className="hover:underline">Inclusion, Diversity, and Equity</a></li>
                    <li><a href="#" className="hover:underline">College Achievement Plan</a></li>
                    <li><a href="#" className="hover:underline">Alumni Community</a></li>
                    <li><a href="#" className="hover:underline">U.S. Careers</a></li>
                    <li><a href="#" className="hover:underline">International Careers</a></li>
                </ul>
            </div>
            <div>
                <h2 className="font-bold text-lg mb-4">Social Impact</h2>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:underline">People</a></li>
                    <li><a href="#" className="hover:underline">Planet</a></li>
                    <li><a href="#" className="hover:underline">Environmental and Social Impact Reporting</a></li>
                </ul>
            </div>
            <div>
                <h2 className="font-bold text-lg mb-4">For Business Partners</h2>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:underline">Landlord Support Center</a></li>
                    <li><a href="#" className="hover:underline">Suppliers</a></li>
                    <li><a href="#" className="hover:underline">Corporate Gift Card Sales</a></li>
                    <li><a href="#" className="hover:underline">Office and Foodservice Coffee</a></li>
                </ul>
            </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
            <div className="flex justify-center space-x-6 mb-4">
                <a href="https://www.facebook.com" aria-label="Facebook" className="hover:underline">
                    <img src=".\Images\icons8-facebook-48.png" alt="Facebook" className="w-6 h-6" />
                </a>
                <a href="https://www.twitter.com" aria-label="Twitter" className="hover:underline">
                    <img src=".\Images\icons8-twitterx-100.png" alt="Twitter" className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com" aria-label="Instagram" className="hover:underline">
                    <img src=".\Images\icons8-instagram-48.png" alt="Instagram" className="w-6 h-6" />
                </a>
                <a href="https://www.youtube.com" aria-label="YouTube" className="hover:underline">
                    <img src=".\Images\icons8-youtube-96.png" alt="YouTube" className="w-6 h-6" />
                </a>
            </div>
            <p className="text-center text-sm">&copy; 2024 CoffeeWorld Corporation. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-4">
                <a href="#" className="hover:underline">Privacy Policy</a>
                <a href="#" className="hover:underline">Terms of Use</a>
                <a href="#" className="hover:underline">CA Supply Chain Act</a>
                <a href="#" className="hover:underline">Cookie Preferences</a>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer