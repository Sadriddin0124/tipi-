import { useEffect, useRef, useState } from 'react';
import { formatWithSpaces } from '../lib/utils';

interface CounterProps {
  end: number;
  start: number;
  increase: number;
  plus: boolean;
}

const Counter = ({ end, start, increase, plus }: CounterProps) => {
  const [counter, setCounter] = useState(start);
  const sectionRef = useRef<HTMLDivElement | null>(null); // Div element uchun tip
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // Interval uchun tip

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          intervalRef.current = setInterval(() => {
            setCounter((prev) => {
              if (prev >= end) {
                if (intervalRef.current) clearInterval(intervalRef.current);
                return end;
              }
              return prev + increase;
            });
          }, 0.00000000001); 
        } else {
          if (intervalRef.current) clearInterval(intervalRef.current);
        }
      },
      { threshold: 0.5 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [end]);
  const formatter = formatWithSpaces(counter)
  return (
    <div ref={sectionRef} className='text_main text-[40px] font-[600]'>
      {formatter}{plus ? "+" : ""}
    </div>
  );
};

export default Counter;
