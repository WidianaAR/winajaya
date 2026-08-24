import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';
import { WHATSAPP_URL } from '../constants/contact';

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/tentang-kami' },
    { name: t('nav.services'), path: '/layanan' },
    { name: t('nav.products'), path: '/produk' },
    { name: t('nav.portfolio'), path: '/portofolio' },
  ];

  const toggleLang = () => {
    const nextLang = i18n.language === 'id' ? 'en' : 'id';
    i18n.changeLanguage(nextLang);
  };

  const isDarkHeader = location.pathname !== '/';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 z-50">
            <span className={`font-serif text-2xl font-bold tracking-tight transition-colors ${(!isScrolled && isDarkHeader) ? 'text-white' : 'text-primary'}`}>
              CV. WINA JAYA
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                let textColorClass = '';
                if (isScrolled || !isDarkHeader) {
                  textColorClass = isActive ? 'text-primary font-semibold' : 'text-slate-600 hover:text-primary';
                } else {
                  textColorClass = isActive ? 'text-white font-bold' : 'text-white/80 hover:text-white';
                }

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm font-medium transition-colors ${textColorClass}`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-4">
              <button onClick={toggleLang} className={`flex items-center gap-1 text-sm font-medium transition-colors ${(!isScrolled && isDarkHeader) ? 'text-white/80 hover:text-white' : 'text-slate-600 hover:text-primary'}`}>
                <Globe size={18} />
                <span className="uppercase">{i18n.language}</span>
              </button>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl font-semibold transition-colors bg-primary text-white hover:bg-primary/90 h-9 px-4 text-sm"
              >
                {t('nav.cta')}
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden z-50 p-2 transition-colors ${(!isScrolled && isDarkHeader && !isOpen) ? 'text-white' : 'text-slate-600'}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-xl pt-24 px-6 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium py-2 border-b border-slate-100 ${location.pathname === link.path ? 'text-primary' : 'text-slate-600'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <button onClick={toggleLang} className="flex items-center gap-2 text-lg font-medium text-slate-600 py-2 border-b border-slate-100">
              <Globe size={20} />
              <span>Ganti Bahasa ({i18n.language === 'id' ? 'English' : 'Indonesia'})</span>
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-xl font-medium transition-colors bg-primary text-white hover:bg-primary/90 h-11 px-8 text-base mt-4"
            >
              {t('nav.cta')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
