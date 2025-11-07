import { useState, useEffect } from 'react';
import { Rocket, Star, Mail } from 'lucide-react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={classNames(
      'fixed inset-x-0 top-0 z-50 transition-all',
      scrolled ? 'backdrop-blur-md bg-white/70 shadow-sm' : 'bg-transparent'
    )}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold text-slate-900">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-rose-400 to-amber-300 text-white shadow">
              <Rocket size={18} />
            </span>
            <span>CatCloud</span>
            <span className="sr-only">Back to top</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-slate-600 hover:text-slate-900">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white shadow hover:bg-slate-800"
            >
              <Mail size={16} /> Get in touch
            </a>
          </div>

          <button
            aria-label="Toggle navigation"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 rounded-lg border bg-white p-4 shadow">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="rounded-md px-2 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white">
                <Star size={16} /> Start now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
