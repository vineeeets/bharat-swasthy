// Contact & Booking Section
import { Mail, Phone, MapPin } from 'lucide-react';
import React, { useState } from 'react';

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
        <section id="contact" className="py-20 bg-yellow-50/50" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23fca5a5\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}>
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <span className="text-red-600 font-semibold">BOOK AN APPOINTMENT</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Say Hi to Us</h2>
                </div>
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 grid md:grid-cols-2 gap-12">
                    {/* Booking Form */}
                    <form onSubmit={handleBookingSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                            <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name" className="w-full p-4 rounded-lg bg-gray-100 border-2 border-transparent focus:border-yellow-400 focus:bg-white outline-none transition" />
                            <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Your Email" className="w-full p-4 rounded-lg bg-gray-100 border-2 border-transparent focus:border-yellow-400 focus:bg-white outline-none transition" />
                        </div>
                        <input type="date" name="date" value={formData.date} onChange={handleInputChange} className="w-full p-4 rounded-lg bg-gray-100 border-2 border-transparent focus:border-yellow-400 focus:bg-white outline-none transition" />
                        <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Your Message (Optional)" rows="5" className="w-full p-4 rounded-lg bg-gray-100 border-2 border-transparent focus:border-yellow-400 focus:bg-white outline-none transition"></textarea>
                        <button type="submit" disabled={status.loading} className="w-full bg-red-600 text-white p-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center">
                            {status.loading ? (
                                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                            ) : (
                                'Submit'
                            )}
                        </button>
                        {status.error && <p className="text-red-500 text-center">{status.error}</p>}
                        {status.success && <p className="text-green-600 text-center">{status.success}</p>}
                    </form>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div className="bg-gray-50 p-6 rounded-xl flex items-start space-x-4">
                            <MapPin size={24} className="text-yellow-500 mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-bold text-lg">Our Location</h4>
                                <p className="text-gray-600">123 Health St, Wellness City, MedState 400053</p>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl flex items-start space-x-4">
                            <Phone size={24} className="text-yellow-500 mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-bold text-lg">Phone Number</h4>
                                <p className="text-gray-600">+91-7322097828</p>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl flex items-start space-x-4">
                            <Mail size={24} className="text-yellow-500 mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="font-bold text-lg">Email Address</h4>
                                <p className="text-gray-600">contact@bharatswasthy.com</p>
                            </div>
                        </div>
                         <div className="rounded-xl overflow-hidden shadow-md h-48 mt-6">
                             <img src="https://placehold.co/600x400/e2e8f0/334155?text=Map+Placeholder" alt="Map" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Contact;