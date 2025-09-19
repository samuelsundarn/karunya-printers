import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Star, Quote, Award, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Customers = () => {
  const testimonials = [
    {
      name: "Priya & Raj Wedding",
      type: "Wedding Cards",
      image: "👰",
      rating: 5,
      text: "The wedding invitations were absolutely stunning! Every guest complimented the quality and elegant design. Karunya Offset made our special day even more memorable.",
      project: "500 Premium Wedding Invitations"
    },
    {
      name: "TechSolve IT Solutions",
      type: "Business Printing",
      image: "💼",
      rating: 5,
      text: "Professional business cards and brochures that perfectly represent our brand. The quality is exceptional and delivery was right on time for our product launch.",
      project: "Complete Business Stationery Package"
    },
    {
      name: "Sunrise Restaurant",
      type: "Flex Printing",
      image: "🍽️",
      rating: 5,
      text: "Our new signage and banners look fantastic! The colors are vibrant and the material quality is top-notch. Increased our visibility significantly.",
      project: "Large Format Banners & Signage"
    },
    {
      name: "Green Valley School",
      type: "Educational Materials",
      image: "🎓",
      rating: 5,
      text: "Annual magazines, certificates, and promotional materials - all delivered with excellent quality. Karunya has been our trusted partner for 5 years.",
      project: "Annual Publication & Certificates"
    },
    {
      name: "Fashion Hub Boutique",
      type: "Promotional Materials",
      image: "👗",
      rating: 5,
      text: "Beautiful catalogs and visiting cards that showcase our fashion collection perfectly. The print quality makes our products look even more appealing.",
      project: "Fashion Catalog & Marketing Materials"
    },
    {
      name: "Dr. Kumar's Clinic",
      type: "Medical Stationery",
      image: "⚕️",
      rating: 5,
      text: "Professional prescription pads, appointment cards, and clinic branding materials. Everything was perfectly aligned with our healthcare standards.",
      project: "Complete Medical Stationery Set"
    }
  ];

  const achievements = [
    { icon: <Award className="w-12 h-12" />, title: "Excellence Award", description: "Best Printing Services 2023" },
    { icon: <TrendingUp className="w-12 h-12" />, title: "Growth Milestone", description: "5000+ Satisfied Customers" },
    { icon: <Star className="w-12 h-12" />, title: "Quality Recognition", description: "99% Customer Retention Rate" }
  ];

  const successMetrics = [
    { number: "5000+", label: "Happy Customers" },
    { number: "15000+", label: "Projects Completed" },
    { number: "15+", label: "Years of Excellence" },
    { number: "100%", label: "On-Time Delivery" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="font-handwriting text-2xl text-primary hover:text-primary/80 transition-colors">
            Karunya Offset Printers
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="font-body text-foreground hover:text-primary transition-colors">Home</Link>
            <a href="/#services" className="font-body text-foreground hover:text-primary transition-colors">Services</a>
            <Link to="/customers" className="font-body text-primary font-medium">Customers</Link>
            <a href="/#contact" className="font-body text-foreground hover:text-primary transition-colors">Contact</a>
            <Link to="/about" className="font-body text-foreground hover:text-primary transition-colors">About</Link>
          </nav>

          <Link to="/" className="md:hidden p-2 text-foreground hover:text-primary">
            <ArrowLeft className="w-6 h-6" />
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-script text-5xl md:text-7xl font-bold text-primary mb-6">
            Success Stories
          </h1>
          <p className="font-display text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Celebrating our customers' success and the projects that made it possible
          </p>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                  {metric.number}
                </div>
                <div className="font-body text-muted-foreground">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
            What Our Customers Say
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-soft border border-border">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{testimonial.image}</div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{testimonial.type}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {testimonial.text}
                </p>
                
                <div className="border-t border-border pt-4">
                  <p className="text-sm font-medium text-foreground">
                    Project: {testimonial.project}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
            Our Achievements
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-background rounded-2xl p-8 text-center shadow-soft">
                <div className="text-primary mb-6 flex justify-center">
                  {achievement.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us help you create something amazing. Your success story could be next!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="px-8 py-4 text-lg">
              <a href="/#contact">Start Your Project</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 py-4 text-lg">
              <a href="/#services">View Our Services</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Customers;