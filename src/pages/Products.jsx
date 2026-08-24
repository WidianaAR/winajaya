import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { SectionHeading } from '../components/SectionHeading';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Settings, Shield, Award } from 'lucide-react';
import { WHATSAPP_URL } from '../constants/contact';

export function Products() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>CV. Wina Jaya - {t('nav.products')}</title>
        <meta name="description" content={t('products.intro')} />
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
              {t('products.title')}
            </h2>
          </div>
          <p className="text-lg md:text-xl text-stone-200 text-center max-w-4xl mx-auto leading-relaxed">
            {t('products.intro')}
          </p>
        </div>
      </section>

      {/* Kategori Utama */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title={t('products.categories_title')} center className="mb-12 mx-auto" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: 'heavy_machinery', icon: <Settings size={32} /> },
              { id: 'engine_parts', icon: <Settings size={32} /> },
              { id: 'transmission', icon: <Settings size={32} /> },
              { id: 'consumables', icon: <Settings size={32} /> },
            ].map((cat, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                <Card className="p-8 h-full hover:border-primary/30 group">
                  <div className="w-14 h-14 bg-stone-100 text-slate-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    {cat.icon}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">{t(`products.cat_${cat.id}`)}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{t(`products.cat_${cat.id}_desc`)}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title={t('products.featured_title')} center className="mb-12 mx-auto" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 flex flex-col md:flex-row gap-8 items-start hover:border-primary/30 transition-colors">
              <div className="w-20 h-20 shrink-0 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
                <Award size={40} />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">{t('products.featured_1_title')}</h3>
                <p className="text-slate-600 leading-relaxed">{t('products.featured_1_desc')}</p>
              </div>
            </Card>
            <Card className="p-8 flex flex-col md:flex-row gap-8 items-start hover:border-primary/30 transition-colors">
              <div className="w-20 h-20 shrink-0 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
                <Award size={40} />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">{t('products.featured_2_title')}</h3>
                <p className="text-slate-600 leading-relaxed">{t('products.featured_2_desc')}</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Kondisi & Partner */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <Card className="p-10 mb-20 bg-stone-900 text-white border-0 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1541888081622-c116c49cc1dc?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
            <div className="relative z-10">
              <Shield className="w-16 h-16 mx-auto text-primary mb-6" />
              <h3 className="text-3xl font-serif font-bold mb-6">{t('products.conditions_title')}</h3>
              <p className="text-lg text-stone-300 leading-relaxed max-w-3xl mx-auto">{t('products.conditions')}</p>
            </div>
          </Card>

          <SectionHeading title={t('products.partners_title')} center className="mb-12 mx-auto" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: 'altrac', name: 'Altrak 1978', logo: '/altrak.png' },
              { id: 'allrig', name: 'Allrig', logo: '/allrig.jpg' },
              { id: 'allison', name: 'Allison Transmission', logo: '/allison.png' },
              { id: 'hhtransindo', name: 'HH Transindo', logo: null }
            ].map((partner, idx) => (
              <motion.div key={partner.id} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                <Card className="p-6 h-full flex flex-col items-center justify-between text-center bg-stone-50 border-stone-100 hover:border-primary/30 hover:bg-white group transition-all">
                  <div className="w-full flex flex-col items-center">
                    <div className="w-full h-24 mb-4 bg-white rounded-xl border border-stone-200/80 flex items-center justify-center p-3 group-hover:border-primary/20 shadow-sm transition-colors">
                      {partner.logo ? (
                        <img 
                          src={partner.logo} 
                          alt={partner.name} 
                          className="max-h-16 max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="flex items-center justify-center gap-2 text-primary font-bold text-base font-serif">
                          <Settings className="w-6 h-6 text-primary animate-spin-slow" />
                          <span>{partner.name}</span>
                        </div>
                      )}
                    </div>
                    <h4 className="text-lg font-bold font-serif text-slate-900 mb-2 group-hover:text-primary transition-colors">
                      {partner.name}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {t(`products.partner_${partner.id}`)}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <div className="inline-block bg-stone-50 p-8 md:p-12 rounded-2xl border border-stone-100 max-w-3xl mx-auto">
              <p className="text-lg text-slate-700 mb-8 leading-relaxed font-medium">{t('products.cta')}</p>
              <Button asChild size="lg">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  {t('nav.cta')}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
