import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useScrollReveal, useScrollRevealScale } from '@/hooks/useScrollReveal';
import { 
  Heart, 
  MonitorSpeaker, 
  FileText, 
  CreditCard, 
  BookOpen, 
  Palette,
  Clock,
  Star,
  Award,
  CheckCircle
} from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'Wedding Card Design & Printing',
    description: 'Create beautiful, memorable wedding invitations with custom designs, premium paper, and elegant finishes.',
    features: ['Custom Designs', 'Gold/Silver Foiling', 'Premium Paper', 'Quick Delivery'],
    popular: true
  },
  {
    icon: MonitorSpeaker,
    title: 'Flex Design & Printing',
    description: 'Large format printing for banners, hoardings, and promotional displays with vibrant, weather-resistant materials.',
    features: ['Any Size', 'Weather Resistant', 'Vibrant Colors', 'Indoor/Outdoor']
  },
  {
    icon: FileText,
    title: 'Offset/Multicolor Printing',
    description: 'High-quality offset printing for large quantities with precise color matching and professional finish.',
    features: ['Bulk Orders', 'Color Accuracy', 'Cost Effective', 'Professional Quality']
  },
  {
    icon: CreditCard,
    title: 'Visiting Cards',
    description: 'Professional business cards that make lasting impressions with premium materials and modern designs.',
    features: ['Multiple Finishes', 'Quick Turnaround', 'Bulk Discounts', 'Design Support']
  },
  {
    icon: BookOpen,
    title: 'Brochures & Catalogs',
    description: 'Eye-catching marketing materials that effectively communicate your brand message and products.',
    features: ['Custom Layouts', 'High-Quality Images', 'Various Sizes', 'Professional Design']
  },
  {
    icon: Palette,
    title: 'Custom Diaries & Notebooks',
    description: 'Personalized planners, diaries, and notebooks for corporate gifts and personal use.',
    features: ['Custom Binding', 'Logo Printing', 'Quality Paper', 'Various Formats']
  }
];

const ServicesSection = () => {
  const navigate = useNavigate();
  const headerRef = useScrollReveal();
  const ctaRef = useScrollReveal({ delay: 200 });

  const handleGetQuote = () => {
    // Scroll to contact section instead of navigating
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewStories = () => {
    navigate('/customers');
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div ref={headerRef} className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Our Services
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Professional Printing <span className="text-primary">Solutions</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From elegant wedding invitations to corporate branding materials, we deliver exceptional quality 
            printing services that exceed expectations and bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const cardRef = useScrollRevealScale({ delay: index * 100 });
            return (
              <Card 
                key={index}
                ref={cardRef}
                className={`group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border-border/50`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    {service.popular && (
                      <Badge className="bg-accent text-accent-foreground">
                        <Star className="h-3 w-3 mr-1" />
                        Popular
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="font-display text-xl group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="font-body text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div ref={ctaRef} className="text-center mt-16">
          <div className="bg-subtle-gradient rounded-2xl p-8 md:p-12 shadow-soft">
            <div className="flex items-center justify-center mb-6">
              <Clock className="h-6 w-6 text-primary mr-2" />
              <Badge variant="outline" className="text-primary border-primary/20">
                Quick Turnaround
              </Badge>
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Need a Custom Quote?
            </h3>
            <p className="font-body text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every project is unique. Contact us for personalized pricing and expert consultation 
              on your printing requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={handleGetQuote}
                className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-medium hover:shadow-strong transition-all"
              >
                Get Free Quote
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={handleViewStories}
                className="px-8 py-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full transition-all"
              >
                <Award className="h-5 w-5 mr-2" />
                View Success Stories
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;