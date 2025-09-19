import React from 'react';
import HeroSection from '@/components/HeroSection';
import ServiceCarousel from '@/components/ServiceCarousel';
import ServicesSection from '@/components/ServicesSection';
import CallbackForm from '@/components/CallbackForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ServiceCarousel />
      <ServicesSection />
      <CallbackForm />
      <Footer />
    </div>
  );
};

export default Index;