import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { SectionHeading } from '../components/SectionHeading';
import { Card } from '../components/Card';
import { Target, Lightbulb, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function About() {
  const { t } = useTranslation();

  const team = [
    { name: 'Widaningsih', role: 'Direktur', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { name: 'Jihan Eka', role: 'Sekretaris', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { name: 'Maruli', role: 'Operasional Lapangan', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' },
    { name: 'Salman Setiawan', role: 'IT Support', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }
  ];

  return (
    <>
      <Helmet>
        <title>{`CV. Wina Jaya - ${t('nav.about')}`}</title>
        <meta name="description" content={t('about.history')} />
      </Helmet>

      {/* Hero / Header */}
      <section className="relative pt-32 pb-20 md:py-32 overflow-hidden">
        {/* Latar Belakang Gambar */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
            alt="Latar Sejarah CV Wina Jaya"
            className="w-full h-full object-cover"
          />
          {/* Layer hitam pudar */}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-tight">
              {t('about.title')}
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-stone-200 leading-relaxed text-lg md:text-xl">
              {t('about.history')}
            </p>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl text-primary"><Lightbulb size={28} /></div>
                <h3 className="text-3xl font-serif font-bold text-slate-900">{t('about.vision_title')}</h3>
              </div>
              <p className="text-slate-700 leading-relaxed text-lg bg-stone-50 p-6 rounded-2xl border border-stone-100">
                {t('about.vision')}
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl text-primary"><Target size={28} /></div>
                <h3 className="text-3xl font-serif font-bold text-slate-900">{t('about.mission_title')}</h3>
              </div>
              <ul className="space-y-4">
                {[1, 2, 3, 4].map(num => (
                  <li key={num} className="flex gap-4 p-4 rounded-xl hover:bg-stone-50 transition-colors border border-transparent hover:border-stone-100">
                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                    <span className="text-slate-700 leading-relaxed">{t(`about.m${num}`)}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Keunggulan */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title={t('about.advantages_title')} center className="mb-12 mx-auto" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[1, 2, 3, 4].map(num => (
              <Card key={num} className="p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-bold text-primary">
                  {num}
                </div>
                <p className="text-slate-700 font-medium leading-relaxed pt-2">
                  {t(`about.a${num}`)}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tim Kami */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title={t('about.team_title')} center className="mb-12 mx-auto" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group text-center"
              >
                <div className="mb-4 overflow-hidden rounded-2xl aspect-[4/5] bg-stone-100 relative">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                </div>
                <h4 className="text-xl font-bold font-serif text-slate-900">{member.name}</h4>
                <p className="text-primary font-medium mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
