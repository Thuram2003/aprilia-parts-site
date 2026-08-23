"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  label: string;
  delay?: number;
}

export default function AnimatedCounter({ 
  end, 
  duration = 2000, 
  suffix = "", 
  label,
  delay = 0 
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = Date.now() + delay;
    const endTime = startTime + duration;

    const animate = () => {
      const now = Date.now();
      
      if (now < startTime) {
        requestAnimationFrame(animate);
        return;
      }

      if (now >= endTime) {
        setCount(end);
        return;
      }

      const progress = (now - startTime) / duration;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);
      
      setCount(currentCount);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration, delay]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-white font-bold text-2xl md:text-3xl lg:text-4xl font-display">
        {count}{suffix}
      </div>
      <div className="text-zinc-500 text-xs md:text-sm mt-1">{label}</div>
    </div>
  );
}
