import React from 'react';
import { SERVICES } from '../data/teleradiologyData';
import kneeXRayImg from '../assets/images/knee_xray_scan_1789468926578.jpg';
import ctImg from '../assets/images/ct_neuro_scan_1789468957971.jpg';
import mriImg from '../assets/images/mri_axial_brain_1789469223835.jpg';
import usImg from '../assets/images/ultrasound_kidney_1789468969448.jpg';
import statImg from '../assets/images/stat_emergency_scan_1790146000337.jpg';
import secondOpinionImg from '../assets/images/second_opinion_mri_1790146016487.jpg';
import { ScrollReveal } from './ScrollReveal';

const SERVICE_IMAGES: Record<string, string> = {
  ct: ctImg,
  mri: mriImg,
  xray: kneeXRayImg,
  ultrasound: usImg,
  stat: statImg,
  'second-opinion': secondOpinionImg,
};

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-20 bg-[#0B1F33] border-t border-[#1C3B5E]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={18} durationMs={600} className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4DA3FF] mb-3">
            Diagnostic Modalities
          </p>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#FFFFFF] tracking-tight mb-5">
            Radiology Services
          </h2>
          <p className="font-sans-clean text-base sm:text-lg text-[#B8C7D9] leading-relaxed">
            Professional diagnostic reporting across key medical imaging modalities for hospitals, diagnostic centres, and clinics.
          </p>
        </ScrollReveal>

        {/* 6 Services Cards Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {SERVICES.map((service, idx) => {
            const displayImage = SERVICE_IMAGES[service.imageKey];

            return (
              <ScrollReveal
                key={service.id}
                direction="up"
                distance={18}
                delayMs={(idx % 3) * 80}
                durationMs={550}
                className="h-full"
              >
                <div
                  id={`service-card-${service.id}`}
                  className="h-full bg-[#102438] rounded-xl overflow-hidden border border-[#1C3B5E] hover:border-[#4DA3FF]/60 hover:shadow-lg transition-all duration-200 flex flex-col"
                >
                  {/* Radiographic Scan Display */}
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-[#06121E]">
                    <img
                      src={displayImage}
                      alt={`${service.title} diagnostic scan`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  {/* Service Details */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-sans-clean text-xl font-semibold text-[#FFFFFF] mb-2.5 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#B8C7D9] leading-relaxed flex-1">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
