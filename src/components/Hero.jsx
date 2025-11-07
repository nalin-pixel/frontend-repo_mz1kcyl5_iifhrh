import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Wand2, Image as ImageIcon, Edit3 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/pDXeCthqjmzYX5Zk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft radial vignette so text pops over Spline */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
            <Rocket className="h-3.5 w-3.5 text-emerald-400" />
            Next‑gen AI Imaging Platform
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Generate. Edit. Elevate.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
            Create stunning visuals with AI-powered generation and precision editing — all in one seamless workspace.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-medium text-black transition hover:bg-emerald-400"
            >
              <Wand2 className="h-4 w-4" />
              Try Image Generation
            </a>
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              <Edit3 className="h-4 w-4" />
              Try Smart Editing
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 items-center gap-4 text-left sm:grid-cols-4">
            <div className="rounded-lg border border-white/10 bg-black/30 p-4 backdrop-blur-sm">
              <p className="text-2xl font-semibold">10x</p>
              <p className="text-xs text-white/70">Faster creative workflow</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/30 p-4 backdrop-blur-sm">
              <p className="text-2xl font-semibold">4K</p>
              <p className="text-xs text-white/70">High‑res outputs</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/30 p-4 backdrop-blur-sm">
              <p className="text-2xl font-semibold">Secure</p>
              <p className="text-xs text-white/70">Private by design</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-black/30 p-4 backdrop-blur-sm">
              <p className="text-2xl font-semibold">Free</p>
              <p className="text-xs text-white/70">Get started today</p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-white/90">
              <Wand2 className="h-4 w-4 text-emerald-400" />
              <p className="text-sm font-medium">Text-to-Image</p>
            </div>
            <p className="mt-1 text-xs text-white/70">
              Turn prompts into high‑fidelity artwork in seconds.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-white/90">
              <ImageIcon className="h-4 w-4 text-emerald-400" />
              <p className="text-sm font-medium">Upscaling</p>
            </div>
            <p className="mt-1 text-xs text-white/70">
              Enhance resolution without losing detail.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-white/90">
              <Edit3 className="h-4 w-4 text-emerald-400" />
              <p className="text-sm font-medium">Smart Editing</p>
            </div>
            <p className="mt-1 text-xs text-white/70">
              Remove, replace, and restyle with surgical precision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
