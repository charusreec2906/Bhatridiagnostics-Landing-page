import React from 'react';
import { Activity, Layers, FileText, Radio, AlertCircle, CheckCircle2 } from 'lucide-react';
import { WHAT_WE_OFFER } from '../data/teleradiologyData';
import { ScrollReveal } from './ScrollReveal';

const iconMap: Record<string, React.ElementType> = {
  Activity,
  Layers,
  FileText,
  Radio,
  AlertCircle,
  CheckCircle2,
};

export const WhatWeOfferSection: React.FC = () => {
  return (
    <section id="what-we-offer" className="pt-16 sm:pt-20 pb-14 sm:pb-16 bg-[#0B1F33]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={18} durationMs={600} className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4DA3FF] mb-3">
            Our Offerings
          </p>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#FFFFFF] tracking-tight mb-5">
            What We Offer
          </h2>
          <p className="font-sans-clean text-base sm:text-lg text-[#B8C7D9] leading-relaxed">
            A dedicated reporting environment for radiologists, offering opportunities across CT, MRI, emergency, and subspecialty imaging.
          </p>
        </ScrollReveal>

        {/* 6 Cards Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHAT_WE_OFFER.map((item, idx) => {
            const IconComponent = iconMap[item.iconName] || Activity;
            return (
              <ScrollReveal
                key={item.id}
                direction="up"
                distance={18}
                delayMs={(idx % 3) * 80}
                durationMs={550}
                className="h-full"
              >
                <div
                  id={`offer-card-${item.id}`}
                  className="h-full bg-[#102438] hover:bg-[#142F4B] border border-[#1C3B5E] hover:border-[#4DA3FF]/50 rounded-xl p-7 sm:p-8 transition-all duration-200 flex flex-col justify-start shadow-xs hover:shadow-sm"
                >
                  {/* Icon box */}
                  <div className="w-10 h-10 rounded-lg bg-[#0B1F33] text-[#4DA3FF] border border-[#1C3B5E] flex items-center justify-center mb-5">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-[#FFFFFF] mb-2.5 tracking-tight font-sans-clean">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#B8C7D9] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
