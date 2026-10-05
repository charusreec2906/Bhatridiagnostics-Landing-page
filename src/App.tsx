/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { WhatWeOfferSection } from './components/WhatWeOfferSection';
import { ServicesSection } from './components/ServicesSection';
import { WhoWeServeSection } from './components/WhoWeServeSection';
import { WhyPartnerSection } from './components/WhyPartnerSection';
import { CareersSection } from './components/CareersSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('what-we-offer');

  // Scroll listener to update active navbar section based on viewport
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = [
        'what-we-offer',
        'services',
        'who-we-serve',
        'why-us',
        'careers',
      ];
      const scrollPosition = window.scrollY + 200;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Account for sticky header height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1F33] text-[#FFFFFF] flex flex-col selection:bg-[#4DA3FF] selection:text-[#0B1F33]">
      {/* Sticky Header with Navigation and transparent authentic Bhartidiagnostics Logo */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onExploreServices={() => handleNavigate('services')}
          onWhatWeOffer={() => handleNavigate('what-we-offer')}
        />

        {/* What We Offer Section */}
        <WhatWeOfferSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Who We Serve Section */}
        <WhoWeServeSection />

        {/* Why Partner With Us Section */}
        <WhyPartnerSection />

        {/* Careers Section */}
        <CareersSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
