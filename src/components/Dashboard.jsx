import React from 'react';
const Dashboard = ({ onNavigate }) => {
  const pages = [
    { id: 'home', title: 'Home', description: 'Hero and main banner' },
    { id: 'about', title: 'About', description: 'About the clinic and founder' },
    { id: 'contact', title: 'Contact', description: 'Contact form and details' },
    { id: 'testimonials', title: 'Testimonials', description: 'Patient feedback' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <p className="text-gray-600 mt-2">Quick links to site sections.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pages.map(p => (
            <div key={p.id} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer" onClick={() => onNavigate(p.id)}>
              <h3 className="font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-gray-600">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
