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

const baseLogos = [
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
  // outer viewport (clipped), inner track (animated)
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const firstCopyRef = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const [paused, setPaused] = useState(false);
  const [copyWidth, setCopyWidth] = useState(0);
  const [copiesCount, setCopiesCount] = useState(3); // updated after measure

  // render one logo copy
  const Copy = ({ copyIndex }: { copyIndex: number }) => (
    <div
      ref={copyIndex === 0 ? firstCopyRef : undefined}
      className="flex items-center gap-10 sm:gap-10 ml-10"
      data-copy={copyIndex}
    >
      {baseLogos.map((item, idx) => (
        <div
          key={`${rowKey}-copy${copyIndex}-${idx}`}
          className="flex-shrink-0 sm:w-[102px] h-[80px] sm:h-[100px] cursor-pointer"
          role="listitem"
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
    </div>
  );

  // measure: width of a single copy + viewport width -> decide how many copies we need
  useLayoutEffect(() => {
    const measure = () => {
      const copyEl = firstCopyRef.current;
      const vpEl = viewportRef.current;
      if (!copyEl || !vpEl) return;

      const cw = copyEl.scrollWidth;
      const vw = vpEl.clientWidth;

      if (cw === 0) return;

      setCopyWidth(cw);

      // we need enough copies to cover viewport at all times (at least 2),
      // plus a safety margin to avoid any timing gaps. Formula below ensures
      // total width >= viewport + one extra copy.
      const needed = Math.max(3, Math.ceil((vw + cw) / cw) + 1);
      setCopiesCount(needed);

      // keep x within [-cw, 0)
      const cur = x.get();
      if (cur <= -cw) x.set(cur + cw);
      if (cur > 0) x.set(cur - cw);
    };

    measure();
    const ro = new ResizeObserver(measure);
    if (viewportRef.current) ro.observe(viewportRef.current);
    if (firstCopyRef.current) ro.observe(firstCopyRef.current);
    return () => ro.disconnect();
  }, [x]);

  // pixels/sec for one copy-width over `duration` seconds
  const pxPerSec = useMemo(() => {
    if (!copyWidth || !duration) return 0;
    const base = copyWidth / duration;
    return reverse ? -base : base;
  }, [copyWidth, duration, reverse]);

  // animate + wrap by one copy width (since each copy is identical)
  useAnimationFrame((_, deltaMs) => {
    if (paused || !copyWidth || !pxPerSec) return;
    let next = x.get() - (pxPerSec * deltaMs) / 1000; // left when pxPerSec>0
    if (next <= -copyWidth) next += copyWidth;
    if (next > 0) next -= copyWidth; // when reversed
    x.set(next);
  });

  return (
    <div
      ref={viewportRef}
      className="relative overflow-hidden select-none"
      // optional: subtle edge fade (comment out if you don't want it)
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <motion.div
        ref={trackRef}
        style={{ x }}
        className="flex w-max items-center"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
        role="list"
        aria-label="Partner logos"
      >
        {Array.from({ length: copiesCount }).map((_, i) => (
          <Copy key={`${rowKey}-copy-${i}`} copyIndex={i} />
        ))}
      </motion.div>
    </div>
  );
};

export default function Partners() {
  const t = useTranslations();
  return (
    <section
      id="clients"
      className="pb-8 sm:pb-[100px] border-b border-b-gray-100 flex flex-col items-center justify-center px-4 sm:px-0 gap-8"
    >
      <h2 className="text-[24px] md:text-[32px] font-[600]">{t("partners")}</h2>

      <div className="w-full space-y-10">
        {/* Row 1 */}
        <LogoRow rowKey="row1" duration={35} />

        {/* Optional mirrored row for nicer feel */}
        {/* <LogoRow rowKey="row2" duration={32} reverse /> */}
      </div>
    </section>
  );
}
