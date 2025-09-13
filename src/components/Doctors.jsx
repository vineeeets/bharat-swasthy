import React, { useState, useMemo } from 'react';
import { Phone, MapPin, User, Copy, ChevronDown, ChevronUp } from 'lucide-react';
import doctors from '../data/doctors';
import '../styles/components/doctors.css';

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
    <section id="doctors">
      <div className="doctors-container">
        <div className="doctors-header">
          <span className="sub-title">DOCTORS</span>
          <h2 className="title">Surgeons & Specialists</h2>
          <p>Search doctors by name, address or specialty. Use the dropdown to filter specialties.</p>
        </div>

        <div className="doctors-filters">
          <div className="search-input">
            <input
              type="search"
              placeholder="Search doctors, address or specialty..."
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

        <div className="doctors-grid">
          {filtered.length === 0 && (
            <div className="no-doctors">No doctors found for the current search/filter.</div>
          )}

          {filtered.map(doc => (
            <div key={doc.id} className="doctor-card">
              <div className="doctor-card-header">
                <div>
                  <h3>{doc.name}</h3>
                  <p>{doc.specialties.join(' • ')}</p>
                </div>
                <div className="doctor-actions">
                  {doc.phone ? (
                    <a href={`tel:${doc.phone}`} className="action-btn phone-btn" title={`Call ${doc.phone}`}>
                      <Phone size={18} className="green-icon" />
                    </a>
                  ) : (
                    <div className="disabled-btn" title="Phone not available"><Phone size={18} /></div>
                  )}
                  <button onClick={() => copyToClipboard(doc.phone)} className="action-btn copy-btn" title="Copy phone">
                    <Copy size={16} />
                  </button>
                  <button onClick={() => toggleExpand(doc.id)} className="action-btn details-btn" title="Details">
                    {expanded[doc.id] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                </div>
              </div>

              {expanded[doc.id] && (
                <div className="doctor-details">
                  <div className="detail-item">
                    <MapPin size={16} className="detail-icon" />
                    <div>{doc.address}</div>
                  </div>
                  {doc.phone && (
                    <div className="detail-item">
                      <Phone size={16} className="detail-icon" />
                      <div className="detail-phone">{doc.phone}</div>
                    </div>
                  )}
                </div>
              )}

              <div className="doctor-card-footer">
                <div className="footer-phone">
                  {doc.phone ? <span className="phone-number">{doc.phone}</span> : <span className="no-phone">Phone not listed</span>}
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

export default Doctors;
