import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, Zap } from 'lucide-react';

const features = [
  {
    title: 'Lightning-fast',
    description:
      'Optimized infrastructure with caching that pounces on performance bottlenecks.',
    icon: Zap,
  },
  {
    title: 'Secure by design',
    description:
      'Built-in best practices, SSO, and encrypted storage to keep your data safe in the cat condo.',
    icon: ShieldCheck,
  },
  {
    title: 'Delightful UX',
    description:
      'Micro-interactions and animations that feel as smooth as a kitty stretch.',
    icon: Sparkles,
  },
];

export default function Features() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">What makes us pawsome</h2>
          <p className="mt-4 text-slate-600">
            Everything you need to launch quickly and scale with confidence, wrapped in a playful experience.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group rounded-xl border bg-white/70 p-6 shadow-sm backdrop-blur hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-fuchsia-200 to-amber-200">
                  <f.icon className="text-slate-800" size={20} />
                </span>
                <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
