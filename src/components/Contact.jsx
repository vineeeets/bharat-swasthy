// Contact & Booking Section
import { Mail, Phone, MapPin } from 'lucide-react';
import React, { useState } from 'react';
import '../styles/components/contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', date: '', message: '' });
    const [status, setStatus] = useState({ loading: false, error: null, success: null });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Mock API call
    const handleBookingSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.date) {
            setStatus({ loading: false, error: 'Please fill in all required fields.', success: null });
            return;
        }
        
        setStatus({ loading: true, error: null, success: null });

        try {
            // This is a mock API call. Replace with your actual backend endpoint.
            const response = await fetch('https://api.example.com/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            // Simulate network delay
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Since the API is fake, we'll simulate a successful response.
            // In a real app, you would check `response.ok`.
            if (true) { // Simulating success
                setStatus({ loading: false, error: null, success: 'Appointment booked successfully! We will contact you shortly.' });
                setFormData({ name: '', email: '', date: '', message: '' });
            } else {
                // const errorData = await response.json();
                // throw new Error(errorData.message || 'Failed to book appointment.');
            }
        } catch (error) {
             // This block will run if fetch fails (e.g., network error) or if we throw an error above.
             // For this mock, we'll simulate a success case mostly.
             console.error('Booking Error:', error);
             setStatus({ loading: false, error: 'Could not book appointment. Please try again later.', success: null });
        }
    };

    return (
        <section id="contact">
            <div className="contact-container">
                <div className="contact-header">
                    <span className="sub-title">BOOK AN APPOINTMENT</span>
                    <h2 className="title">Say Hi to Us</h2>
                </div>
                <div className="contact-content">
                    {/* Booking Form */}
                    <form onSubmit={handleBookingSubmit} className="booking-form">
                        <div className="form-grid">
                            <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name" className="form-input" />
                            <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Your Email" className="form-input" />
                        </div>
                        <input type="date" name="date" value={formData.date} onChange={handleInputChange} className="form-input" />
                        <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Your Message (Optional)" rows="5" className="form-textarea"></textarea>
                        <button type="submit" disabled={status.loading} className="submit-button">
                            {status.loading ? (
                                <div className="spinner"></div>
                            ) : (
                                'Submit'
                            )}
                        </button>
                        {status.error && <p className="status-error">{status.error}</p>}
                        {status.success && <p className="status-success">{status.success}</p>}
                    </form>

                    {/* Contact Info */}
                    <div className="contact-info">
                        <div className="info-card">
                            <MapPin size={24} className="info-icon" />
                            <div>
                                <h4>Our Location</h4>
                                <p>123 Health St, Wellness City, MedState 400053</p>
                            </div>
                        </div>
                        <div className="info-card">
                            <Phone size={24} className="info-icon" />
                            <div>
                                <h4>Phone Number</h4>
                                <p>+91-7322097828</p>
                            </div>
                        </div>
                        <div className="info-card">
                            <Mail size={24} className="info-icon" />
                            <div>
                                <h4>Email Address</h4>
                                <p>contact@bharatswasthy.com</p>
                            </div>
                        </div>
                         <div className="map-container">
                             <img src="https://placehold.co/600x400/e2e8f0/334155?text=Map+Placeholder" alt="Map" className="map-image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Contact;