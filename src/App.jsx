import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-black font-inter">
      <Navbar />
      <main>
        <Hero />
        <div id="features">
          <FeatureGrid />
        </div>
        <CTA />
      </main>
      <footer className="border-t border-white/10 bg-black py-10 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-white/60">© {new Date().getFullYear()} NeuroCanvas. All rights reserved.</p>
            <div className="flex items-center gap-4 text-xs text-white/60">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
