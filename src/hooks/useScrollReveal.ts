import { useEffect, useRef } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
}

export const useScrollReveal = (options: ScrollRevealOptions = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const { threshold = 0.1, rootMargin = '0px', delay = 0 } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set initial state with a small delay to ensure DOM is ready
    const setInitialStyles = () => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
      
      if (delay > 0) {
        element.style.transitionDelay = `${delay}ms`;
      }
    };

    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(setInitialStyles);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.style.opacity = '1';
            target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    // Observe after initial styles are set
    const observeElement = () => {
      if (element) {
        observer.observe(element);
      }
    };

    requestAnimationFrame(observeElement);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, delay]);

  return elementRef;
};

export const useScrollRevealFromLeft = (options: ScrollRevealOptions = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const { threshold = 0.1, rootMargin = '0px', delay = 0 } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    element.style.opacity = '0';
    element.style.transform = 'translateX(-50px)';
    element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    
    if (delay > 0) {
      element.style.transitionDelay = `${delay}ms`;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.style.opacity = '1';
            target.style.transform = 'translateX(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, delay]);

  return elementRef;
};

export const useScrollRevealFromRight = (options: ScrollRevealOptions = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const { threshold = 0.1, rootMargin = '0px', delay = 0 } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    element.style.opacity = '0';
    element.style.transform = 'translateX(50px)';
    element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    
    if (delay > 0) {
      element.style.transitionDelay = `${delay}ms`;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.style.opacity = '1';
            target.style.transform = 'translateX(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, delay]);

  return elementRef;
};

export const useScrollRevealScale = (options: ScrollRevealOptions = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const { threshold = 0.1, rootMargin = '0px', delay = 0 } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const setInitialStyles = () => {
      element.style.opacity = '0';
      element.style.transform = 'scale(0.95)';
      element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      
      if (delay > 0) {
        element.style.transitionDelay = `${delay}ms`;
      }
    };

    requestAnimationFrame(setInitialStyles);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.style.opacity = '1';
            target.style.transform = 'scale(1)';
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    const observeElement = () => {
      if (element) {
        observer.observe(element);
      }
    };

    requestAnimationFrame(observeElement);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, delay]);

  return elementRef;
};