import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = ({ onNavigate }) => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto px-4 md:px-8 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-yellow-400">Bharat Swasthy</h3>
                        <p className="text-gray-400">Your trusted partner in health and wellness. Committed to providing exceptional medical care.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#about" onClick={(e) => { e.preventDefault(); onNavigate('about'); }} className="text-gray-400 hover:text-white">About Us</a></li>
                            <li><a href="#services" onClick={(e) => { e.preventDefault(); onNavigate('services'); }} className="text-gray-400 hover:text-white">Services</a></li>
                            <li><a href="#contact" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }} className="text-gray-400 hover:text-white">Book Appointment</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li className="flex items-start"><MapPin size={16} className="mr-2 mt-1 text-yellow-400"/>123 Health St, Wellness City</li>
                            <li className="flex items-start"><Phone size={16} className="mr-2 mt-1 text-yellow-400"/>+91-7322097828</li>
                            <li className="flex items-start"><Mail size={16} className="mr-2 mt-1 text-yellow-400"/>contact@bharatswasthy.com</li>
                        </ul>
                    </div>
                     <div>
                        <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                        <p className="text-gray-400 mb-4">Subscribe for health tips.</p>
                        <form className="flex">
                            <input type="email" placeholder="Your Email" className="w-full rounded-l-lg p-2 text-gray-800 outline-none" />
                            <button className="bg-red-600 p-2 rounded-r-lg font-bold">Go</button>
                        </form>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Bharat Swasthy. All Rights Reserved. Designed with ❤️.</p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;