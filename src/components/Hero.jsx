import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-24">
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(65%_65%_at_50%_0%,black,transparent)]">
        <div className="absolute -top-1/3 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-rose-300/40 via-fuchsia-300/40 to-amber-200/40 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            The purr-fect SaaS for modern teams
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-6 text-lg leading-8 text-slate-600"
          >
            Ship features at the speed of nine lives. Automate workflows, analyze data, and delight users with a
            platform that always lands on its feet.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-slate-800"
            >
              Start meow
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
            >
              Book a demo
            </a>
          </motion.div>
          <div className="mt-10 flex items-center gap-3 text-sm text-slate-500">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-amber-700">🐾</span>
            Trusted by 2,000+ cat-loving teams
          </div>
        </div>

        <div className="relative aspect-[4/3] w-full rounded-2xl border bg-white/60 backdrop-blur">
          <Spline
            scene="https://prod.spline.design/ICsx0Z1Qy7F9zJgY/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </section>
  );
}
