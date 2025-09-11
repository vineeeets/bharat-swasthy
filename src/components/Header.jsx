// Header Component
import { Phone, Clock, Menu, X } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const Header = ({ activeSection, onNavigate, isMenuOpen, setIsMenuOpen }) => {
    const navLinks = [
        { id: 'home', title: 'Home' },
        { id: 'about', title: 'About' },
        { id: 'services', title: 'Services' },
    { id: 'doctors', title: 'Doctors' },
        { id: 'testimonials', title: 'Testimonials' },
        { id: 'contact', title: 'Contact' },
    ];

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Prevent background scroll when mobile menu is open
        if (isMenuOpen) {
            setVisible(true);
            document.body.style.overflow = 'hidden';
        } else {
            // allow exit animation before unmount
            document.body.style.overflow = '';
            const t = setTimeout(() => setVisible(false), 380);
            return () => clearTimeout(t);
        }
        return () => { document.body.style.overflow = ''; };
    }, [isMenuOpen]);

    return (
        <>
            {/* Animations for mobile drawer open/close */}
            <style>{`
                @keyframes bs-drawer-slide-in { from { transform: translateX(100%); } to { transform: translateX(0); } }
                @keyframes bs-drawer-slide-out { from { transform: translateX(0); } to { transform: translateX(100%); } }
                @keyframes bs-drawer-fade-in { from { opacity: 0; } to { opacity: 1; } }
                @keyframes bs-drawer-fade-out { from { opacity: 1; } to { opacity: 0; } }
                .bs-drawer-enter { animation: bs-drawer-slide-in 360ms cubic-bezier(.2,.9,.2,1) forwards; }
                .bs-drawer-exit { animation: bs-drawer-slide-out 320ms cubic-bezier(.2,.9,.2,1) forwards; }
                .bs-backdrop-enter { animation: bs-drawer-fade-in 300ms ease forwards; }
                .bs-backdrop-exit { animation: bs-drawer-fade-out 280ms ease forwards; }
            `}</style>
        <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
            {/* Top Bar */}
            <div className="bg-yellow-400 text-gray-800 py-2 px-4 md:px-8">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
                    <div className="flex items-center space-x-4 mb-2 md:mb-0">
                        <div className="flex items-center space-x-1 text-xs md:text-sm">
                            <Clock size={16} />
                            <span>24x7 Available for Emergency</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                         <div className="flex items-center space-x-1">
                            <Phone size={16} />
                            <span>+91-7322097828</span>
                        </div>
                        <div className="flex space-x-3">
                            {/* Add social media icons here if needed */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
                <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="text-2xl font-bold text-red-600">
                    Bharat Swasthy
                </a>
                <div className="hidden lg:flex items-center space-x-6">
                    {navLinks.map(link => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={(e) => { e.preventDefault(); onNavigate(link.id); }}
                            className="text-gray-600 hover:text-red-600 font-medium transition-colors duration-300"
                        >
                            {link.title}
                        </a>
                    ))}
                </div>
                <button
                    onClick={() => onNavigate('contact')}
                    className="hidden lg:inline-block bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition-transform duration-300 hover:scale-105"
                >
                    Book Appointment
                </button>
                    <div className="lg:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" className="text-gray-800 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400">
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
            </nav>

            {/* Mobile Menu */}
            {visible && (
                <div className={`lg:hidden fixed inset-0 z-60 ${isMenuOpen ? 'bs-backdrop-enter' : 'bs-backdrop-exit'}`} style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
                    <div className={`fixed top-0 right-0 h-screen w-full sm:w-11/12 max-w-sm bg-white shadow-xl transform overflow-y-auto ${isMenuOpen ? 'bs-drawer-enter' : 'bs-drawer-exit'}`}>
                        <div className="px-6 py-8 flex flex-col min-h-screen">
                            <div className="flex items-center justify-between mb-6">
                                <div className="text-lg font-bold text-red-600">Bharat Swasthy</div>
                                <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu" className="p-2 rounded-md text-gray-700">
                                    <X size={22} />
                                </button>
                            </div>
                            <nav className="flex-1 flex flex-col gap-3">
                                {navLinks.map(link => {
                                    const isActive = activeSection === link.id;
                                    return (
                                        <button
                                            key={link.id}
                                            onClick={() => { setIsMenuOpen(false); onNavigate(link.id); }}
                                            className={`w-full text-left px-4 py-4 rounded-md font-medium text-lg transition ${isActive ? 'bg-yellow-100 text-red-600' : 'text-gray-900 bg-white hover:bg-yellow-50'}`}
                                        >
                                            {link.title}
                                        </button>
                                    );
                                })}
                            </nav>

                            <div className="mt-6">
                                <button onClick={() => onNavigate('contact')} className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold text-center">Book Appointment</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
        </>
    );
};
export default Header;
