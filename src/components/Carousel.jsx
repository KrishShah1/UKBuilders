import { useState, useEffect, useCallback, useRef } from 'react';

export default function Carousel({ children, interval = 5000, visibleCount = 3 }) {
  const items = Array.isArray(children) ? children : [children];
  const total = items.length;

  const [offset, setOffset] = useState(0);
  const [currentVisibleCount, setCurrentVisibleCount] = useState(visibleCount);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef(null);
  const isJumpingRef = useRef(false);

  const cloneCount = currentVisibleCount;
  // Prepend last N items and append first N items for bidirectional seamless loop
  const loopedItems = [...items.slice(-cloneCount), ...items, ...items.slice(0, cloneCount)];
  // translateIndex accounts for the prepended clones
  const translateIndex = offset + cloneCount;
  const slidePercent = 100 / currentVisibleCount;
  const activeIndex = ((offset % total) + total) % total;

  const updateLayout = useCallback(() => {
    const isMobile = window.innerWidth <= 992;
    setCurrentVisibleCount(isMobile ? 1 : visibleCount);
  }, [visibleCount]);

  useEffect(() => {
    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, [updateLayout]);

  const advance = useCallback((delta) => {
    if (isJumpingRef.current) return;
    setTransitionEnabled(true);
    setOffset((prev) => prev + delta);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => advance(1), interval);
    return () => clearInterval(timer);
  }, [interval, advance, isPaused]);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    const outOfBounds = offset >= total || offset < 0;
    if (!outOfBounds) {
      isJumpingRef.current = false;
      return;
    }

    // Wait for the slide animation to finish, then jump to the mirrored real position
    isJumpingRef.current = true;
    timeoutRef.current = setTimeout(() => {
      setTransitionEnabled(false);
      setOffset((prev) => {
        if (prev >= total) return prev - total;
        return prev + total;
      });
    }, 820);

    return () => clearTimeout(timeoutRef.current);
  }, [offset, total]);

  // Re-enable transition one frame after a no-transition jump renders
  useEffect(() => {
    if (!transitionEnabled) {
      const id = requestAnimationFrame(() =>
        requestAnimationFrame(() => setTransitionEnabled(true))
      );
      return () => cancelAnimationFrame(id);
    }
  }, [transitionEnabled]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowLeft') advance(-1);
    else if (e.key === 'ArrowRight') advance(1);
  }, [advance]);

  return (
    <div
      className="max-w-[1200px] mx-auto relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Carousel"
    >
      {/* Prev button */}
      <button
        onClick={() => advance(-1)}
        aria-label="Previous slide"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-navy/80 border border-gold text-gold text-2xl leading-none flex items-center justify-center hover:bg-gold hover:text-navy transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
      >
        ‹
      </button>

      {/* Next button */}
      <button
        onClick={() => advance(1)}
        aria-label="Next slide"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-navy/80 border border-gold text-gold text-2xl leading-none flex items-center justify-center hover:bg-gold hover:text-navy transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
      >
        ›
      </button>

      {/* Slides */}
      <div className="overflow-hidden px-14 py-2">
        <div
          className="flex"
          style={{
            transform: `translateX(-${translateIndex * slidePercent}%)`,
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

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="Slide indicators">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (!isJumpingRef.current) {
                setTransitionEnabled(true);
                setOffset(i);
              }
            }}
            role="tab"
            aria-selected={activeIndex === i}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2 h-2 rounded-full border border-gold transition-all duration-300 ${
              activeIndex === i ? 'bg-gold scale-125' : 'bg-transparent hover:bg-gold/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
