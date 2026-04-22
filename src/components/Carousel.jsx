import { useState, useEffect, useCallback, useRef } from 'react';

export default function Carousel({ children, interval = 5000, visibleCount = 3 }) {
  const [index, setIndex] = useState(0);
  const [currentVisibleCount, setCurrentVisibleCount] = useState(visibleCount);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const items = Array.isArray(children) ? children : [children];
  const total = items.length;
  const timeoutRef = useRef(null);

  const loopedItems = [...items, ...items.slice(0, currentVisibleCount)];

  const updateLayout = useCallback(() => {
    const isMobile = window.innerWidth <= 992;
    setCurrentVisibleCount(isMobile ? 1 : visibleCount);
  }, [visibleCount]);

  useEffect(() => {
    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, [updateLayout]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  useEffect(() => {
    if (index === total) {
      timeoutRef.current = setTimeout(() => {
        setTransitionEnabled(false);
        setIndex(0);
      }, 800);
    } else {
      setTransitionEnabled(true);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index, total]);

  const slidePercent = 100 / currentVisibleCount;

  return (
    <div className="max-w-[1200px] mx-auto overflow-hidden relative py-2 px-2">
      <div
        className="flex"
        style={{
          transform: `translateX(-${index * slidePercent}%)`,
          transition: transitionEnabled
            ? 'transform 0.8s cubic-bezier(0.45, 0, 0.55, 1)'
            : 'none',
        }}
      >
        {loopedItems.map((item, i) => (
          <div
            key={i}
            className="shrink-0 px-2 box-border"
            style={{ width: `${slidePercent}%` }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
