import React from 'react';
import './Contact.css';

const Contact = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
      email: "sarah.johnson@mywellhome.com",
      instagram: "dr_sarahjohnson",
      facebook: "drsarahjohnson"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Wellness Technology Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      email: "michael.chen@mywellhome.com",
      instagram: "mike_wellness_tech",
      facebook: "michaelchentech"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      role: "Nutritionist & Health Coach",
      image: "https://images.unsplash.com/photo-1594824804732-ca8db4ac9430?w=300&h=300&fit=crop&crop=face",
      email: "emily.rodriguez@mywellhome.com",
      instagram: "dr_emily_nutrition",
      facebook: "dremilyrodriguez"
    },
    {
      id: 4,
      name: "James Thompson",
      role: "Fitness & Wellness Specialist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      email: "james.thompson@mywellhome.com",
      instagram: "james_fitness_guru",
      facebook: "jamesthompsonwellness"
    },
    {
      id: 5,
      name: "Dr. Lisa Park",
      role: "Mental Health & Mindfulness Expert",
      image: "https://images.unsplash.com/photo-1494790108755-2616c26ce8b1?w=300&h=300&fit=crop&crop=face",
      email: "lisa.park@mywellhome.com",
      instagram: "dr_lisa_mindful",
      facebook: "drlisapark"
    },
    {
      id: 6,
      name: "David Kim",
      role: "Home Environment Specialist",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      email: "david.kim@mywellhome.com",
      instagram: "david_home_wellness",
      facebook: "davidkimwellness"
    }
  ];

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <h1 className="contact-title">Meet Our Team</h1>
          <p className="contact-subtitle">
            Our dedicated professionals are here to support your wellness journey
          </p>
        </div>
      </div>

      <section className="team-section">
        <div className="container">
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <div className="team-image">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/300x300/68bb59/ffffff?text=${member.name.split(' ').map(n => n[0]).join('')}`;
                    }}
                  />
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  
                  <div className="team-contact">
                    <a href={`mailto:${member.email}`} className="contact-email">
                      <span className="email-icon">✉️</span>
                      {member.email}
                    </a>
                  </div>

                  <div className="social-links">
                    <a 
                      href={`https://instagram.com/${member.instagram}`} 
                      className="social-link instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="social-icon">📷</span>
                      Instagram
                    </a>
                    <a 
                      href={`https://facebook.com/${member.facebook}`} 
                      className="social-link facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="social-icon">📘</span>
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-info">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-item">
              <h3>📱 Checkout our Mobile App</h3>
              <p>Download MyWellHome app<br />Available on iOS & Android</p>
              <a 
                href="https://fbwuegfu.my.canva.site/mywellhome" 
                target="_blank" 
                rel="noopener noreferrer"
                className="app-link"
              >
                Visit App Store
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;