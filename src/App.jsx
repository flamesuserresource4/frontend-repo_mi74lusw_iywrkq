import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(60rem_60rem_at_50%_-10%,#fce7f3_0%,transparent_60%),radial-gradient(50rem_50rem_at_100%_10%,#fffbeb_0%,transparent_50%),radial-gradient(40rem_40rem_at_0%_20%,#fae8ff_0%,transparent_40%)]">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Contact />
      </main>
      <footer className="border-t bg-white/70">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row">
            <p className="text-sm text-slate-600">© {new Date().getFullYear()} CatCloud. All rights reserved.</p>
            <div className="text-sm text-slate-500">Made with love and catnip 🐱</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
