import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail } from 'lucide-react';
import { WHATSAPP_URL } from '../constants/contact';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-950 text-slate-300 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          
          <div className="md:col-span-4 lg:col-span-5">
            <h3 className="font-serif text-2xl font-bold text-white mb-4">CV. WINA JAYA</h3>
            <p className="text-slate-400 mb-6 leading-relaxed max-w-sm">
              {t('footer.desc')}
            </p>
          </div>

          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-white font-medium mb-4 text-lg">{t('footer.quick_links')}</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/tentang-kami" className="hover:text-primary transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/layanan" className="hover:text-primary transition-colors">{t('nav.services')}</Link></li>
              <li><Link to="/produk" className="hover:text-primary transition-colors">{t('nav.products')}</Link></li>
              <li><Link to="/portofolio" className="hover:text-primary transition-colors">{t('nav.portfolio')}</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-4">
            <h4 className="text-white font-medium mb-4 text-lg">{t('footer.contact')}</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0 mt-1" size={18} />
                <span className="text-sm leading-relaxed">{t('contact.address')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-primary transition-colors"
                >
                  {t('contact.phone')}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={18} />
                <a
                  href={`mailto:${t('contact.email')}`}
                  className="text-sm hover:text-primary transition-colors"
                >
                  {t('contact.email')}
                </a>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} CV. Wina Jaya. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
