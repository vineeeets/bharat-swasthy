// Services Section
import { Mail, Phone, MapPin, Clock, Menu, X, Calendar, User, MessageSquare, Copy, ChevronDown, ChevronUp, Check } from 'lucide-react';
import React, { useState, useMemo } from 'react';

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
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8">

                        {/* Removed quick-access clinicians — use the Doctors page for clinicians/specialists */}

                        {/* Subscription Plans */}
                        <div className="mb-10">
                            <div className="text-center mb-6">
                                <h3 className="text-xl font-semibold">Subscription Plans</h3>
                                <p className="text-gray-600">Choose a plan for family care and priority services.</p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 px-2">
                                {subscriptionPlans.map(plan => {
                                    const isSelected = selectedPlan === plan.id;
                                    return (
                                        <div key={plan.id} className={`relative bg-white p-6 rounded-2xl border ${isSelected ? 'border-yellow-400 shadow-xl scale-105' : 'border-transparent shadow'} transform transition-all duration-300 hover:scale-105`}>
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <div className="text-3xl font-bold">₹{plan.price}</div>
                                                    <div className="text-sm text-gray-500">per {plan.period}</div>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    {isSelected ? <div className="text-green-600 bg-green-50 p-2 rounded-full"><Check size={18} /></div> : <div className="text-gray-300 p-2 rounded-full" />}
                                                </div>
                                            </div>
                                            <div className="mt-4 text-sm text-gray-700">{plan.members}</div>
                                            <ul className="mt-4 text-sm text-gray-600 space-y-1">
                                                {plan.perks.map((p, i) => <li key={i} className="flex items-center"><span className="w-2 h-2 bg-yellow-400 rounded-full mr-3" />{p}</li>)}
                                            </ul>
                                            <div className="mt-6 flex items-center justify-between">
                                                <button onClick={() => selectPlan(plan.id)} className={`px-4 py-2 rounded-full font-semibold transition ${isSelected ? 'bg-green-600 text-white hover:scale-105' : 'bg-red-600 text-white hover:bg-red-700'}`}>
                                                    {isSelected ? 'Selected' : 'Select Plan'}
                                                </button>
                                                <button onClick={proceedToBook} className="text-sm text-gray-500 underline">Proceed</button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                <div className="text-center mb-6">
                    <span className="text-red-600 font-semibold">DIAGNOSTIC LABS</span>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">Local Labs & Imaging Centers</h2>
                    <p className="text-gray-600 mt-2">Search labs by name, location or specialty. Tap a phone number to call or copy it.</p>
                </div>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                    <div className="flex-1">
                        <input
                            type="search"
                            placeholder="Search labs, location or specialty..."
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                            className="w-full p-3 rounded-lg bg-gray-100 border-2 border-transparent focus:border-yellow-400 outline-none"
                        />
                    </div>
                    <div className="w-full md:w-64">
                        <select value={specialtyFilter} onChange={e => setSpecialtyFilter(e.target.value)} className="w-full p-3 rounded-lg bg-gray-100">
                            {specialties.map(s => (
                                <option key={s} value={s}>{s === 'all' ? 'All Specialties' : s}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.length === 0 && (
                        <div className="col-span-full text-center text-gray-500 py-12">No labs found for the current search/filter.</div>
                    )}

                    {filtered.map(lab => (
                        <div key={lab.id} className="bg-gray-50 p-4 rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="text-lg font-bold">{lab.name}</h3>
                                    <p className="text-sm text-gray-600">{lab.specialties.join(' • ')}</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    {lab.phone ? (
                                        <a href={`tel:${lab.phone}`} className="text-red-600 bg-red-50 p-3 rounded-lg hover:bg-red-100" title={`Call ${lab.phone}`}>
                                            <Phone size={18} />
                                        </a>
                                    ) : (
                                        <div className="text-gray-400 p-3 rounded-lg" title="Phone not available"><Phone size={18} /></div>
                                    )}
                                    <button onClick={() => copyToClipboard(lab.phone)} className="text-gray-700 bg-gray-100 p-3 rounded-lg hover:bg-gray-200" title="Copy phone">
                                        <Copy size={16} />
                                    </button>
                                    <button onClick={() => toggleExpand(lab.id)} className="text-gray-700 bg-gray-100 p-2 rounded-full hover:bg-gray-200" title="Details">
                                        {expanded[lab.id] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                    </button>
                                </div>
                            </div>

                            {expanded[lab.id] && (
                                <div className="mt-4 text-sm text-gray-700 space-y-2">
                                    <div className="flex items-start space-x-2">
                                        <MapPin size={16} className="mt-1 text-yellow-500" />
                                        <div>{lab.location}</div>
                                    </div>
                                    {lab.owner && (
                                        <div className="flex items-start space-x-2">
                                            <User size={16} className="mt-1 text-yellow-500" />
                                            <div>{lab.owner}</div>
                                        </div>
                                    )}
                                </div>
                            )}

                            <div className="mt-4 flex items-center justify-between">
                                <div className="text-sm text-gray-600">{lab.phone ? <span className="font-medium">{lab.phone}</span> : <span className="italic">Phone not listed</span>}</div>
                                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700">Book</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;