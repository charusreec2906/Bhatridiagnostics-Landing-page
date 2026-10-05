import React from 'react';
import { Building2, FlaskConical, BriefcaseMedical } from 'lucide-react';
import { WHO_WE_SERVE } from '../data/teleradiologyData';
import { ScrollReveal } from './ScrollReveal';

const iconMap: Record<string, React.ElementType> = {
  Building2,
  FlaskConical,
  BriefcaseMedical,
};

export const WhoWeServeSection: React.FC = () => {
  return (
    <section id="who-we-serve" className="py-14 sm:py-16 bg-[#0B1F33] border-t border-[#1C3B5E]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={18} durationMs={600} className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4DA3FF] mb-3">
            Partnerships
          </p>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#FFFFFF] tracking-tight mb-5">
            Who We Serve
          </h2>
          <p className="font-sans-clean text-base sm:text-lg text-[#B8C7D9] leading-relaxed">
            Reliable teleradiology solutions tailored for healthcare providers across India.
          </p>
        </ScrollReveal>

        {/* 3 Clean Partner Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {WHO_WE_SERVE.map((client, idx) => {
            const IconComponent = iconMap[client.iconName] || Building2;
            return (
              <ScrollReveal
                key={idx}
                direction="up"
                distance={18}
                delayMs={idx * 100}
                durationMs={550}
                className="h-full"
              >
                <div
                  id={`who-we-serve-card-${idx}`}
                  className="h-full bg-[#102438] hover:bg-[#142F4B] rounded-xl p-8 border border-[#1C3B5E] hover:border-[#4DA3FF]/50 transition-all duration-200 flex flex-col justify-start shadow-xs hover:shadow-sm"
                >
                  {/* Icon badge */}
                  <div className="w-10 h-10 rounded-lg bg-[#0B1F33] text-[#4DA3FF] border border-[#1C3B5E] flex items-center justify-center mb-6">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-[#FFFFFF] mb-3 tracking-tight font-sans-clean">
                    {client.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#B8C7D9] leading-relaxed">
                    {client.description}
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
