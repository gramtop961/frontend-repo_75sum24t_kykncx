import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, LineChart, Shield, Rocket } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Autonomous AI Agents',
    desc: 'Deploy domain-aware agents that plan, execute, and learn across workflows — safely and reliably.',
    tags: ['Planning', 'Tools', 'RL']
  },
  {
    icon: LineChart,
    title: 'Predictive Intelligence',
    desc: 'Time-series forecasting, anomaly detection, and optimization built for real-world signals.',
    tags: ['Forecasting', 'Detection', 'Optimization']
  },
  {
    icon: Shield,
    title: 'AI Governance & Safety',
    desc: 'Guardrails, policy engines, and evaluation pipelines to ensure responsible AI at scale.',
    tags: ['Evaluations', 'Policy', 'Monitoring']
  },
  {
    icon: Rocket,
    title: 'AI Transformation',
    desc: 'From strategy to shipped — discovery, design, and delivery for end-to-end AI programs.',
    tags: ['Strategy', 'Design', 'Delivery']
  }
];

const studies = [
  {
    title: 'Proactive Failure Detection in Manufacturing',
    problem: 'Unexpected downtime caused by late-stage fault discovery.',
    process: 'Ingested sensor telemetry; trained hybrid anomaly models; deployed streaming monitors.',
    solution: 'Edge+cloud pipeline with explainable alerts and automated interventions.',
    outcome: '42% reduction in downtime and 18% throughput lift within 8 weeks.'
  },
  {
    title: 'Autonomous Support Copilot',
    problem: 'High response times and inconsistent resolutions for L2 tickets.',
    process: 'Fine-tuned retrieval, action tools, and policy constraints; added human-in-the-loop',
    solution: 'Task-oriented agent that triages, drafts, and executes with approval gates.',
    outcome: '62% faster resolution and 35% CSAT improvement at scale.'
  }
];

const posts = [
  {
    title: 'Designing Guardrails That Actually Work',
    excerpt: 'A practical blueprint for combining policy engines, evals, and sandboxed tools.',
    date: 'Oct 2025'
  },
  {
    title: 'From POCs to Platforms: Shipping AI That Sticks',
    excerpt: 'How to bridge research and production with modular architectures.',
    date: 'Sep 2025'
  }
];

const Tag = ({ label }) => (
  <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-violet-100/80">
    {label}
  </span>
);

const ServicesShowcase = () => {
  const [tab, setTab] = useState('services');

  return (
    <section id="work" className="relative w-full bg-[#06070D] py-24 text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="bg-gradient-to-r from-violet-200 to-cyan-200 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
            What we build, and how we deliver
          </h2>
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur">
            {[
              { key: 'services', label: 'Services' },
              { key: 'studies', label: 'Case Studies' },
              { key: 'blog', label: 'Insights' }
            ].map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  tab === t.key ? 'bg-gradient-to-r from-violet-500/30 to-cyan-500/30 text-white' : 'text-violet-100/70 hover:text-white'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <AnimatePresence mode="wait">
            {tab === 'services' && (
              <motion.div
                key="services"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
              >
                {services.map((s) => (
                  <div
                    key={s.title}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] backdrop-blur-lg transition-transform hover:-translate-y-1 hover:bg-white/[0.08]"
                  >
                    <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 p-3 ring-1 ring-white/10">
                      <s.icon className="h-6 w-6 text-cyan-200" />
                    </div>
                    <h3 className="text-lg font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm text-violet-100/80">{s.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <Tag key={t} label={t} />
                      ))}
                    </div>
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{
                      background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(124,58,237,0.15), transparent 40%)'
                    }} />
                  </div>
                ))}
              </motion.div>
            )}

            {tab === 'studies' && (
              <motion.div
                key="studies"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="grid gap-6 lg:grid-cols-2"
              >
                {studies.map((c, i) => (
                  <motion.div
                    key={c.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-6 backdrop-blur-xl"
                  >
                    <h3 className="text-xl font-semibold text-white">{c.title}</h3>
                    <div className="mt-4 grid gap-3 text-sm text-violet-100/90">
                      <div>
                        <span className="font-semibold text-violet-200">Problem → </span>{c.problem}
                      </div>
                      <div>
                        <span className="font-semibold text-violet-200">Process → </span>{c.process}
                      </div>
                      <div>
                        <span className="font-semibold text-violet-200">Solution → </span>{c.solution}
                      </div>
                      <div>
                        <span className="font-semibold text-violet-200">Outcome → </span>{c.outcome}
                      </div>
                    </div>
                    <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-gradient-to-br from-violet-500/20 to-cyan-500/20 blur-2xl" />
                  </motion.div>
                ))}
              </motion.div>
            )}

            {tab === 'blog' && (
              <motion.div
                key="blog"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="grid gap-6 sm:grid-cols-2"
              >
                {posts.map((p, i) => (
                  <motion.article
                    key={p.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:bg-white/[0.08]"
                  >
                    <div className="text-xs uppercase tracking-wide text-violet-200/80">{p.date}</div>
                    <h3 className="mt-2 text-lg font-semibold text-white">{p.title}</h3>
                    <p className="mt-2 text-sm text-violet-100/80">{p.excerpt}</p>
                    <div className="mt-4 h-1 w-full rounded-full bg-gradient-to-r from-violet-500/40 via-cyan-400/40 to-emerald-400/40">
                      <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 transition-all duration-500 group-hover:w-2/3" />
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
