'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ThankYou() {
  return (
    <main className="min-h-screen flex items-center justify-center py-8 md:py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="logo-container">
            <Image
              src="/memora-logo.png"
              alt="Memora - Your Legacy, Forever Preserved"
              width={192}
              height={192}
              priority
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Thank You Message */}
          <h1 className="main-title">
            Thank You for Reaching Out
          </h1>
          
          {/* Confirmation Message */}
          <p className="description mb-8">
            We look forward to helping you preserve your legacy. We'll be in touch soon to discuss how we can capture your story.
          </p>

          {/* Return Home Link */}
          <Link 
            href="/" 
            className="inline-block px-6 py-3 bg-[#2C1810] text-white rounded-full hover:bg-[#5C4030] transition-colors duration-300"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
} 