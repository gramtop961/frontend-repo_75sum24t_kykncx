import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Shield, Globe } from 'lucide-react';

const values = [
  {
    icon: Cpu,
    title: 'Purpose-Built Intelligence',
    desc: 'We engineer adaptive AI systems that align tightly with business outcomes and scale with your vision.'
  },
  {
    icon: Shield,
    title: 'Ethics + Trust by Design',
    desc: 'Privacy-first, transparent, and secure — our frameworks prioritize responsible innovation.'
  },
  {
    icon: Globe,
    title: 'Connected to SCUBE',
    desc: 'Proudly part of the SCUBE Group — amplifying impact through a global network of excellence.'
  }
];

const About = () => {
  return (
    <section id="about" className="relative w-full bg-[#090B14] py-24 text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-violet-600/20 to-transparent blur-2xl" />
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="bg-gradient-to-r from-violet-200 to-cyan-200 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
            Mission. Momentum. Meaning.
          </h2>
          <p className="mt-4 text-violet-100/80">
            QuanSynd exists to make advanced intelligence accessible, usable, and transformative. From strategic R&D to production-grade deployment, we turn complexity into clarity — and potential into progress.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, idx) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg transition hover:bg-white/[0.08]"
            >
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 p-3 ring-1 ring-white/10">
                <v.icon className="h-6 w-6 text-violet-300" />
              </div>
              <h3 className="text-lg font-semibold text-white">{v.title}</h3>
              <p className="mt-2 text-sm text-violet-100/80">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
