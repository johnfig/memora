'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#FDF5E6]">
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          {/* Logo */}
          <div className="mb-8 relative w-48 h-48 mx-auto">
            <Image
              src="/memora-logo.png"
              alt="Memora - Your Legacy, Forever Preserved"
              width={192}
              height={192}
              priority
            />
          </div>
          
          {/* Tagline */}
          <h1 className="text-3xl md:text-4xl font-serif text-[#2C1810] mb-6">
            Preserve Your Legacy Through AI
          </h1>
          
          {/* Description */}
          <p className="text-xl text-[#5C4030] mb-12 max-w-xl mx-auto">
            Create an interactive AI experience that captures your voice, stories, and wisdom for future generations.
          </p>
          
          {/* Calendly Widget */}
          <div className="w-full max-w-xl mx-auto rounded-lg bg-white p-1 shadow-lg overflow-hidden">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/john-fig/memora-discovery-call"
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
