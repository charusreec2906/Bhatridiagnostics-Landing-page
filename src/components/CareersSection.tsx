import React, { useState, useRef, useEffect } from 'react';
import { Upload, AlertCircle, Mail, X } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const CareersSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: 'Radiologist',
    resumeFileName: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Prevent background page from scrolling while the modal is open
  useEffect(() => {
    if (isModalOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isModalOpen]);

  // Support closing modal with Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        resumeFileName: e.target.files![0].name,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const openApplicationModal = () => {
    setIsModalOpen(true);
  };

  const closeApplicationModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="careers" className="scroll-mt-20">
      {/* 1. DEDICATED RADIOLOGIST RECRUITMENT HERO */}
      <div className="py-16 sm:py-20 bg-[#102438] border-t border-b border-[#1C3B5E]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <ScrollReveal direction="up" distance={18} durationMs={650}>
            {/* Eyebrow */}
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4DA3FF] mb-4">
              CAREERS AT BHARTIDIAGNOSTICS
            </p>

            {/* Main Heading */}
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#FFFFFF] tracking-tight leading-[1.2] mb-6">
              Join Bhartidiagnostics
            </h2>

            {/* Subheading */}
            <p className="font-sans-clean text-base sm:text-lg text-[#B8C7D9] leading-relaxed max-w-2xl mx-auto mb-10">
              Be part of a team of radiologists delivering timely, quality diagnostic reporting through teleradiology.
            </p>

            {/* Primary Action Button */}
            <div className="flex items-center justify-center">
              <button
                id="careers-hero-apply-btn"
                onClick={openApplicationModal}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#4DA3FF] hover:bg-[#3B94F0] text-[#0B1F33] font-semibold text-base rounded-md shadow-sm hover:shadow-md transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer"
              >
                Apply as a Radiologist →
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* 2. RADIOLOGIST APPLICATION MODAL OVERLAY */}
      {isModalOpen && (
        <div
          id="radiologist-application-modal-overlay"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#06121E]/80 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
          onClick={closeApplicationModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            id="radiologist-application-modal"
            className="relative w-full max-w-2xl bg-[#102438] rounded-2xl border border-[#1C3B5E] shadow-2xl p-6 sm:p-10 my-auto animate-in zoom-in-95 duration-200 text-[#FFFFFF]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top-right "×" Close Button */}
            <button
              id="careers-modal-close-btn"
              onClick={closeApplicationModal}
              aria-label="Close modal"
              className="absolute top-5 right-5 w-9 h-9 rounded-lg flex items-center justify-center text-[#B8C7D9] hover:text-[#FFFFFF] hover:bg-[#163252] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5 stroke-[2.2]" />
            </button>

            {/* Modal Heading & Subtext */}
            <div className="mb-6 pr-8">
              <h3 id="modal-title" className="font-editorial text-2xl sm:text-3xl font-semibold text-[#FFFFFF] tracking-tight mb-2">
                Radiologist Application
              </h3>
              <p className="text-sm text-[#B8C7D9] leading-relaxed">
                Please complete the details below to register your interest with Bhartidiagnostics.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-[#0B1F33] border border-[#1C3B5E] rounded-xl p-6 sm:p-8 text-left space-y-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#4DA3FF] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-[#FFFFFF] text-base mb-1 font-sans-clean">
                      Application Interface Ready (Integration Placeholder)
                    </h4>
                    <p className="text-sm text-[#B8C7D9] leading-relaxed">
                      This application interface is staged and needs to be connected to the company's HR email or applicant tracking workflow. Form entries are not automatically routed to a live backend yet.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#1C3B5E] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm">
                  <div className="text-xs text-[#B8C7D9]">
                    Candidate: <span className="font-medium text-[#FFFFFF]">{formData.fullName || 'Registered'}</span> ({formData.position})
                  </div>
                  <a
                    href={`mailto:careers@bhartidiagnostics.com?subject=Application for ${encodeURIComponent(
                      formData.position
                    )} - ${encodeURIComponent(formData.fullName)}&body=Name: ${encodeURIComponent(
                      formData.fullName
                    )}%0D%0APhone: ${encodeURIComponent(formData.phone)}%0D%0AEmail: ${encodeURIComponent(
                      formData.email
                    )}%0D%0A%0D%0A${encodeURIComponent(formData.message)}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#4DA3FF] hover:bg-[#3B94F0] text-[#0B1F33] text-xs font-semibold rounded-md transition"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    Email CV to careers@bhartidiagnostics.com
                  </a>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs text-[#4DA3FF] underline hover:no-underline cursor-pointer"
                  >
                    Edit application details
                  </button>
                  <button
                    type="button"
                    onClick={closeApplicationModal}
                    className="text-xs font-medium text-[#B8C7D9] hover:text-[#FFFFFF] px-3 py-1.5 rounded-md hover:bg-[#163252] transition cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#B8C7D9] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Dr. Full Name"
                    className="w-full px-4 py-2.5 rounded-lg border border-[#1C3B5E] bg-[#0B1F33] text-[#FFFFFF] placeholder:text-[#647C96] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#4DA3FF] focus:border-[#4DA3FF] focus:bg-[#0B1F33]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#B8C7D9] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="doctor@example.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-[#1C3B5E] bg-[#0B1F33] text-[#FFFFFF] placeholder:text-[#647C96] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#4DA3FF] focus:border-[#4DA3FF] focus:bg-[#0B1F33]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#B8C7D9] mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 rounded-lg border border-[#1C3B5E] bg-[#0B1F33] text-[#FFFFFF] placeholder:text-[#647C96] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#4DA3FF] focus:border-[#4DA3FF] focus:bg-[#0B1F33]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#B8C7D9] mb-1.5">
                    Position Applying For *
                  </label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-[#1C3B5E] bg-[#0B1F33] text-[#FFFFFF] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#4DA3FF] focus:border-[#4DA3FF] cursor-pointer"
                  >
                    <option value="Radiologist">Radiologist</option>
                    <option value="Subspecialty Radiologist – Neuro">Subspecialty Radiologist – Neuro</option>
                    <option value="Subspecialty Radiologist – MSK">Subspecialty Radiologist – MSK</option>
                    <option value="Subspecialty Radiologist – Body Imaging">Subspecialty Radiologist – Body Imaging</option>
                    <option value="Other Radiologist Position">Other Radiologist Position</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#B8C7D9] mb-1.5">
                    Resume Upload (.pdf, .doc, .docx)
                  </label>
                  <div className="border border-dashed border-[#1C3B5E] rounded-lg p-4 bg-[#0B1F33] hover:bg-[#142F4B] transition text-center cursor-pointer relative">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="flex flex-col items-center justify-center gap-1.5 text-xs text-[#B8C7D9]">
                      <Upload className="w-5 h-5 text-[#4DA3FF]" />
                      {formData.resumeFileName ? (
                        <span className="font-medium text-[#4DA3FF]">{formData.resumeFileName}</span>
                      ) : (
                        <span>Click or drag your CV here to attach</span>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#B8C7D9] mb-1.5">
                    Message / Brief Profile
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Briefly describe your experience, modalities of interest, or qualifications..."
                    className="w-full px-4 py-2.5 rounded-lg border border-[#1C3B5E] bg-[#0B1F33] text-[#FFFFFF] placeholder:text-[#647C96] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#4DA3FF] focus:border-[#4DA3FF] resize-y"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    id="careers-submit-btn"
                    className="w-full py-3.5 bg-[#4DA3FF] hover:bg-[#3B94F0] text-[#0B1F33] font-semibold text-base rounded-md shadow-sm transition-all duration-150 cursor-pointer"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
