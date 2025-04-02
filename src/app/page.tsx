'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center py-8 md:py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="logo-container">
            <Image
              src="/memora-logo.png"
              alt="Memora - Your Legacy, Forever Preserved"
              width={192}
              height={192}
              priority
              className="w-full h-full"
            />
          </div>
          
          {/* Tagline */}
          <h1 className="main-title">
            Your Story, In Your Voice. Forever.
          </h1>
          
          {/* Description */}
          <p className="description">
          Memora captures your essence—voice, stories, and wisdom—so your loved ones can connect with you anytime, even after you're gone.
          </p>
          
          {/* Calendly Widget */}
          <div className="w-full max-w-xl mx-auto rounded-lg bg-white p-1 shadow-lg overflow-hidden">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/john-fig/memora-discovery-call"
              style={{ minWidth: '320px', height: '800px' }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
