import React from 'react';
import { Wand2 } from 'lucide-react';

const CTA = () => {
  return (
    <section id="get-started" className="relative bg-gradient-to-b from-black to-zinc-950 py-16 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(20,20,20,.9),rgba(10,10,10,.9))] p-8 shadow-2xl shadow-emerald-900/20">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <h3 className="text-2xl font-semibold">Start creating with AI today</h3>
              <p className="mt-2 text-sm text-white/70">No credit card required. Generate and edit images with a simple, unified flow.</p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-medium text-black transition hover:bg-emerald-400"
            >
              <Wand2 className="h-4 w-4" />
              Launch Studio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
