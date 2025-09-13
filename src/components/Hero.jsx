import React from 'react';
import '../styles/components/hero.css';

const Hero = ({ onNavigate }) => {
    return (
        <section id="home" className="hero-section">
            <div className="hero-announcement">
                <div className="animate-marquee">
                    <span>Approved by Government of India, Ministry of Corporate Affairs | Reg No: U12345ABC67890 | GST No: 22ABCDE1234F1Z5 | CIN: L12345MH67890PLC123456</span>
                </div>
            </div>

            <div className="hero-container">
                <div className="hero-grid">
                    <div className="hero-content">
                        <span className="hero-accent">INTRODUCING ADVANCED HEALTHCARE</span>
                        <h1 className="hero-heading">Your Health, <br /> Our Top Priority.</h1>
                        <p className="hero-sub">Providing compassionate and comprehensive medical care with the latest technology. We are dedicated to your well-being.</p>
                        <div className="hero-buttons">
                            <button onClick={() => onNavigate('contact')} className="btn-red">Get Started</button>
                            <button onClick={() => onNavigate('services')} className="btn-gray">Our Services</button>
                            <button onClick={() => onNavigate('doctors')} className="btn-yellow">Available Doctors</button>
                            <button onClick={() => onNavigate('services')} className="btn-green">Available Diagnostic Labs</button>
                        </div>
                    </div>
                    <div className="hero-figure">
                        <div className="hero-img-placeholder">Hospital Image</div>
                         <div className="hero-decor-small"></div>
                         <div className="hero-decor-large"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Hero;