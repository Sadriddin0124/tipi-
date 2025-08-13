"use client";

import Image from "next/image";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { useTranslations } from "next-intl";

import Client1 from "@/assets/client1.jpg";
import Client2 from "@/assets/client2.jpg";
import Client3 from "@/assets/client3.jpg";
import Client4 from "@/assets/client4.png";
import Client5 from "@/assets/client5.png";
import Client6 from "@/assets/client6.jpg";
import Client7 from "@/assets/client7.jpg";
import Client8 from "@/assets/client8.jpg";
import Client9 from "@/assets/client9.jpg";
import Client10 from "@/assets/client10.jpg";

// Logos
const logos = [
  { logo: Client1, link: "https://ege.edu.tr/eng-0/homepage.html" },
  { logo: Client2, link: "https://ayu.edu.kz/kz/" },
  { logo: Client3, link: "https://selcuk.edu.tr/" },
  { logo: Client4, link: "https://auezov.edu.kz/rus/" },
  { logo: Client5, link: "https://adu.edu.az/" },
  { logo: Client6, link: "https://www.khazar.org/" },
  { logo: Client7, link: "https://www.bandirma.edu.tr/" },
  { logo: Client8, link: "https://sbe.sakarya.edu.tr/" },
  { logo: Client9, link: "https://edu.uz/" },
  { logo: Client10, link: "https://uztitu.uz/uz" },
  { logo: Client1, link: "https://ege.edu.tr/eng-0/homepage.html" },
  { logo: Client2, link: "https://ayu.edu.kz/kz/" },
  { logo: Client3, link: "https://selcuk.edu.tr/" },
  { logo: Client4, link: "https://auezov.edu.kz/rus/" },
  { logo: Client5, link: "https://adu.edu.az/" },
  { logo: Client6, link: "https://www.khazar.org/" },
  { logo: Client7, link: "https://www.bandirma.edu.tr/" },
  { logo: Client8, link: "https://sbe.sakarya.edu.tr/" },
  { logo: Client9, link: "https://edu.uz/" },
  { logo: Client10, link: "https://uztitu.uz/uz" },
  { logo: Client1, link: "https://ege.edu.tr/eng-0/homepage.html" },
  { logo: Client2, link: "https://ayu.edu.kz/kz/" },
  { logo: Client3, link: "https://selcuk.edu.tr/" },
  { logo: Client4, link: "https://auezov.edu.kz/rus/" },
  { logo: Client5, link: "https://adu.edu.az/" },
  { logo: Client6, link: "https://www.khazar.org/" },
  { logo: Client7, link: "https://www.bandirma.edu.tr/" },
  { logo: Client8, link: "https://sbe.sakarya.edu.tr/" },
  { logo: Client9, link: "https://edu.uz/" },
  { logo: Client10, link: "https://uztitu.uz/uz" },
];

type RowProps = {
  reverse?: boolean;
  /** seconds to travel one full set width */
  duration?: number;
  rowKey?: string;
};

const LogoRow = ({ reverse = false, duration = 25, rowKey = "" }: RowProps) => {
  /**
   * We render 2 copies (A+B). We keep x in the range [-W, 0),
   * where W is the width of one copy (A). When we hit -W,
   * we add W (wrap) → visually seamless infinite loop.
   */
  const trackRef = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const [paused, setPaused] = useState(false);
  const [setWidth, setSetWidth] = useState(0); // width of a single copy

  // Measure once layout is ready; update on resize
  useLayoutEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const measure = () => {
      // We rendered [logos, logos]; total scrollWidth = 2 * setWidth
      const half = el.scrollWidth / 2;
      setSetWidth(half);
      // Keep x in [-half, 0)
      const cur = x.get();
      if (cur <= -half) x.set(cur + half);
      if (cur > 0) x.set(cur - half);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [x]);

  // pixels/second based on measured width & duration
  const pxPerSec = useMemo(() => {
    if (!setWidth || !duration) return 0;
    const base = setWidth / duration;
    // default: move left; reverse: move right
    return reverse ? -base : base;
  }, [setWidth, duration, reverse]);

  // Drive the marquee and wrap x in [-setWidth, 0)
  useAnimationFrame((_, deltaMs) => {
    if (paused || !setWidth || !pxPerSec) return;
    let next = x.get() - (pxPerSec * deltaMs) / 1000; // move left when pxPerSec>0
    // wrap (no visible jump because content is duplicated)
    if (next <= -setWidth) next += setWidth;
    if (next > 0) next -= setWidth; // when reverse scrolls right
    x.set(next);
  });

  return (
    <motion.div
      ref={trackRef}
      style={{ x }}
      className="flex gap-10 sm:gap-20 w-max"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
      aria-label="Partner logos"
      role="list"
    >
      {[...logos, ...logos].map((item, idx) => (
        <div
          key={`${rowKey}-${idx}`}
          role="listitem"
          className="flex-shrink-0 sm:w-[102px] h-[80px] sm:h-[100px] cursor-pointer"
          onClick={() => item.link && window.open(item.link, "_blank")}
          title={item.link}
        >
          <Image
            src={item.logo}
            alt={`Partner ${idx + 1}`}
            width={600}
            height={300}
            className="object-contain w-full h-full transition-transform duration-300 hover:scale-[1.03]"
            priority={idx < 6}
          />
        </div>
      ))}
    </motion.div>
  );
};

export default function Partners() {
  const t = useTranslations();
  return (
    <section
      id="clients"
      className="pb-8 sm:pb-[100px] border-b border-b-gray-100 flex flex-col items-center justify-center px-4 sm:px-0 gap-8 overflow-hidden"
    >
      <h2 className="text-[24px] md:text-[32px] font-[600]">{t("partners")}</h2>

      <div className="overflow-hidden bg-white space-y-10">
        {/* Single infinite row */}
        <LogoRow rowKey="row1" duration={35} />

        {/* Optional second row, mirrored direction */}
        {/* <LogoRow rowKey="row2" duration={32} reverse /> */}
      </div>
    </section>
  );
}
