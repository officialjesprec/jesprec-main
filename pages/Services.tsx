
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CREATIVE_SERVICES, DIGITAL_SERVICES } from '../constants';
import DoodleBackground from '../components/DoodleBackground';

const Services: React.FC = () => {
  const [doodleVariant, setDoodleVariant] = useState<'visual' | 'digital' | 'art' | 'default'>('default');

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
      <DoodleBackground variant={doodleVariant} className="fixed opacity-[0.03] z-0" />

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
              At Jesprec, we adopt a Consultant-First approach. We study your market, identify your specific pain points, and engineer solutions that solve real-world problems—whether it's a mobile app for vendors or a cinematic brand documentary.
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
                { title: 'Technical Access', desc: 'Domain, hosting, and repository credentials.', icon: '🔑' },
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

      {/* Creative Wing */}
      <section
        className="container mx-auto px-6 mb-32 relative z-10"
        onMouseEnter={() => setDoodleVariant('visual')}
        onMouseLeave={() => setDoodleVariant('default')}
      >
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-pink font-black tracking-widest uppercase text-xs"
            >
              Innovation Wing A
            </motion.span>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="text-4xl md:text-5xl font-black mt-4 mb-8 uppercase tracking-tighter text-foreground"
            >
              CREATIVE WING
            </motion.h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-12 font-light">
              Capturing cinematic moments with absolute precision. We don't just take photos; we manufacture timeless visual narratives for elite brands.
            </p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid sm:grid-cols-2 gap-8"
            >
              {CREATIVE_SERVICES.map((s, idx) => (
                <motion.div
                  key={s.id}
                  variants={itemVariants}
                  className="p-8 rounded-3xl bg-muted border-l-4 border-brand-purple hover:border-brand-pink transition-all group shadow-sm bg-muted/50 backdrop-blur-sm"
                >
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform origin-left">{s.icon}</div>
                  <h3 className="font-black text-xl mb-4 text-foreground uppercase tracking-tighter">{s.title}</h3>
                  <ul className="space-y-3">
                    {s.items.map(item => (
                      <li key={item} className="text-gray-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-brand-purple rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute -inset-4 bg-brand-purple/5 blur-3xl rounded-full"></div>
            <img
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800"
              alt="Creative Wing"
              className="relative rounded-[2rem] shadow-2xl border border-white/5 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </div>
      </section>

      {/* Digital Wing */}
      <section
        className="relative z-10 py-32 border-y border-white/5 bg-muted/10 backdrop-blur-sm"
        onMouseEnter={() => setDoodleVariant('digital')}
        onMouseLeave={() => setDoodleVariant('default')}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="lg:w-1/2 text-right">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-brand-cyan font-black tracking-widest uppercase text-xs"
              >
                Innovation Wing B
              </motion.span>
              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                className="text-4xl md:text-5xl font-black mt-4 mb-8 uppercase tracking-tighter text-foreground"
              >
                DIGITAL WING
              </motion.h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-12 font-light">
                Engineering experiences that work. We combine user-centric design with robust development to build platforms that solve business problems and scale exponentially.
              </p>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="grid sm:grid-cols-2 gap-8"
              >
                {DIGITAL_SERVICES.map((s, idx) => (
                  <motion.div
                    key={s.id}
                    variants={itemVariants}
                    className="p-8 rounded-3xl bg-primary border-r-4 border-brand-cyan hover:border-brand-purple transition-all group shadow-sm"
                  >
                    <div className="text-4xl mb-6 group-hover:scale-110 transition-transform origin-right">{s.icon}</div>
                    <h3 className="font-black text-xl mb-4 text-foreground uppercase tracking-tighter">{s.title}</h3>
                    <ul className="space-y-3">
                      {s.items.map(item => (
                        <li key={item} className="text-gray-500 text-[10px] font-black uppercase tracking-widest flex flex-row-reverse items-center gap-3">
                          <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:w-1/2 relative"
            >
              <div className="absolute -inset-4 bg-brand-cyan/5 blur-3xl rounded-full"></div>
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
                alt="Digital Wing"
                className="relative rounded-[2rem] shadow-2xl border border-white/5 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
