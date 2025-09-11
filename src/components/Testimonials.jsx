// Testimonials Section
import { Mail, Phone, MapPin, Clock, Menu, X, Calendar, User, MessageSquare } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const Testimonials = () => {
    const testimonials = [
        { name: 'Rohan Verma', feedback: 'Dr. Sharma is incredibly attentive and caring. I always feel heard and well-cared for. The new booking system is a lifesaver!', location: 'Mumbai' },
        { name: 'Priya Singh', feedback: 'The best clinic experience I have ever had. The staff is friendly, and the follow-up reminders are so helpful. Highly recommended!', location: 'Delhi' },
        { name: 'Amit Patel', feedback: 'A truly professional and modern clinic. From consultation to home care support, everything was seamless. Thank you, Bharat Swasthy!', location: 'Ahmedabad' },
    ];

    return (
        <section id="testimonials" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <span className="text-red-600 font-semibold">PATIENT STORIES</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">What Our Patients Say</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                            <p className="text-gray-600 italic mb-6">"{testimonial.feedback}"</p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center font-bold text-white mr-4">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;