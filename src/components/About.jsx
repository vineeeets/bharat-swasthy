// About Section
import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';
import GauravProfile from '../images/Gaurav_Garg_Profile.jpg';


const About = () => {
    const [isSubscriptionOpen, setIsSubscriptionOpen] = useState(false);

    const subscriptionPlans = [
        { price: '29', period: 'month', members: '5 Family Members', color: 'bg-red-500' },
        { price: '89', period: 'month', members: '5+1 Family Members', color: 'bg-yellow-500' },
        { price: '299', period: 'month', members: '5+1 Family Members & Home Care', color: 'bg-green-500' },
    ];

    return (
        <section id="about" className="py-4 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Left Column: Image and Founder Info */}
                    <div>
                        <img
                            src={GauravProfile}
                            alt="Our Clinic"
                            className="rounded-3xl shadow-xl w-48 md:w-64 h-56 md:h-80 object-cover mx-auto"
                        />
                        {/* --- NEW: Founder Info --- */}
                        <div className="bg-white p-6 rounded-2xl shadow-md mt-8 text-center">
                            <h3 className="text-2xl font-bold text-gray-900">Dr. Gaurav Garg</h3>
                            <p className="text-red-600 font-semibold">Founder & Chief Physician</p>
                            <p className="text-gray-500 mt-2">Samastipur, Bihar, India, 844502</p>
                        </div>
                    </div>

                    {/* Right Column: About Text and Cards */}
                    <div>
                        <span className="text-red-600 font-semibold">ABOUT US</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">A Dedicated Medical Professional</h2>
                        <p className="text-gray-600 mb-4">
                            With over more than 8 years of experience in delivering high-quality patient care, Dr. Gaurav Garg is a board-certified physician specializing in internal medicine. He is passionate about developing and implementing personalized treatment plans and collaborating with healthcare teams to ensure the best outcomes.
                        </p>
                        <p className="text-gray-600 mb-6">
                            Our mission is to empower our patients through education, preventive care and to remove medical illiteracy. As per central Bureau of Health intelligence report 60 peoples out of 100 have lack of medical literacy. We believe in building lasting relationships based on trust and mutual respect.
                        </p>
                        <div className="space-y-6">
                            {/*  Expandable Subscription Card --- */}
                            <div
                                className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-yellow-400 cursor-pointer transition-all duration-300"
                                onClick={() => setIsSubscriptionOpen(!isSubscriptionOpen)}
                            >
                                <div className="flex justify-between items-center">
                                    <h3 className="font-bold text-xl">Subscription Plans</h3>
                                    {isSubscriptionOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                                </div>
                                <p className="text-sm text-gray-600 mt-2">Affordable monthly plans for individuals and families. Click to expand.</p>
                            </div>
                            
                            {/* --- NEW: Conditionally Rendered Subscription Tiers --- */}
                            {isSubscriptionOpen && (
                                <div className="bg-white p-6 rounded-2xl shadow-inner grid sm:grid-cols-3 gap-4 text-center transition-all duration-500">
                                    {subscriptionPlans.map((plan, index) => (
                                        <div key={index} className={`p-4 rounded-lg text-white ${plan.color}`}>
                                            <p className="text-3xl font-bold">₹{plan.price}</p>
                                            <p className="text-sm opacity-90">/{plan.period}</p>
                                            <p className="mt-4 font-semibold text-sm">{plan.members}</p>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-red-500">
                                <h3 className="font-bold text-xl mb-2">Our Vision</h3>
                                <p className="text-sm text-gray-600">To be a leading healthcare provider known for clinical excellence and compassionate care.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;