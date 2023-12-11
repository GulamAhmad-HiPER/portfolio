/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import "./Counter.css";

const CounterAnimation = ({ start, end, duration }) => {
  const [count, setCount] = useState(start);
  const counterRef = useRef(null);

  useEffect(() => {
    let startTime;
    let animationFrameId;

    const animateCounter = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      setCount(Math.floor(start + percentage * (end - start)));

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animateCounter);
      }
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust as needed; 0.5 means when 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animationFrameId = requestAnimationFrame(animateCounter);
          observer.unobserve(counterRef.current);
        }
      });
    }, options);

    observer.observe(counterRef.current);

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [start, end, duration]);

  return (
    <div style={{display:"flex",flexDirection:"column"}}>
      <label htmlFor="file">{count}%</label>
      <progress id="file" ref={counterRef} value={count} max="100" style={{margin:"0"}}/>
    </div>
  );
};

export default CounterAnimation;
