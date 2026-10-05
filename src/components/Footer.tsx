import React from 'react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#0B1F33] border-t border-[#1C3B5E] pt-12 pb-10 text-[#B8C7D9] text-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#1C3B5E]">
          {/* Col 1: Brand */}
          <div className="lg:col-span-6 pr-6">
            <button
              onClick={() => onNavigate('hero')}
              className="flex items-center mb-4 hover:opacity-90 transition-opacity text-left cursor-pointer bg-transparent border-0 p-0 focus:outline-none"
              aria-label="Bhartidiagnostics Home"
            >
              <img
                src="/images/logo.svg"
                alt="Bhartidiagnostics"
                style={{ width: 'auto', height: '57px', objectFit: 'contain' }}
                className="h-[40px] w-auto object-contain block"
              />
            </button>
            <p className="text-sm text-[#B8C7D9] leading-relaxed max-w-md">
              Reliable teleradiology reporting services for hospitals, diagnostic centres, and clinics across India — connecting medical imaging with experienced radiology expertise.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-semibold text-[#FFFFFF] mb-4 text-sm font-sans-clean">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('what-we-offer')}
                  className="hover:text-[#4DA3FF] transition-colors text-left cursor-pointer"
                >
                  What We Offer
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#4DA3FF] transition-colors text-left cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('who-we-serve')}
                  className="hover:text-[#4DA3FF] transition-colors text-left cursor-pointer"
                >
                  Who We Serve
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('why-us')}
                  className="hover:text-[#4DA3FF] transition-colors text-left cursor-pointer"
                >
                  Why Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('careers')}
                  className="hover:text-[#4DA3FF] transition-colors text-left cursor-pointer"
                >
                  Careers
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-semibold text-[#FFFFFF] mb-4 text-sm font-sans-clean">
              Contact &amp; Inquiries
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:info@bhartidiagnostics.com"
                  className="hover:text-[#4DA3FF] transition-colors"
                >
                  info@bhartidiagnostics.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:careers@bhartidiagnostics.com"
                  className="hover:text-[#4DA3FF] transition-colors"
                >
                  careers@bhartidiagnostics.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 text-center text-xs text-[#647C96]">
          © {new Date().getFullYear()} Bhartidiagnostics. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
