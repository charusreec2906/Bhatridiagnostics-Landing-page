import React from 'react';
import { Lock } from 'lucide-react';
import radiologyVisual from '../assets/images/radiology_hero_review_1789472205602.jpg';
import { ScrollReveal } from './ScrollReveal';

interface HeroSectionProps {
  onExploreServices: () => void;
  onWhatWeOffer: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreServices,
  onWhatWeOffer,
}) => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#00162C] lg:h-[520px] xl:h-[540px] flex items-center"
    >
      {/* Background Radiologist Image Layer - Embedded seamlessly into #00162C */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[60%] xl:w-[55%] pointer-events-none select-none z-0">
        <img
          src={radiologyVisual}
          alt="Radiologist reviewing diagnostic scans on medical monitors in modern reading room"
          className="w-full h-full object-cover object-center filter contrast-[1.06] brightness-[0.96]"
          referrerPolicy="no-referrer"
        />

        {/* Left smooth fade: transitions image seamlessly into #00162C */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00162C] via-[#00162C]/75 via-35% to-transparent z-10" />
        <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-[#00162C] to-transparent z-10" />

        {/* Top smooth fade into #00162C */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#00162C] to-transparent z-10" />

        {/* Bottom smooth fade into #00162C */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#00162C] to-transparent z-10" />

        {/* Mobile/Tablet readability overlay */}
        <div className="lg:hidden absolute inset-0 bg-[#00162C]/85 z-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 items-center h-full py-8 lg:py-4">
          {/* LEFT SIDE — Approximately 50% width, vertically centered */}
          <ScrollReveal direction="up" distance={16} durationMs={650} className="flex flex-col justify-center text-left max-w-xl lg:max-w-none">
            {/* Main Display Headline */}
            <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[48px] font-semibold text-[#FFFFFF] tracking-tight leading-[1.14] mb-4 sm:mb-5">
              Expert Radiology Reporting, Wherever You Need It
            </h1>

            {/* Subtitle */}
            <p className="font-sans-clean text-base sm:text-lg text-[#B8C7D9] leading-relaxed mb-6 sm:mb-8">
              Reliable teleradiology reporting for hospitals, diagnostic centres and clinics across India — connecting medical imaging with experienced radiology expertise.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3.5 mb-6 sm:mb-8">
              <button
                id="hero-explore-services-btn"
                onClick={onExploreServices}
                className="w-full sm:w-auto px-7 py-3 bg-[#4DA3FF] hover:bg-[#3B94F0] text-[#0B1F33] font-semibold text-base rounded-md shadow-sm transition-all duration-150 flex items-center justify-center gap-2 hover:shadow-md cursor-pointer"
              >
                Explore Our Services
              </button>

              <button
                id="hero-what-we-offer-btn"
                onClick={onWhatWeOffer}
                className="w-full sm:w-auto px-7 py-3 bg-transparent hover:bg-[#102438] text-[#FFFFFF] border border-[#1C3B5E] hover:border-[#4DA3FF] font-medium text-base rounded-md transition-all duration-150 flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                What We Offer
              </button>
            </div>

            {/* Trust Indicator - Secure DICOM Workflow */}
            <div className="flex items-center justify-start text-xs sm:text-sm text-[#B8C7D9]">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#4DA3FF]" />
                <span className="font-medium text-[#B8C7D9]">Secure DICOM Workflow</span>
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT SIDE — Spacer column on desktop preserving layout proportions while image blends naturally in the background */}
          <div className="hidden lg:block h-full pointer-events-none" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};
