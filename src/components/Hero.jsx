import { Mail, Phone, MapPin, Clock, Menu, X, Calendar, User, MessageSquare } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import doctorImage from '../images/Gaurav_Garg_Profile.jpg';
import '../design/Hero.css'

const Hero = ({ onNavigate }) => {
    return (
        <section id="home" className="relative bg-white pt-8 pb-10 md:pt-4 md:pb-10 overflow-x-hidden">
            <div className="bg-green-100 text-green-800 py-2 mb-8 whitespace-nowrap text-sm font-semibold">
                <div className="animate-marquee">
                    <span>Approved by Government of India, Ministry of Corporate Affairs | Reg No: U12345ABC67890 | GST No: 22ABCDE1234F1Z5 | CIN: L12345MH67890PLC123456</span>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-8 text-center md:text-left">
                <div className="grid md:grid-cols-2 gap-4 items-center">
                    <div className="flex flex-col items-center md:items-start">

                        <span className="text-red-600 font-semibold mb-2">INTRODUCING ADVANCED HEALTHCARE</span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
                            Your Health, <br /> Our Top Priority.
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
                            Providing compassionate and comprehensive medical care with the latest technology. We are dedicated to your well-being.
                        </p>
                        <div className="grid grid-cols-2 gap-3 w-full max-w-xl mx-auto md:mx-0">
                            <button onClick={() => onNavigate('contact')} className="bg-red-600 text-white px-4 py-3 rounded-full font-semibold hover:bg-red-700 transition-transform duration-300 hover:scale-105 shadow-lg">Get Started</button>
                            <button onClick={() => onNavigate('services')} className="bg-gray-200 text-gray-800 px-4 py-3 rounded-full font-semibold hover:bg-gray-300 transition-transform duration-300 hover:scale-105 shadow-lg">Our Services</button>
                            <button onClick={() => onNavigate('doctors')} className="bg-yellow-500 text-white px-4 py-3 rounded-full font-semibold hover:bg-yellow-600 transition-transform duration-300 hover:scale-105 shadow-lg">Available Doctors</button>
                            <button onClick={() => onNavigate('services')} className="bg-green-500 text-white px-4 py-3 rounded-full font-semibold hover:bg-green-600 transition-transform duration-300 hover:scale-105 shadow-lg">Available Diagnostic Labs</button>
                        </div>
                    </div>
                    <div className="relative mt-8 md:mt-0">
                        <img
                            src=""
                            alt="Doctor's Portrait"
                            className="rounded-3xl shadow-2xl w-full h-auto object-cover"
                        />
                         <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-yellow-300 rounded-full -z-10"></div>
                         <div className="absolute -top-8 -right-8 w-40 h-40 bg-red-100 rounded-full -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Hero;