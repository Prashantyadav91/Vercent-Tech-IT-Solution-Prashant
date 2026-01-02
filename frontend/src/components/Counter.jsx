import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const Counter = ({ value, suffix = "+" }) => {
  const ref = useRef(null);              //  element ko track karne ke liye
  const motionValue = useMotionValue(0); //  starting value 0
  const rounded = useTransform(
    motionValue,
    latest => Math.floor(latest)         //  decimal hata ke integer banaya
  );

  useEffect(() => {
    // ✅ Intersection Observer -> check karega kab element screen me aaya
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // ✅ Animation start
          animate(motionValue, value, {
            duration: 2,                 //  speed control
            ease: "easeOut",
          });
          observer.disconnect();          //  sirf ek baar chale
        }
      },
      { threshold: 0.5 }                 //  50% visible hone par trigger
    );

    if (ref.current) observer.observe(ref.current);
  }, [motionValue, value]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default Counter
