import './App.css'

import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Menu, X, Calendar, User, MessageSquare } from 'lucide-react';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Doctors from './components/Doctors';
// import { Analytics } from "@vercel/analytics/react"

const App = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [scrollTarget, setScrollTarget] = useState(null);

    const navigateTo = (section) => {
        setIsMenuOpen(false);
        // Services and Doctors are separate pages
        if (section === 'services' || section === 'doctors') {
            setActiveSection(section);
            setScrollTarget(null);
            return;
        }

        // For other sections, show Home and scroll to the id
        setActiveSection('home');
        setScrollTarget(section);
    };

    useEffect(() => {
        if (scrollTarget && activeSection === 'home') {
            // small timeout to ensure DOM rendered
            setTimeout(() => {
                document.getElementById(scrollTarget)?.scrollIntoView({ behavior: 'smooth' });
                setScrollTarget(null);
            }, 80);
        }
    }, [activeSection, scrollTarget]);

    // Component to render based on active section
    const renderSection = () => {
        if (activeSection === 'services') return <Services />;
        if (activeSection === 'doctors') return <Doctors />;

        // Home page: hero, about, testimonials, contact
        return (
            <>
                <Hero onNavigate={navigateTo} />
                <About />
                <Testimonials />
                <Contact />
            </>
        );
    };

    return (
        <div className="bg-gray-50 font-sans text-gray-800">
            <Header activeSection={activeSection} onNavigate={navigateTo} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <main>
                {renderSection()}
            </main>
            <Footer onNavigate={navigateTo} />
            {/* <Analytics /> */}
        </div>
    );
};

export default App;