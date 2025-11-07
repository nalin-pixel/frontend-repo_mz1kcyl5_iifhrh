import React from 'react';
import { Sparkles, Layers, ShieldCheck, TimerReset } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Creative AI Models',
    desc: 'Multiple model backends tuned for art, photo realism, and product shots.'
  },
  {
    icon: Layers,
    title: 'Non‑destructive Editing',
    desc: 'Mask, inpaint, outpaint and revise without losing your originals.'
  },
  {
    icon: ShieldCheck,
    title: 'Private by Default',
    desc: 'Your images and prompts are encrypted and never shared.'
  },
  {
    icon: TimerReset,
    title: 'Fast Iteration',
    desc: 'Queue-free edits and generations with instant previews.'
  }
];

const FeatureGrid = () => {
  return (
    <section className="relative bg-black py-16 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl">Built for creators and teams</h2>
          <p className="mt-3 text-sm text-white/70">Everything you need to move from idea to polished visual — faster.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/15">
                  <Icon className="h-5 w-5 text-emerald-400" />
                </span>
                <h3 className="text-sm font-medium">{title}</h3>
              </div>
              <p className="mt-2 text-xs text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
