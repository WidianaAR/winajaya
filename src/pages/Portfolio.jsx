import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { SectionHeading } from '../components/SectionHeading';
import { Card } from '../components/Card';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export function Portfolio() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{`CV. Wina Jaya - ${t('nav.portfolio')}`}</title>
        <meta name="description" content={t('portfolio.intro')} />
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
              {t('portfolio.title')}
            </h2>
          </div>
          <p className="text-lg md:text-xl text-stone-200 text-center max-w-4xl mx-auto leading-relaxed">
            {t('portfolio.intro')}
          </p>
        </div>
      </section>

      {/* Proyek Unggulan */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <Card className="overflow-hidden border-0 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-2 bg-stone-100 p-8 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary font-medium text-sm rounded-full mb-4 w-max">Proyek Unggulan</div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">{t('portfolio.featured_project_title').split(': ')[1]}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {t('portfolio.featured_project_desc')}
                </p>
              </div>
              <div className="lg:col-span-3 p-8 lg:p-10 bg-white">
                <h4 className="font-bold text-slate-900 mb-6">Cakupan Pekerjaan:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <div key={num} className="flex items-start gap-3">
                      <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={18} />
                      <span className="text-sm text-slate-700 leading-relaxed">{t(`portfolio.scopes.sc${num}`)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Proyek Lainnya */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title={t('portfolio.other_projects_title')} center className="mb-12 mx-auto" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Card className="p-8 h-full hover:-translate-y-1 transition-transform">
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">{t('portfolio.op1_title')}</h3>
                <p className="text-slate-600">{t('portfolio.op1_desc')}</p>
              </Card>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <Card className="p-8 h-full hover:-translate-y-1 transition-transform">
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-3">{t('portfolio.op2_title')}</h3>
                <p className="text-slate-600">{t('portfolio.op2_desc')}</p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
