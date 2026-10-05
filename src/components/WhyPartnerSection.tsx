import React from 'react';
import { Check } from 'lucide-react';
import { WHY_PARTNER_POINTS } from '../data/teleradiologyData';
import { ScrollReveal } from './ScrollReveal';

export const WhyPartnerSection: React.FC = () => {
  return (
    <section id="why-us" className="py-14 sm:py-16 bg-[#0B1F33] border-t border-[#1C3B5E]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Advantage Points */}
          <ScrollReveal direction="up" distance={18} durationMs={650} className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4DA3FF] mb-3">
              Why Us
            </p>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#FFFFFF] tracking-tight mb-5">
              Why Partner With Us
            </h2>
            <p className="font-sans-clean text-base sm:text-lg text-[#B8C7D9] leading-relaxed mb-10 max-w-2xl">
              Our focus on diagnostic quality, dependable DICOM infrastructure, and dedicated communication supports healthcare facilities across India.
            </p>

            {/* Feature Points List */}
            <div className="space-y-6">
              {WHY_PARTNER_POINTS.map((point, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#163252] text-[#4DA3FF] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-[#FFFFFF] mb-1.5 font-sans-clean">
                      {point.title}
                    </h3>
                    <p className="text-sm text-[#B8C7D9] leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right Column: Deep Slate Clinical Standards Card */}
          <ScrollReveal direction="up" distance={20} delayMs={150} durationMs={700} className="lg:col-span-5">
            <div className="bg-[#102438] text-white rounded-xl p-8 sm:p-10 shadow-md flex flex-col justify-between min-h-[340px] border border-[#1C3B5E]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4DA3FF] mb-5">
                  Clinical Quality
                </p>
                <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug mb-5">
                  Consistent Standards in Teleradiology Reporting
                </h3>
                <p className="text-sm text-[#B8C7D9] leading-relaxed mb-8">
                  Every diagnostic study reviewed through our network reflects our commitment to clinical precision, systematic reviews, and prompt communication with referring doctors.
                </p>
              </div>

              {/* Bottom Credential Badges */}
              <div className="pt-6 border-t border-[#1C3B5E] flex flex-wrap items-center justify-between gap-4 text-xs font-medium text-[#B8C7D9]">
                <span>Qualified Radiologists</span>
                <span className="hidden sm:inline text-[#4DA3FF]">•</span>
                <span>Secure Cloud DICOM</span>
                <span className="hidden sm:inline text-[#4DA3FF]">•</span>
                <span>Structured Reporting</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
