import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative w-full bg-[#090B14] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="bg-gradient-to-r from-violet-200 to-cyan-200 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
            Let’s build what’s next
          </h2>
          <p className="mt-3 text-violet-100/80">
            Tell us about your challenges and ambitions. We’ll respond with pragmatic next steps.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <motion.form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm text-violet-100/80">Name</label>
                <input required className="mt-1 w-full rounded-lg border border-white/10 bg-[#0B0E18] px-3 py-2 text-sm text-white outline-none ring-0 placeholder:text-violet-200/40 focus:border-violet-400/40" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="text-sm text-violet-100/80">Email</label>
                <input type="email" required className="mt-1 w-full rounded-lg border border-white/10 bg-[#0B0E18] px-3 py-2 text-sm text-white outline-none ring-0 placeholder:text-violet-200/40 focus:border-violet-400/40" placeholder="jane@company.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm text-violet-100/80">Message</label>
              <textarea required rows={5} className="mt-1 w-full rounded-lg border border-white/10 bg-[#0B0E18] px-3 py-2 text-sm text-white outline-none placeholder:text-violet-200/40 focus:border-violet-400/40" placeholder="How can we help?" />
            </div>
            <button type="submit" className="mt-5 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-900/30 transition-transform hover:scale-[1.02]">
              <Mail className="mr-2 h-4 w-4" /> Send message
            </button>
            {sent && (
              <p className="mt-3 text-sm text-emerald-300">Thanks! We’ll be in touch shortly.</p>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-6 backdrop-blur-xl"
          >
            <h3 className="text-lg font-semibold">Connect</h3>
            <p className="mt-2 text-sm text-violet-100/80">
              Prefer a direct line? Reach out on your platform of choice.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="mailto:hello@quansynd.com" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10">
                <Mail className="h-4 w-4" /> Email
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10">
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>

            <div className="mt-8 rounded-xl border border-white/10 bg-[#0B0E18] p-4 text-sm text-violet-100/70">
              As part of the SCUBE Group, QuanSynd leverages a global innovation ecosystem to accelerate value delivery across industries.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
