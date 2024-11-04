import { useEffect, useRef, useState } from 'react';

interface CounterProps {
  end: number;
}

const Counter = ({ end }: CounterProps) => {
  const [counter, setCounter] = useState(100);
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
              return prev + 10;
            });
          }, 0.001); 
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

  return (
    <div ref={sectionRef} className='text_main text-[40px] font-[600]'>
      {counter}+
    </div>
  );
};

export default Counter;
