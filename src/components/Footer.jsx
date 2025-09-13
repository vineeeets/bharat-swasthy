import { Mail, Phone, MapPin } from 'lucide-react';
import '../styles/components/footer.css';

const Footer = ({ onNavigate }) => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <h3>Bharat Swasthy</h3>
                        <p>Your trusted partner in health and wellness. Committed to providing exceptional medical care.</p>
                    </div>
                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#about" onClick={(e) => { e.preventDefault(); onNavigate('about'); }}>About Us</a></li>
                            <li><a href="#services" onClick={(e) => { e.preventDefault(); onNavigate('services'); }}>Services</a></li>
                            <li><a href="#contact" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>Book Appointment</a></li>
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <h3>Contact Us</h3>
                        <ul>
                            <li><MapPin size={16} className="icon"/>123 Health St, Wellness City</li>
                            <li><Phone size={16} className="icon"/>+91-7322097828</li>
                            <li><Mail size={16} className="icon"/>contact@bharatswasthy.com</li>
                        </ul>
                    </div>
                     <div className="footer-newsletter">
                        <h3>Newsletter</h3>
                        <p>Subscribe for health tips.</p>
                        <form className="newsletter-form">
                            <input type="email" placeholder="Your Email" />
                            <button>Go</button>
                        </form>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Bharat Swasthy. All Rights Reserved. Designed with ❤️.</p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;