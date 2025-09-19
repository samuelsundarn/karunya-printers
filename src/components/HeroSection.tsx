import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useScrollReveal, useScrollRevealScale } from '@/hooks/useScrollReveal';

const HeroSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [currentWord, setCurrentWord] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const location = useLocation();

  const words = ['Design', 'Print', 'Deliver'];

  // Scroll reveal refs
  const titleRef = useScrollReveal({ delay: 200 });
  const subtitleRef = useScrollReveal({ delay: 400 });
  const typingRef = useScrollReveal({ delay: 600 });
  const ctaRef = useScrollRevealScale({ delay: 800 });

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 150;
    const word = words[wordIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < word.length) {
        setCurrentWord(word.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentWord(word.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === word.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((wordIndex + 1) % words.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex, words]);

  const handleRequestCallback = () => {
    setShowForm(true);
  };

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      // If on home page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Brand Text - Home Button */}
          <Link 
            to="/" 
            onClick={handleLogoClick}
            className="font-handwriting text-2xl text-primary hover:text-primary/80 transition-colors cursor-pointer"
          >
            Karunya Offset Printers
          </Link>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="font-body text-foreground hover:text-primary transition-colors">Services</a>
            <Link to="/customers" className="font-body text-foreground hover:text-primary transition-colors">Customers</Link>
            <Button 
              variant="outline" 
              onClick={handleRequestCallback}
              className="font-body"
            >
              Request Callback
            </Button>
            <button 
              onClick={() => {
                const contactElement = document.getElementById('contact');
                if (contactElement) {
                  contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="font-body text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
            <Link to="/about" className="font-body text-foreground hover:text-primary transition-colors">About</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={showMobileMenu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
          
          {/* Mobile Menu */}
          {showMobileMenu && (
            <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border md:hidden">
              <nav className="flex flex-col gap-4 p-6">
                <a 
                  href="#services" 
                  className="font-body text-foreground hover:text-primary transition-colors"
                  onClick={() => setShowMobileMenu(false)}
                >
                  Services
                </a>
                <Link 
                  to="/customers" 
                  className="font-body text-foreground hover:text-primary transition-colors"
                  onClick={() => setShowMobileMenu(false)}
                >
                  Customers
                </Link>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    handleRequestCallback();
                    setShowMobileMenu(false);
                  }}
                  className="font-body w-fit"
                >
                  Request Callback
                </Button>
                <button 
                  onClick={() => {
                    const contactElement = document.getElementById('contact');
                    if (contactElement) {
                      contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                    setShowMobileMenu(false);
                  }}
                  className="font-body text-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
                <Link 
                  to="/about" 
                  className="font-body text-foreground hover:text-primary transition-colors"
                  onClick={() => setShowMobileMenu(false)}
                >
                  About
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          
          {/* Main Brand Name */}
          <div className="space-y-8">
            <div ref={titleRef}>
              <h1 className="font-script text-6xl md:text-8xl lg:text-9xl font-bold text-primary leading-none">
                Karunya
              </h1>
            </div>
            <div ref={subtitleRef}>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
                Offset Printers
              </h2>
            </div>
          </div>

          {/* Typing Animation */}
          <div ref={typingRef} className="my-12">
            <p className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-primary italic min-h-[1.2em]">
              {currentWord}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          {/* CTA Button */}
          <div ref={ctaRef} className="pt-6">
            <Button 
              size="lg"
              onClick={handleRequestCallback}
              className="px-8 py-4 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-medium hover:shadow-strong transition-all"
            >
              Request a Call Back
            </Button>
          </div>

        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-accent/15 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-primary/20 rounded-full blur-lg animate-pulse delay-2000"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-accent/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/4 right-1/2 w-28 h-28 bg-primary/8 rounded-full blur-xl animate-pulse delay-1500"></div>
      </section>

      {/* Callback Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-card rounded-2xl p-8 mx-4 w-full max-w-md shadow-strong">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-display text-2xl font-semibold text-foreground">Request Callback</h3>
              <button 
                onClick={() => setShowForm(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <form className="space-y-4">
              <div>
                <label className="block font-body text-sm text-foreground mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block font-body text-sm text-foreground mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your phone number"
                />
              </div>
              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Submit Request
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;