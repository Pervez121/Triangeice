"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./Button";

interface HeroProps {
  title: string;
  subtitle: string;
  primaryHref?: string;
  secondaryHref?: string;
}

export default function Hero({
  title,
  subtitle,
  primaryHref = "/volunteer",
  secondaryHref = "/donate",
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80"
          alt="Glacier and mountain landscape"
          fill
          priority
          className="object-cover opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/85 to-sky-950/70" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(125,211,252,0.35),_transparent_35%)]" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-6 py-24 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-sky-200">
            Triangeice Institute
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={primaryHref} variant="primary" className="bg-white text-sky-900 hover:bg-sky-100">
              Join Our Mission
            </Button>
            <Button href={secondaryHref} variant="secondary" className="border-white/40 bg-white/10 text-white hover:bg-white/20">
              Support Us
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-sm rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-200">
            Community-led climate action
          </p>
          <p className="mt-3 text-lg text-slate-100">
            We unite volunteers, donors, researchers, and local leaders to protect fragile mountain ecosystems.
          </p>
          <div className="mt-6 h-2 rounded-full bg-white/20">
            <div className="h-2 w-3/4 rounded-full bg-emerald-400" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
