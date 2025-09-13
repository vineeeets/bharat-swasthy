// Header Component
import { Phone, Clock, Menu, X } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import '../styles/components/header.css';

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
            <header className="header">
                {/* Top Bar */}
                <div className="top-bar">
                    <div className="top-bar-container">
                        <div className="top-bar-info">
                            <Clock size={16} />
                            <span>24x7 Available for Emergency</span>
                        </div>
                        <div className="top-bar-info">
                            <Phone size={16} />
                            <span>+91-7322097828</span>
                        </div>
                    </div>
                </div>

                {/* Main Navigation */}
                <nav className="main-nav">
                    <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="nav-brand">
                        Bharat Swasthy
                    </a>
                    <div className="nav-links">
                        {navLinks.map(link => (
                            <a
                                key={link.id}
                                href={`#${link.id}`}
                                onClick={(e) => { e.preventDefault(); onNavigate(link.id); }}
                            >
                                {link.title}
                            </a>
                        ))}
                    </div>
                    <button
                        onClick={() => onNavigate('contact')}
                        className="btn-primary"
                    >
                        Book Appointment
                    </button>
                    <div className="menu-toggle">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                {visible && (
                    <div className={`mobile-menu-backdrop ${isMenuOpen ? 'bs-backdrop-enter' : 'bs-backdrop-exit'}`}>
                        <div className={`mobile-menu-drawer ${isMenuOpen ? 'bs-drawer-enter' : 'bs-drawer-exit'}`}>
                            <div className="mobile-menu-content">
                                <div className="mobile-menu-header">
                                    <div className="mobile-menu-brand">Bharat Swasthy</div>
                                    <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu" className="close-menu-btn">
                                        <X size={22} />
                                    </button>
                                </div>
                                <nav className="mobile-nav">
                                    {navLinks.map(link => {
                                        const isActive = activeSection === link.id;
                                        return (
                                            <button
                                                key={link.id}
                                                onClick={() => { setIsMenuOpen(false); onNavigate(link.id); }}
                                                className={`mobile-nav-link ${isActive ? 'active' : 'inactive'}`}
                                            >
                                                {link.title}
                                            </button>
                                        );
                                    })}
                                </nav>

                                <div className="mobile-menu-footer">
                                    <button onClick={() => onNavigate('contact')} className="mobile-book-btn">Book Appointment</button>
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