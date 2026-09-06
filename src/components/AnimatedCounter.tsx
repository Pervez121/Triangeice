"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: number;
  label: string;
  suffix?: string;
}

export default function AnimatedCounter({ value, label, suffix = "" }: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1400;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(start + (value - start) * eased));
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [isInView, value]);

  return (
    <div
      ref={ref}
      className="rounded-md border border-slate-200 bg-white p-6"
    >
      <p className="text-4xl font-semibold text-sky-700">{displayValue}{suffix}</p>
      <p className="mt-3 text-sm font-medium uppercase tracking-[0.25em] text-slate-500">{label}</p>
    </div>
  );
}
