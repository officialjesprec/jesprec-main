
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import DoodleBackground from '../components/DoodleBackground';

const Home: React.FC = () => {
  const testimonials = [
    {
      name: "Chukwudi Evans",
      company: "QuickVend CEO",
      quote: "Jesprec didn't just build our app; they engineered our growth strategy. The mobile-first approach transformed our vendors' efficiency overnight."
    },
    {
      name: "Amara Okeke",
      company: "SkillBridge Africa",
      quote: "Technical precision meets artistic soul. A rare find in the African tech landscape. They delivered a platform that truly bridges the learning gap."
    },
    {
      name: "Tunde Williams",
      company: "Lagos Pulse Events",
      quote: "The cinematic quality of their drone work and multi-cam coverage is unmatched. They captured the soul of our summit with absolute precision."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="relative min-h-screen bg-primary">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <DoodleBackground variant="default" className="opacity-5" />
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1920"
            className="w-full h-full object-cover grayscale"
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-primary"></div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative z-10 text-center px-6 max-w-5xl py-20"
        >
          <motion.h2 variants={itemVariants} className="text-brand-cyan text-[10px] md:text-xs font-black tracking-[0.5em] mb-4 md:mb-6 uppercase">
            Boutique Creative Intelligence
          </motion.h2>
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-8xl font-black text-foreground mb-6 md:mb-8 leading-[1.1] md:leading-[0.9] tracking-tighter uppercase">
            Where Visionary Art <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-pink to-[#FF4500]">Meets Intelligence.</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-gray-400 text-base md:text-xl max-w-3xl mx-auto mb-10 md:mb-12 font-light leading-relaxed">
            At Jesprec Studio Concepts, the gap between a captured moment and a coded solution is smaller than you think.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <Link
              to="/portfolio"
              className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 bg-foreground text-background text-xs md:text-sm font-black rounded-full transition-all hover:bg-brand-purple hover:text-white shadow-2xl shadow-foreground/10"
            >
              EXPLORE THE VAULTS
            </Link>
            <Link
              to="/quote"
              className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 border border-foreground/20 text-foreground text-xs md:text-sm font-black rounded-full hover:bg-foreground/5 transition-all"
            >
              START CONSULTATION
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* The Jesprec Manifesto */}
      <section className="relative py-24 md:py-32 px-6 bg-muted/30 overflow-hidden">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="text-[#FF4500] font-black tracking-[0.4em] uppercase text-[10px] md:text-xs">The CEO Manifesto</span>
            <h2 className="text-2xl md:text-5xl font-black mt-4 mb-8 text-foreground uppercase tracking-tighter">Concepts to Reality.</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-6 md:space-y-8 text-left border-l-2 border-brand-purple/30 pl-6 md:pl-16"
          >
            <p className="text-foreground text-lg md:text-2xl font-light leading-relaxed">
              At Jesprec Studio Concepts, we believe that both a lens and a line of code require a sharp eye for detail, a passion for storytelling, and a commitment to excellence.
            </p>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              Founded in the heart of Nigeria, Jesprec is a multidisciplinary powerhouse designed for the modern era. We don’t just offer services; we build identities. Whether we are capturing the cinematic essence of your milestones or engineering the future of your business, our goal remains the same: <span className="text-foreground font-black">To turn your concepts into a living, breathing reality.</span>
            </p>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              We bring a "Consultant-First" approach. We don’t just take your brief; we study your goals and deliver results that don’t just look good—they perform.
            </p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="pt-8 md:pt-12"
            >
              <p className="text-foreground font-black text-2xl md:text-3xl tracking-tighter">— The CEO, Jesprec Studio Concepts</p>
              <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-brand-purple to-transparent mt-3"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Three Pillars (Vaults) */}
      <section className="relative py-24 md:py-32 px-6 container mx-auto overflow-hidden">
        <DoodleBackground variant="visual" className="opacity-5 rotate-12 -right-1/4 top-0" />
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-black text-foreground mb-4 tracking-tighter uppercase leading-tight"
          >
            One Agency. Infinite Mastery.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-500 max-w-2xl mx-auto italic font-light"
          >
            "You don't need five different companies; you just need Jesprec."
          </motion.p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {[
            {
              title: 'The Visual Vault',
              desc: 'Premium Photography, 4K Video, and Drone Coverage focused on cinematic storytelling.',
              icon: '🎥',
              color: '#BF00FF',
              link: '/portfolio'
            },
            {
              title: 'The Digital Vault',
              desc: 'Expert Web Development, UI/UX Design, and React Native apps engineered for performance.',
              icon: '💻',
              color: '#00FFFF',
              link: '/portfolio'
            },
            {
              title: 'The Art Vault',
              desc: 'Boutique Artworks and Custom Frames curated for the sophisticated collector.',
              icon: '🖼️',
              color: '#FF007F',
              link: '/gallery'
            }
          ].map((pillar, idx) => (
            <motion.div variants={itemVariants} key={idx}>
              <Link
                to={pillar.link}
                className="p-8 md:p-10 bg-muted rounded-3xl border border-white/5 hover:border-brand-purple/50 transition-all shadow-sm group flex flex-col h-full hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="text-4xl md:text-5xl mb-6 md:mb-8 group-hover:scale-110 transition-transform origin-left">{pillar.icon}</div>
                <h3 className="text-xl md:text-2xl font-black mb-4 uppercase tracking-tighter" style={{ color: pillar.color }}>{pillar.title}</h3>
                <p className="text-gray-500 text-sm md:text-base font-light leading-relaxed flex-grow">{pillar.desc}</p>
                <div className="mt-8 md:mt-10 text-[10px] font-black tracking-[0.3em] uppercase text-white/20 group-hover:text-white flex items-center gap-3 transition-colors">
                  Enter Vault <span>→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-24 md:py-32 px-6 bg-muted/50 overflow-hidden">
        <DoodleBackground variant="art" className="opacity-5 -left-1/4 bottom-0" />
        <div className="container mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <motion.span
              initial={{ opacity: 0, tracking: "0.1em" }}
              whileInView={{ opacity: 1, tracking: "0.4em" }}
              viewport={{ once: true }}
              className="text-brand-cyan font-black tracking-[0.4em] uppercase text-[10px] md:text-xs block mb-4"
            >
              Social Proof
            </motion.span>
            <motion.h2
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black text-foreground tracking-tighter uppercase"
            >
              VOICES OF TRUST
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-primary p-10 rounded-[2rem] border border-white/5 shadow-sm relative group overflow-hidden"
              >
                <div className="text-brand-purple text-6xl absolute top-6 right-8 opacity-10 group-hover:opacity-30 transition-opacity">"</div>
                <p className="text-gray-400 text-lg font-light leading-relaxed mb-10 italic">
                  {t.quote}
                </p>
                <div>
                  <h4 className="text-foreground font-black text-sm uppercase tracking-widest">{t.name}</h4>
                  <p className="text-brand-cyan text-[10px] font-bold uppercase tracking-[0.2em] mt-1">{t.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
