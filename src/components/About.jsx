// About Section
import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';
import GauravProfile from '../images/Gaurav_Garg_Profile.jpg';
import '../../src/styles/components/about.css';


const About = () => {
    const [isSubscriptionOpen, setIsSubscriptionOpen] = useState(false);

    const subscriptionPlans = [
        { price: '29', period: 'month', members: '5 Family Members', color: 'bg-red-500' },
        { price: '89', period: 'month', members: '5+1 Family Members', color: 'bg-yellow-500' },
        { price: '299', period: 'month', members: '5+1 Family Members & Home Care', color: 'bg-green-500' },
    ];

    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="about-grid">
                    <div>
                        <img src={GauravProfile} alt="Our Clinic" className="about-profile-img" />
                        <div className="founder-card">
                            <h3 style={{fontSize:'1.25rem',fontWeight:700,color:'#111827'}}>Dr. Gaurav Garg</h3>
                            <p className="accent">Founder & Chief Physician</p>
                            <p style={{color:'#6b7280',marginTop:'0.5rem'}}>Samastipur, Bihar, India, 844502</p>
                        </div>
                    </div>

                    <div>
                        <span className="accent">ABOUT US</span>
                        <h2 className="about-h2">A Dedicated Medical Professional</h2>
                        <p className="about-text">
                            With over more than 8 years of experience in delivering high-quality patient care, Dr. Gaurav Garg is a board-certified physician specializing in internal medicine. He is passionate about developing and implementing personalized treatment plans and collaborating with healthcare teams to ensure the best outcomes.
                        </p>
                        <p className="about-text">
                            Our mission is to empower our patients through education, preventive care and to remove medical illiteracy. As per central Bureau of Health intelligence report 60 peoples out of 100 have lack of medical literacy. We believe in building lasting relationships based on trust and mutual respect.
                        </p>
                        <div className="stack">
                            <div className="subscription-card" onClick={() => setIsSubscriptionOpen(!isSubscriptionOpen)}>
                                <div className="title-row">
                                    <h3 style={{fontWeight:700,fontSize:'1.125rem'}}>Subscription Plans</h3>
                                    {isSubscriptionOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                                </div>
                                <p style={{color:'#6b7280',marginTop:'0.5rem'}}>Affordable monthly plans for individuals and families. Click to expand.</p>
                            </div>

                            {isSubscriptionOpen && (
                                <div className="subscription-tiers">
                                    {subscriptionPlans.map((plan, index) => (
                                        <div key={index} className={`plan ${plan.color === 'bg-red-500' ? 'plan-basic' : plan.color === 'bg-yellow-500' ? 'plan-standard' : 'plan-premium'}`}>
                                            <p style={{fontSize:'1.5rem',fontWeight:700}}>₹{plan.price}</p>
                                            <p style={{opacity:0.9}}>/ {plan.period}</p>
                                            <p style={{marginTop:'0.75rem',fontWeight:600,fontSize:'0.9rem'}}>{plan.members}</p>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className="vision-card">
                                <h3 style={{fontWeight:700,fontSize:'1.125rem',marginBottom:'0.5rem'}}>Our Vision</h3>
                                <p style={{color:'#6b7280'}}>To be a leading healthcare provider known for clinical excellence and compassionate care.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;