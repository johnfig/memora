'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div style={{ maxWidth: '48rem', margin: '0 auto', textAlign: 'center' }}>
            <span className="gold-accent" style={{ fontSize: '1.25rem', fontFamily: 'Inter', display: 'block', marginBottom: '1rem' }}>
              Your Legacy, Forever Preserved
            </span>
            <h1 className="heading-1">
              Preserve Their Voice, Stories, and Legacy—Forever.
            </h1>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.9 }} className="body-text">
              Turn memories into interactive experiences your family can cherish for generations.
            </p>
            <Link 
              href="#consultation"
              className="btn-primary"
            >
              Schedule Your Personalized Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section section-cream">
        <div className="container">
          <div style={{ maxWidth: '48rem', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="heading-2">About Memora</h2>
            <div className="section-divider"></div>
            <p style={{ fontSize: '1.25rem' }} className="body-text">
              Memora captures your stories, wisdom, and essence, creating a lifelike AI-powered legacy that loved ones can interact with anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section section-ivory">
        <div className="container">
          <h2 className="heading-2" style={{ textAlign: 'center' }}>Key Benefits</h2>
          <div className="section-divider"></div>
          <div className="benefits-grid">
            <div className="card">
              <h3 className="heading-3">Interactive Memories</h3>
              <p className="body-text">
                Speak with a lifelike AI that sounds and feels authentically like your loved one.
              </p>
            </div>
            <div className="card">
              <h3 className="heading-3">Permanent Legacy</h3>
              <p className="body-text">
                Your voice, stories, and values preserved forever.
              </p>
            </div>
            <div className="card">
              <h3 className="heading-3">Privacy & Control</h3>
              <p className="body-text">
                Securely manage who can access and interact with your memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Users Section */}
      <section className="section section-cream">
        <div className="container">
          <h2 className="heading-2" style={{ textAlign: 'center' }}>Perfect For</h2>
          <div className="section-divider"></div>
          <div style={{ maxWidth: '42rem', margin: '0 auto' }}>
            <ul className="ideal-users-list">
              <li className="card">
                <p style={{ fontSize: '1.125rem', fontWeight: 500 }}>
                  Families looking to preserve their precious legacy
                </p>
              </li>
              <li className="card">
                <p style={{ fontSize: '1.125rem', fontWeight: 500 }}>
                  Parents creating lasting memories for their children
                </p>
              </li>
              <li className="card">
                <p style={{ fontSize: '1.125rem', fontWeight: 500 }}>
                  Individuals navigating important life milestones
                </p>
              </li>
              <li className="card">
                <p style={{ fontSize: '1.125rem', fontWeight: 500 }}>
                  Professionals sharing their wisdom and influence
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="consultation" className="section section-ivory">
        <div className="container">
          <div style={{ maxWidth: '48rem', margin: '0 auto', textAlign: 'center' }}>
            <span className="gold-accent" style={{ fontSize: '1.125rem', fontFamily: 'Inter', display: 'block', marginBottom: '1rem' }}>
              Begin Your Journey
            </span>
            <h2 className="heading-2">Start Preserving Your Legacy Today</h2>
            <div className="section-divider"></div>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }} className="body-text">
              Book a meeting today to explore Memora and discover customized options perfect for you and your family.
            </p>
            <Link 
              href="#consultation"
              className="btn-primary"
            >
              Book Your Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
