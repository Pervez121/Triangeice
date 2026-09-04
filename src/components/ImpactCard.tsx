"use client";

import { motion } from "framer-motion";

interface ImpactCardProps {
  title: string;
  description: string;
  metric: string;
}

export default function ImpactCard({ title, description, metric }: ImpactCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
    >
      <p className="text-4xl font-semibold text-sky-700">{metric}</p>
      <h3 className="mt-4 text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
    </motion.div>
  );
}
