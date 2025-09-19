import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollReveal, useScrollRevealScale } from '@/hooks/useScrollReveal';

import weddingCards from '@/assets/wedding-cards.jpg';
import flexPrinting from '@/assets/flex-printing.jpg';
import businessPrinting from '@/assets/business-printing.jpg';
import diariesNotebooks from '@/assets/diaries-notebooks.jpg';

const slides = [
  {
    id: 1,
    image: weddingCards,
    title: 'Wedding Card Design & Printing',
    description: 'Elegant, custom-designed wedding invitations that capture your special day perfectly.',
    highlight: 'Premium Quality • Custom Designs • Gold Foiling Available'
  },
  {
    id: 2,
    image: flexPrinting,
    title: 'Flex Design & Printing',
    description: 'Large format printing for banners, signage, and promotional materials.',
    highlight: 'Weather Resistant • Vibrant Colors • Any Size'
  },
  {
    id: 3,
    image: businessPrinting,
    title: 'Corporate Printing Solutions',
    description: 'Professional visiting cards, brochures, and marketing materials for your business.',
    highlight: 'Quick Turnaround • Bulk Orders • Professional Finish'
  },
  {
    id: 4,
    image: diariesNotebooks,
    title: 'Custom Diaries & Notebooks',
    description: 'Personalized diaries, planners, and notebooks for corporate and personal use.',
    highlight: 'Custom Binding • Quality Paper • Personalized Covers'
  }
];

const ServiceCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);
  
  const headerRef = useScrollReveal();
  const carouselContainerRef = useScrollRevealScale({ delay: 300 });

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Touch/Mouse handlers for mobile swipe
  const handleStart = (clientX: number) => {
    startXRef.current = clientX;
    isDraggingRef.current = true;
    setIsAutoPlaying(false);
  };

  const handleEnd = (clientX: number) => {
    if (!isDraggingRef.current) return;
    
    const diff = startXRef.current - clientX;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    isDraggingRef.current = false;
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  return (
    <section className="py-20 bg-subtle-gradient">
      <div className="max-w-7xl mx-auto px-4">
        <div ref={headerRef} className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Featured <span className="text-primary">Services</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of professional printing and design services
          </p>
        </div>

        <div ref={carouselContainerRef} className="relative max-w-5xl mx-auto">
          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="relative overflow-hidden rounded-2xl shadow-strong"
            onMouseDown={(e) => handleStart(e.clientX)}
            onMouseUp={(e) => handleEnd(e.clientX)}
            onTouchStart={(e) => handleStart(e.touches[0].clientX)}
            onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="min-w-full relative">
                  <div className="relative h-[600px] md:h-[500px]">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
                    
                    <div className="absolute inset-0 flex items-center">
                      <div className="text-white p-8 md:p-12 max-w-2xl">
                        <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
                          {slide.title}
                        </h3>
                        <p className="font-body text-lg mb-6 opacity-90">
                          {slide.description}
                        </p>
                        <div className="inline-block bg-accent/90 text-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
                          {slide.highlight}
                        </div>
                        <Button
                          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                          className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm"
                        >
                          Get Quote
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            onClick={prevSlide}
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 border-white/30 text-white backdrop-blur-sm"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            onClick={nextSlide}
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 border-white/30 text-white backdrop-blur-sm"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-primary scale-125'
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCarousel;