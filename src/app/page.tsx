'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Define the Calendly event type
interface CalendlyEvent {
  event: string;
  data: {
    event: string;
    payload: {
      event: {
        uri: string;
        uuid: string;
      };
    };
  };
}

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const handleCalendlyEvent = (e: MessageEvent<CalendlyEvent>) => {
      if (e.data.event === 'calendly.event_scheduled') {
        router.push('/thank-you');
      }
    };

    window.addEventListener('message', handleCalendlyEvent);
    return () => window.removeEventListener('message', handleCalendlyEvent);
  }, [router]);

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
          <p className="description mb-6">
            Memora captures your essence—voice, stories, and wisdom—so your loved ones can connect with you anytime, even after you&#39;re gone.
          </p>

          {/* Learn More Button */}
          <a
            href="https://form.typeform.com/to/ZxZ7frel"
            rel="noopener noreferrer"
            className="learn-more-link"
          >
            Join the Waitlist Today
          </a>
        </div>
      </div>
    </main>
  );
}
