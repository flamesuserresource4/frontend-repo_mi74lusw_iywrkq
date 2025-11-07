import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());

    try {
      setStatus('Sending...');
      // No backend hook yet; just simulate success for the demo UI
      await new Promise((r) => setTimeout(r, 800));
      setStatus('Thanks! We will get back to you soon.');
      e.currentTarget.reset();
    } catch (err) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Let’s chat</h2>
            <p className="mt-4 text-slate-600">
              Tell us about your team’s goals and we’ll show how CatCloud can help.
            </p>
            <div className="mt-8 rounded-2xl bg-gradient-to-tr from-rose-100 via-fuchsia-100 to-amber-100 p-6">
              <p className="text-sm text-slate-700">
                "Ever since we adopted CatCloud, our deployments are as smooth as a cat’s purr." — Happy customer
              </p>
            </div>
          </div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border bg-white/70 p-6 shadow-sm backdrop-blur"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700">First name</label>
                <input name="firstName" required className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-0 placeholder:text-slate-400 focus:border-slate-400" placeholder="Luna" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Last name</label>
                <input name="lastName" required className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-0 placeholder:text-slate-400 focus:border-slate-400" placeholder="Whiskers" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-slate-700">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-0 placeholder:text-slate-400 focus:border-slate-400" placeholder="you@company.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-slate-700">Message</label>
                <textarea name="message" rows="4" className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-0 placeholder:text-slate-400 focus:border-slate-400" placeholder="How can we help?" />
              </div>
            </div>

            <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">
              <Send size={16} /> Send message
            </button>
            {status && <p className="mt-3 text-sm text-slate-600">{status}</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
