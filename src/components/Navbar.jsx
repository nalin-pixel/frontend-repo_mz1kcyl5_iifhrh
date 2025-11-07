import React from 'react';
import { Rocket, Github } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-black/40 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        <a href="#" className="flex items-center gap-2 text-white">
          <Rocket className="h-5 w-5 text-emerald-400" />
          <span className="font-semibold">NeuroCanvas</span>
        </a>
        <div className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#get-started" className="hover:text-white">Get started</a>
          <a href="#" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 font-medium hover:bg-white/10">
            <Github className="h-4 w-4" />
            Star
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
