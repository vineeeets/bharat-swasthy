import React, { useState, useMemo } from 'react';
import { Phone, MapPin, User, Copy, ChevronDown, ChevronUp } from 'lucide-react';
import doctors from '../data/doctors';

// Transcribed clinicians from provided handwritten images (surgeons + dermatologists)
// doctors data is imported from src/data/doctors.js

const Doctors = () => {
  const [expanded, setExpanded] = useState({});
  const [query, setQuery] = useState('');
  const [specialtyFilter, setSpecialtyFilter] = useState('all');

  const specialties = useMemo(() => {
    const set = new Set();
    doctors.forEach(d => d.specialties.forEach(s => set.add(s)));
    return ['all', ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return doctors.filter(doc => {
      if (specialtyFilter !== 'all' && !doc.specialties.map(s => s.toLowerCase()).includes(specialtyFilter.toLowerCase())) return false;
      if (!q) return true;
      return (
        doc.name.toLowerCase().includes(q) ||
        doc.address.toLowerCase().includes(q) ||
        doc.specialties.join(' ').toLowerCase().includes(q)
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

  return (
    <section id="doctors" className="py-20 bg-yellow-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-6">
          <span className="text-red-600 font-semibold">DOCTORS</span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">Surgeons & Specialists</h2>
          <p className="text-gray-600 mt-2">Search doctors by name, address or specialty. Use the dropdown to filter specialties.</p>
        </div>

  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="flex-1">
            <input
              type="search"
              placeholder="Search doctors, address or specialty..."
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

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.length === 0 && (
            <div className="col-span-full text-center text-gray-500 py-12">No doctors found for the current search/filter.</div>
          )}

          {filtered.map(doc => (
            <div key={doc.id} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold">{doc.name}</h3>
                  <p className="text-sm text-gray-600">{doc.specialties.join(' • ')}</p>
                </div>
                <div className="flex items-center space-x-2">
                  {doc.phone ? (
                    <a href={`tel:${doc.phone}`} className="text-red-600 bg-red-50 p-2 rounded-full hover:bg-red-100" title={`Call ${doc.phone}`}>
                      <Phone size={18} />
                    </a>
                  ) : (
                    <div className="text-gray-400 p-2 rounded-full" title="Phone not available"><Phone size={18} /></div>
                  )}
                  <button onClick={() => copyToClipboard(doc.phone)} className="text-gray-700 bg-gray-100 p-2 rounded-full hover:bg-gray-200" title="Copy phone">
                    <Copy size={16} />
                  </button>
                  <button onClick={() => toggleExpand(doc.id)} className="text-gray-700 bg-gray-100 p-2 rounded-full hover:bg-gray-200" title="Details">
                    {expanded[doc.id] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                </div>
              </div>

              {expanded[doc.id] && (
                <div className="mt-4 text-sm text-gray-700 space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin size={16} className="mt-1 text-yellow-500" />
                    <div>{doc.address}</div>
                  </div>
                  {doc.phone && (
                    <div className="flex items-start space-x-2">
                      <Phone size={16} className="mt-1 text-yellow-500" />
                      <div className="font-medium">{doc.phone}</div>
                    </div>
                  )}
                </div>
              )}

              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-gray-600">{doc.phone ? <span className="font-medium">{doc.phone}</span> : <span className="italic">Phone not listed</span>}</div>
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700">Book</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
