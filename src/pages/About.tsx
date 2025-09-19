import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Award, Users, Calendar, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { icon: <Award className="w-8 h-8" />, number: "15+", label: "Years Experience" },
    { icon: <Users className="w-8 h-8" />, number: "5000+", label: "Happy Customers" },
    { icon: <Calendar className="w-8 h-8" />, number: "10000+", label: "Projects Completed" },
    { icon: <CheckCircle className="w-8 h-8" />, number: "100%", label: "Customer Satisfaction" }
  ];

  const values = [
    {
      title: "Quality First",
      description: "We never compromise on quality. Every print job undergoes rigorous quality checks to ensure perfection."
    },
    {
      title: "Customer Centric",
      description: "Your satisfaction is our priority. We work closely with you to bring your vision to life."
    },
    {
      title: "Timely Delivery",
      description: "We understand deadlines matter. Our efficient processes ensure on-time delivery, every time."
    },
    {
      title: "Innovation",
      description: "We stay updated with the latest printing technologies to offer you the best solutions."
    }
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
            <Link to="/customers" className="font-body text-foreground hover:text-primary transition-colors">Customers</Link>
            <a href="/#contact" className="font-body text-foreground hover:text-primary transition-colors">Contact</a>
            <Link to="/about" className="font-body text-primary font-medium">About</Link>
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
            About Us
          </h1>
          <p className="font-display text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Crafting excellence in print for over 15 years
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-primary mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="font-body text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Our Story
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-lg leading-relaxed">
                Founded in 2009, Karunya Offset Printers began as a small family business with a simple mission: 
                to provide high-quality printing services that exceed customer expectations. What started as a modest 
                operation has grown into one of the region's most trusted printing partners.
              </p>
              
              <p className="text-lg leading-relaxed">
                Our journey has been marked by continuous growth, technological advancement, and an unwavering 
                commitment to quality. From wedding invitations that capture life's precious moments to business 
                materials that help companies thrive, we've been part of countless success stories.
              </p>
              
              <p className="text-lg leading-relaxed">
                Today, we combine traditional craftsmanship with modern technology to deliver exceptional results. 
                Our team of skilled professionals takes pride in every project, ensuring that each print job meets 
                our exacting standards of quality and precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
            Our Values
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-background rounded-2xl p-8 shadow-soft">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
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
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's bring your printing needs to life with our expertise and dedication to quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="px-8 py-4 text-lg">
              <a href="/#contact">Get Free Quote</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 py-4 text-lg">
              <Link to="/customers">View Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;