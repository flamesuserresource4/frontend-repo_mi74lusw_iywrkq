import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Kitten',
    price: '$9',
    period: 'mo',
    features: ['1 project', 'Basic analytics', 'Email support'],
    highlight: false,
  },
  {
    name: 'Cat',
    price: '$29',
    period: 'mo',
    features: ['Unlimited projects', 'Advanced analytics', 'Priority support'],
    highlight: true,
  },
  {
    name: 'Tiger',
    price: '$99',
    period: 'mo',
    features: ['SAML SSO', 'Custom SLAs', 'Dedicated success'],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-4 text-slate-600">Choose the plan that fits your team. Cancel anytime.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className={`relative rounded-2xl border bg-white/70 p-6 shadow-sm backdrop-blur ${t.highlight ? 'ring-2 ring-rose-300' : ''}`}
            >
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{t.name}</h3>
                  <div className="mt-2 flex items-end gap-1">
                    <span className="text-4xl font-extrabold text-slate-900">{t.price}</span>
                    <span className="text-slate-500">/{t.period}</span>
                  </div>
                </div>
                {t.highlight && (
                  <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-medium text-rose-700">Most popular</span>
                )}
              </div>

              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <Check size={14} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 block w-full rounded-full px-4 py-2 text-center text-sm font-semibold shadow ${t.highlight ? 'bg-slate-900 text-white hover:bg-slate-800' : 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-50'}`}
              >
                Choose {t.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
