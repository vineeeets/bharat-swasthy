// Services Section
import { Mail, Phone, MapPin, Clock, Menu, X, Calendar, User, MessageSquare, Copy, ChevronDown, ChevronUp, Check } from 'lucide-react';
import React, { useState, useMemo } from 'react';
import '../styles/components/services.css';

// Inline transcription of the handwritten labs (lightly normalized)
const labs = [
    { id: 'life-imaging', name: 'Life Imaging', specialties: ['Blood Test', 'X-ray', 'Ultrasound', 'ECG'], location: 'Mohanpur, Near HDFC Bank', owner: 'Nilesh', phone: '' },
    { id: 'vinayak-diagnostic', name: 'Vinayak Diagnostic', specialties: ['Blood Test'], location: 'Infront of BRB College', owner: 'Dr. Manish Sharma', phone: '9571200846' },
    { id: 'jaanch-wala', name: 'Jaanch Wala', specialties: ['Blood Test'], location: 'Near Kranthi Hotel', owner: '', phone: '7947112481' },
    { id: 'amar-ultra', name: 'Amar Ultra Jaanch Ghar', specialties: ['Ultrasound'], location: 'Near Dominoes', owner: 'Dr. Amar', phone: '' },
    { id: 'akshat-imaging', name: 'Akshat Imaging', specialties: ['Blood Test', 'X-ray', 'Ultrasound'], location: 'Near BRB College', owner: '', phone: '7360660044' },
    { id: 'nishkarsh', name: 'Nishkarsh Jaanch Ghar', specialties: ['Blood Test'], location: 'R. R. / Rijha Road, Near (Nishurt X-ray)', owner: '', phone: '' },
    { id: 'maa-jaanch', name: 'Maa Jaanch Ghar', specialties: ['Blood Test'], location: 'Kachahri Road, Near Patel Field', owner: '', phone: '8084287786' },
    { id: 'sv-imaging', name: 'S.V. Imaging', specialties: ['MRI', 'CT-Scan', 'X-ray', 'Blood Test'], location: 'Adarsh Nagar', owner: '', phone: '8797621516' },
    { id: 'atoz-amamika', name: 'A to Z / Amamika Ultrasound', specialties: ['Ultrasound'], location: 'Adarsh Nagar', owner: 'Dr. Amrita', phone: '7947120894' }
];

const Services = () => {
    const [query, setQuery] = useState('');
    const [specialtyFilter, setSpecialtyFilter] = useState('all');
    const [expanded, setExpanded] = useState({});
    const [selectedPlan, setSelectedPlan] = useState(null);

    const subscriptionPlans = [
        { id: 'basic', price: '29', period: 'month', members: '5 Family Members', color: 'bg-red-500', perks: ['Online consults', 'Basic checkups'] },
        { id: 'standard', price: '89', period: 'month', members: '5+1 Family Members', color: 'bg-yellow-500', perks: ['Priority Booking', 'Home sample pickup'] },
        { id: 'premium', price: '299', period: 'month', members: '5+1 Family Members & Home Care', color: 'bg-green-500', perks: ['Home care', '24/7 Doctor on Call', 'All tests discount'] },
    ];

        const specialties = useMemo(() => {
            const set = new Set();
            // collect specialties only from labs
            labs.forEach(l => l.specialties.forEach(s => set.add(s)));
            return ['all', ...Array.from(set)];
        }, []);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return labs.filter(lab => {
            if (specialtyFilter !== 'all' && !lab.specialties.map(s => s.toLowerCase()).includes(specialtyFilter.toLowerCase())) return false;
            if (!q) return true;
            return (
                lab.name.toLowerCase().includes(q) ||
                lab.location.toLowerCase().includes(q) ||
                lab.owner.toLowerCase().includes(q) ||
                lab.specialties.join(' ').toLowerCase().includes(q)
            );
        });
    }, [query, specialtyFilter]);

    const copyToClipboard = async (text) => {
        if (!text) return;
        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(text);
                alert('Phone number copied to clipboard');
            } else {
                // fallback
                const ta = document.createElement('textarea');
                ta.value = text;
                document.body.appendChild(ta);
                ta.select();
                document.execCommand('copy');
                document.body.removeChild(ta);
                alert('Phone number copied to clipboard');
            }
        } catch (err) {
            console.error('Copy failed', err);
            alert('Could not copy phone number.');
        }
    };

    const toggleExpand = (id) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));

    const selectPlan = (planId) => {
        setSelectedPlan(planId === selectedPlan ? null : planId);
    };

    const proceedToBook = () => {
        // smooth scroll to contact form
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="services">
            <div className="services-container">

                        {/* Removed quick-access clinicians — use the Doctors page for clinicians/specialists */}

                        {/* Subscription Plans */}
                        <div className="subscription-plans">
                            <div className="plans-header">
                                <h3>Subscription Plans</h3>
                                <p>Choose a plan for family care and priority services.</p>
                            </div>

                            <div className="plans-grid">
                                {subscriptionPlans.map(plan => {
                                    const isSelected = selectedPlan === plan.id;
                                    return (
                                        <div key={plan.id} className={`plan-card ${isSelected ? 'selected' : ''}`}>
                                            <div className="plan-card-header">
                                                <div>
                                                    <div className="plan-price">₹{plan.price}</div>
                                                    <div className="plan-period">per {plan.period}</div>
                                                </div>
                                                <div>
                                                    {isSelected ? <div className="plan-selected-icon"><Check size={18} /></div> : <div />}
                                                </div>
                                            </div>
                                            <div className="plan-members">{plan.members}</div>
                                            <ul className="plan-perks">
                                                {plan.perks.map((p, i) => <li key={i} className="perk-item"><span className="perk-bullet" />{p}</li>)}
                                            </ul>
                                            <div className="plan-footer">
                                                <button onClick={() => selectPlan(plan.id)} className={`select-plan-btn ${isSelected ? 'selected' : 'not-selected'}`}>
                                                    {isSelected ? 'Selected' : 'Select Plan'}
                                                </button>
                                                <button onClick={proceedToBook} className="proceed-btn">Proceed</button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                <div className="labs-header">
                    <span className="sub-title">DIAGNOSTIC LABS</span>
                    <h2 className="title">Local Labs & Imaging Centers</h2>
                    <p>Search labs by name, location or specialty. Tap a phone number to call or copy it.</p>
                </div>
                        <div className="labs-filters">
                    <div className="search-input">
                        <input
                            type="search"
                            placeholder="Search labs, location or specialty..."
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                        />
                    </div>
                    <div className="specialty-filter">
                        <select value={specialtyFilter} onChange={e => setSpecialtyFilter(e.target.value)}>
                            {specialties.map(s => (
                                <option key={s} value={s}>{s === 'all' ? 'All Specialties' : s}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="labs-grid">
                    {filtered.length === 0 && (
                        <div className="no-labs">No labs found for the current search/filter.</div>
                    )}

                    {filtered.map(lab => (
                        <div key={lab.id} className="lab-card">
                            <div className="lab-card-header">
                                <div>
                                    <h3>{lab.name}</h3>
                                    <p>{lab.specialties.join(' • ')}</p>
                                </div>
                                <div className="lab-actions">
                                    {lab.phone ? (
                                        <a href={`tel:${lab.phone}`} className="lab-phone-btn" title={`Call ${lab.phone}`}>
                                            <Phone size={18} className="green-icon" />
                                        </a>
                                    ) : (
                                        <div className="lab-disabled-btn" title="Phone not available"><Phone size={18} /></div>
                                    )}
                                    <button onClick={() => copyToClipboard(lab.phone)} className="lab-copy-btn" title="Copy phone">
                                        <Copy size={16} />
                                    </button>
                                    <button onClick={() => toggleExpand(lab.id)} className="lab-details-btn" title="Details">
                                        {expanded[lab.id] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                    </button>
                                </div>
                            </div>

                            {expanded[lab.id] && (
                                <div className="lab-details">
                                    <div className="lab-detail-item">
                                        <MapPin size={16} className="lab-detail-icon" />
                                        <div>{lab.location}</div>
                                    </div>
                                    {lab.owner && (
                                        <div className="lab-detail-item">
                                            <User size={16} className="lab-detail-icon" />
                                            <div>{lab.owner}</div>
                                        </div>
                                    )}
                                </div>
                            )}

                            <div className="lab-card-footer">
                                <div className="footer-phone">
                                    {lab.phone ? <span className="phone-number">{lab.phone}</span> : <span className="no-phone">Phone not listed</span>}
                                </div>
                                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="book-btn">Book</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;