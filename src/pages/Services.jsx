import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { SectionHeading } from '../components/SectionHeading';
import { Card } from '../components/Card';
import { motion } from 'framer-motion';
import { Wrench, Truck, BookOpen, Settings, ShieldCheck, Box, Search, CheckCircle } from 'lucide-react';

export function Services() {
  const { t } = useTranslation();

  const services = [
    { id: 's1', icon: <Box size={32} /> },
    { id: 's2', icon: <Truck size={32} /> },
    { id: 's3', icon: <Settings size={32} /> },
    { id: 's4', icon: <Wrench size={32} /> },
    { id: 's5', icon: <Wrench size={32} /> },
    { id: 's6', icon: <Search size={32} /> },
    { id: 's7', icon: <Truck size={32} /> },
    { id: 's8', icon: <BookOpen size={32} /> }
  ];

  return (
    <>
      <Helmet>
        <title>CV. Wina Jaya - {t('nav.services')}</title>
        <meta name="description" content={t('services.intro')} />
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
              {t('services.title')}
            </h2>
          </div>
          <p className="text-lg md:text-xl text-stone-200 text-center max-w-4xl mx-auto leading-relaxed">
            {t('services.intro')}
          </p>
        </div>
      </section>

      {/* Grid Layanan */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {services.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 2) * 0.1 }}
              >
                <Card className="p-8 h-full hover:border-primary/30 group flex flex-col sm:flex-row gap-6 items-start">
                  <div className="w-16 h-16 shrink-0 rounded-2xl bg-stone-100 text-slate-700 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-serif mb-4 text-slate-900 group-hover:text-primary transition-colors">
                      {t(`services.items.${service.id}_title`)}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {t(`services.items.${service.id}_desc`)}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alur Pemesanan */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title={t('services.flow_title')} center className="mb-16 mx-auto" />
          <div className="max-w-4xl mx-auto relative">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-8 left-16 right-16 h-0.5 bg-slate-200"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {[1, 2, 3].map((step) => (
                <div key={step} className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary text-white text-2xl font-bold flex items-center justify-center border-4 border-stone-50 shadow-md mb-6">
                    {step}
                  </div>
                  <h4 className="text-xl font-bold font-serif mb-3 text-slate-900">
                    {t(`services.flow${step}_title`)}
                  </h4>
                  <p className="text-slate-600">
                    {t(`services.flow${step}_desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Garansi */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <div className="w-20 h-20 mx-auto bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
            <ShieldCheck size={40} />
          </div>
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">{t('services.warranty_title')}</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="flex items-center gap-3 bg-stone-50 px-6 py-4 rounded-xl border border-stone-100">
              <CheckCircle className="text-green-500 shrink-0" />
              <span className="font-medium text-slate-800 text-left">{t('services.w1')}</span>
            </div>
            <div className="flex items-center gap-3 bg-stone-50 px-6 py-4 rounded-xl border border-stone-100">
              <CheckCircle className="text-green-500 shrink-0" />
              <span className="font-medium text-slate-800 text-left">{t('services.w2')}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
