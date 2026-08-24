import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { SectionHeading } from '../components/SectionHeading';
import { ArrowRight, Clock, ShieldCheck, Globe2, Building2, TrendingUp, Users, PackageCheck, MapPin, Phone, Mail, Building, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { WHATSAPP_URL } from '../constants/contact';

export function Home() {
  const { t } = useTranslation();

  const features = [
    { icon: <Clock size={32} className="text-primary" />, text: t('home.features.f1') },
    { icon: <Building2 size={32} className="text-primary" />, text: t('home.features.f2') },
    { icon: <Globe2 size={32} className="text-primary" />, text: t('home.features.f3') },
    { icon: <ShieldCheck size={32} className="text-primary" />, text: t('home.features.f4') },
  ];

  return (
    <>
      <Helmet>
        <title>CV. Wina Jaya - {t('nav.home')}</title>
        <meta name="description" content={t('home.headline')} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-stone-50">
        <div className="container relative z-10 mx-auto px-4 md:px-6 flex justify-start md:justify-center text-left md:text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
              {t('home.headline')}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              {t('home.subheadline')}
            </p>
            <div className="flex flex-wrap justify-start md:justify-center gap-4">
              <Button asChild size="md">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  {t('home.cta_primary')}
                </a>
              </Button>
              <Button asChild size="md" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-200">
                <Link to="/layanan">{t('home.cta_secondary')}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-20 w-full bg-slate-950">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-around gap-10 text-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">5+</h3>
              <p className="text-stone-400 text-sm font-medium uppercase tracking-wider">{t('portfolio.stats.years')}</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">5+</h3>
              <p className="text-stone-400 text-sm font-medium uppercase tracking-wider">{t('portfolio.stats.clients')}</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">1,000+</h3>
              <p className="text-stone-400 text-sm font-medium uppercase tracking-wider">{t('portfolio.stats.units')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative z-20 pb-10 w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full"
        >
          <img
            src="https://images.unsplash.com/photo-1503708928676-1cb796a0891e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80"
            alt="Peralatan berat CV Wina Jaya"
            className="w-full h-[300px] md:h-[500px] lg:h-[700px] object-cover"
          />
        </motion.div>
      </section>

      {/* Keunggulan Section */}
      <section className="py-20 bg-stone-50 md:pt-32 -mt-16 md:-mt-24 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="p-8 h-full flex flex-col items-center text-center gap-4 hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-2">
                    {feature.icon}
                  </div>
                  <p className="font-medium text-slate-800 leading-relaxed">
                    {feature.text}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cuplikan Layanan Section */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading
              title={t('services.title')}
              subtitle={t('services.intro').substring(0, 100) + '...'}
            />
            <Button asChild variant="ghost" className="hidden md:inline-flex shrink-0 group">
              <Link to="/layanan" className="flex items-center gap-2">
                Lihat Semua <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: 's1', img: 'https://images.unsplash.com/photo-1683115099414-c83156978045?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Alat berat' },
              { id: 's3', img: 'https://images.unsplash.com/photo-1595521488367-9b130f86bbe3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Sparepart mesin' },
              { id: 's4', img: 'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Mekanik service' }
            ].map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link to="/layanan" className="group block h-full">
                  <Card className="overflow-hidden h-full">
                    <div className="aspect-[5/3] overflow-hidden relative">
                      <img
                        src={service.img}
                        alt={service.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold font-serif mb-2 text-slate-900 group-hover:text-primary transition-colors">
                        {t(`services.items.${service.id}_title`)}
                      </h3>
                      <p className="text-slate-600 line-clamp-2">
                        {t(`services.items.${service.id}_desc`)}
                      </p>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex justify-center md:hidden">
            <Button asChild variant="ghost" className="group">
              <Link to="/layanan" className="flex items-center gap-2">
                Lihat Semua <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>



      {/* Gallery Section */}
      <section className="py-20 bg-stone-50 overflow-hidden">
        <style>{`
          @keyframes carousel-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-carousel {
            animation: carousel-scroll 60s linear infinite;
            display: flex;
            width: max-content;
          }
          .animate-carousel:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="container mx-auto px-4 md:px-6 mb-12">
          <SectionHeading title={t('home.gallery_title')} center className="mx-auto" />
        </div>

        <div className="relative w-full overflow-hidden pb-4">
          <div className="absolute top-0 left-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-stone-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-stone-50 to-transparent z-10 pointer-events-none"></div>

          <div className="animate-carousel gap-4 px-4">
            {[
              '/galeri/galeri (1).jpg',
              '/galeri/galeri (2).jpg',
              '/galeri/galeri (3).jpg',
              '/galeri/galeri (4).jpg',
              '/galeri/galeri (5).jpg',
              '/galeri/galeri (6).jpg',
              '/galeri/galeri (7).jpg',
              '/galeri/galeri (8).jpg',
              '/galeri/galeri (9).jpg',
              '/galeri/galeri (10).jpg',
              '/galeri/galeri (11).jpg',
              '/galeri/galeri (12).jpg',
              '/galeri/galeri (13).jpg',
              '/galeri/galeri (14).jpg',
              '/galeri/galeri (15).jpg',
              '/galeri/galeri (16).jpg',
              '/galeri/galeri (17).jpg',
              '/galeri/galeri (1).jpeg',
              '/galeri/galeri (2).jpeg',
              // Duplicate the list for seamless looping
              '/galeri/galeri (1).jpg',
              '/galeri/galeri (2).jpg',
              '/galeri/galeri (3).jpg',
              '/galeri/galeri (4).jpg',
              '/galeri/galeri (5).jpg',
              '/galeri/galeri (6).jpg',
              '/galeri/galeri (7).jpg',
              '/galeri/galeri (8).jpg',
              '/galeri/galeri (9).jpg',
              '/galeri/galeri (10).jpg',
              '/galeri/galeri (11).jpg',
              '/galeri/galeri (12).jpg',
              '/galeri/galeri (13).jpg',
              '/galeri/galeri (14).jpg',
              '/galeri/galeri (15).jpg',
              '/galeri/galeri (16).jpg',
              '/galeri/galeri (17).jpg',
              '/galeri/galeri (1).jpeg',
              '/galeri/galeri (2).jpeg',
            ].map((img, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-xl group relative shrink-0 w-[260px] md:w-[520px] h-[180px] md:h-[480px]"
              >
                <img
                  src={img}
                  alt={`Kegiatan CV Wina Jaya ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white" id="kontak">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <SectionHeading title={t('contact.title')} center className="mb-12 mx-auto" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col">
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

              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="h-full">
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
