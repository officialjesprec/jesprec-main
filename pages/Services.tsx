
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CREATIVE_SERVICES, DIGITAL_SERVICES, ALL_SERVICES } from '../constants';
import DoodleBackground from '../components/DoodleBackground';

const Services: React.FC = () => {
  const [doodleVariant, setDoodleVariant] = useState<'visual' | 'design' | 'art' | 'default'>('default');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="pt-32 pb-24 overflow-hidden relative">
      <DoodleBackground variant={doodleVariant} className="fixed opacity-30 z-0" />

      {/* Consultant Intro */}
      <section className="container mx-auto px-6 mb-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <span className="text-brand-cyan font-black tracking-[0.3em] uppercase text-xs mb-4 block">The Methodology</span>
            <h2 className="text-4xl md:text-6xl font-black text-foreground mb-8 tracking-tighter uppercase leading-none">
              We Don't Just Execute. <br /> We Strategize.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 italic">
              "A successful project begins with the right questions, not just the right tools."
            </p>
            <p className="text-gray-500 leading-relaxed mb-10 font-medium">
              At Jesprec, we adopt a Consultant-First approach. We study your market, identify your specific pain points, and engineer solutions that solve real-world problems—whether it's a cinematic brand documentary or a strategic visual identity.
            </p>
            <Link to="/quote" className="px-10 py-4 bg-brand-purple text-white font-black rounded-full text-xs tracking-widest uppercase hover:bg-brand-pink transition-all inline-block">
              Book a Strategy Call
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 bg-muted p-10 rounded-[2.5rem] border border-white/5 shadow-sm"
          >
            <h3 className="text-foreground font-black text-sm tracking-[0.3em] uppercase mb-8">The Onboarding Checklist</h3>
            <div className="space-y-6">
              {[
                { title: 'Brand Kit', desc: 'Existing logos, colors, and font assets.', icon: '🎨' },
                { title: 'Project Assets', desc: 'Existing media, motion clips, or brand documents.', icon: '📂' },
                { title: 'Shot List / Brief', desc: 'A detailed timeline of event highlights or goals.', icon: '📋' },
                { title: 'Target Market', desc: 'A clear definition of your ideal user or viewer.', icon: '🎯' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h4 className="text-foreground font-black text-xs uppercase tracking-widest">{item.title}</h4>
                    <p className="text-gray-500 text-xs mt-1 font-bold">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6 Services Grid */}
      <section
        className="relative z-10 py-32 border-t border-white/5 bg-muted/5"
        onMouseEnter={() => setDoodleVariant('design')}
        onMouseLeave={() => setDoodleVariant('default')}
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase text-foreground leading-none">
              THE ARSENAL.
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light leading-relaxed italic">
              Six specialized domains, one unified standard of excellence. We don't just provide services; we engineer brand dominance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ALL_SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onMouseEnter={() => setDoodleVariant(idx < 3 ? 'visual' : 'design')}
                onMouseLeave={() => setDoodleVariant('default')}
                className="group p-10 bg-muted/30 border border-white/5 rounded-[3rem] hover:border-brand-purple/50 transition-all duration-500 hover:bg-muted/50 flex flex-col items-start min-h-[400px]"
              >
                <div className="text-5xl mb-8 group-hover:scale-110 transition-transform duration-500 transform-gpu">{service.icon}</div>
                <h3 className="text-2xl font-black mb-6 tracking-tight uppercase text-foreground">{service.title}</h3>
                <ul className="space-y-4 mb-10 flex-grow">
                  {service.items.map((item, i) => (
                    <li key={i} className="text-gray-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-purple/30 group-hover:bg-brand-purple transition-all" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="w-full">
                  <Link
                    to="/quote"
                    className="w-full py-5 bg-primary/50 border border-white/5 rounded-2xl flex items-center justify-center text-[10px] font-black uppercase tracking-[0.3em] hover:bg-brand-purple hover:border-brand-purple text-gray-500 hover:text-white transition-all duration-300"
                  >
                    Start Project <span>→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
