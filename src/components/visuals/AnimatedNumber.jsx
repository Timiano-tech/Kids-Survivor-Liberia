import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

const AnimatedNumber = ({ end, duration = 2, prefix = '', suffix = '', unit = '' }) => {
  const target = Number(end) || 0;
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (!isInView || started) return;

    // No `started` guard on the rAF loop itself: React StrictMode runs this
    // effect twice and a cancelled frame must still be able to finish, or the
    // counter is stranded at 0.
    let frame;
    let startTime;

    const tick = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.round(eased * target));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setStarted(true);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [isInView, started, target, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {unit}
      {suffix}
    </span>
  );
};

export default AnimatedNumber;
