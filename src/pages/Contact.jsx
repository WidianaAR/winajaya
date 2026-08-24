import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { SectionHeading } from '../components/SectionHeading';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { MapPin, Phone, Mail, Building, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { WHATSAPP_URL } from '../constants/contact';

export function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>CV. Wina Jaya - {t('nav.contact')}</title>
        <meta name="description" content={t('contact.address')} />
      </Helmet>

      {/* Hero / Header */}
      <section className="relative pt-32 pb-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" 
            alt="Latar CV Wina Jaya" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto mb-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-tight">
              {t('contact.title')}
            </h2>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="flex flex-col">
              <div className="space-y-6 flex-1 flex flex-col justify-between">
                <Card className="p-6 flex flex-col sm:flex-row gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">{t('contact.address_title')}</h4>
                    <p className="text-slate-600 leading-relaxed">{t('contact.address')}</p>
                  </div>
                </Card>

                <Card className="p-6 flex flex-col sm:flex-row gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">{t('contact.phone_title')}</h4>
                    <p className="text-slate-600 leading-relaxed">{t('contact.phone')}</p>
                  </div>
                </Card>

                <Card className="p-6 flex flex-col sm:flex-row gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">{t('contact.email_title')}</h4>
                    <a href={`mailto:${t('contact.email')}`} className="text-primary hover:underline leading-relaxed">{t('contact.email')}</a>
                  </div>
                </Card>

                <Card className="p-6 flex flex-col sm:flex-row gap-6 items-start bg-stone-50 border-stone-100">
                  <div className="w-12 h-12 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center shrink-0">
                    <Building size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">{t('contact.legal_title')}</h4>
                    <p className="text-slate-600 leading-relaxed font-medium">{t('contact.legal')}</p>
                  </div>
                </Card>

                <div className="pt-2">
                  <Button asChild size="lg" className="w-full sm:w-auto flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white">
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                      <Send size={18} /> {t('contact.cta')}
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="h-full">
              <Card className="p-2 overflow-hidden h-full min-h-[400px] border-stone-200 shadow-md flex flex-col">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.857642631557!2d116.83362141475396!3d-1.2573215990825313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df1473d09a2af4f%3A0xc91552a4eab59298!2sJl.%20Karya%20Murni%20No.34%2C%20Gunungsari%20Ilir%2C%20Kec.%20Balikpapan%20Tengah%2C%20Kota%20Balikpapan%2C%20Kalimantan%20Timur%2076121!5e0!3m2!1sid!2sid!4v1684300000000!5m2!1sid!2sid" 
                  width="100%" 
                  height="100%" 
                  className="w-full h-full flex-1 min-h-[350px]"
                  style={{ border: 0, borderRadius: '0.75rem' }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps CV Wina Jaya"
                ></iframe>
              </Card>
            </motion.div>
            
          </div>
        </div>
      </section>
    </>
  );
}
