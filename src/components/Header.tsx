import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'what-we-offer', label: 'What We Offer' },
    { id: 'services', label: 'Services' },
    { id: 'who-we-serve', label: 'Who We Serve' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'careers', label: 'Careers' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0B1F33]/90 backdrop-blur-md border-b border-[#1C3B5E] transition-all">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo - Uses /images/logo.svg directly */}
        <div className="flex-1 flex items-center justify-start">
          <button
            id="brand-name-btn"
            onClick={() => onNavigate('hero')}
            className="flex items-center text-left group transition-all duration-200 cursor-pointer bg-transparent border-0 p-0 hover:opacity-90 focus:outline-none"
            aria-label="Bhartidiagnostics Home"
          >
            <img
              src="/images/logo.svg"
              alt="Bhartidiagnostics"
className="h-[55px] w-auto object-contain block"
/>
          </button>
        </div>

        {/* Center Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 bg-[#102438] p-1.5 rounded-full border border-[#1C3B5E] shadow-xs">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => onNavigate(item.id)}
                className={`px-3.5 xl:px-4 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#4DA3FF] text-[#0B1F33] font-semibold shadow-xs'
                    : 'text-[#B8C7D9] hover:text-[#FFFFFF] hover:bg-[#163252]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right side balance on desktop / mobile hamburger toggle on mobile */}
        <div className="flex-1 flex items-center justify-end">
          {/* Mobile / Tablet hamburger button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#FFFFFF] hover:bg-[#163252] transition cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#1C3B5E] bg-[#0B1F33] px-6 py-4 space-y-2 animate-in fade-in duration-150">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium ${
                activeSection === item.id
                  ? 'bg-[#4DA3FF] text-[#0B1F33] font-semibold'
                  : 'text-[#B8C7D9] hover:bg-[#163252] hover:text-[#FFFFFF]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
