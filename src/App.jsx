import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import ServicesShowcase from './components/ServicesShowcase';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full scroll-smooth bg-[#06070D] text-white antialiased">
      {/* Top navigation */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-b-2xl border border-white/10 bg-black/30 px-6 py-3 backdrop-blur-xl">
          <a href="#home" className="bg-gradient-to-r from-violet-200 to-cyan-200 bg-clip-text text-base font-bold text-transparent">QuanSynd</a>
          <nav className="hidden items-center gap-6 text-sm text-violet-100/80 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-violet-900/30">
            Get in touch
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <ServicesShowcase />
        <Contact />
      </main>

      <footer className="relative border-t border-white/10 bg-[#06070D] py-8 text-center text-sm text-violet-100/60">
        <div className="mx-auto max-w-7xl px-6">
          © {new Date().getFullYear()} QuanSynd • Crafted for the future
        </div>
      </footer>
    </div>
  );
}

export default App;
