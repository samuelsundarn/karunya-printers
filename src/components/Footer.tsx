import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Heart,
  Facebook,
  Instagram,
  MessageCircle
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Wedding Card Design & Printing',
    'Flex Design & Printing',
    'Offset/Multicolor Printing',
    'Visiting Cards',
    'Brochures & Catalogs',
    'Custom Diaries & Notebooks'
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Success Stories', href: '/customers' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Get Quote', href: '#contact' }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="font-display text-3xl font-bold mb-2">
                <span className="text-accent">Karunya</span>
                <br />
                <span className="font-script text-4xl">Offset Printers</span>
              </h2>
              <Badge variant="outline" className="border-accent text-accent bg-transparent">
                Crafting Excellence Since Years
              </Badge>
            </div>
            
            <p className="font-body text-background/80 mb-6 leading-relaxed max-w-md">
              Your trusted partner for all printing and design needs. We combine traditional craftsmanship 
              with modern technology to deliver exceptional quality that exceeds expectations.
            </p>

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent" />
                <span className="font-medium">+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent" />
                <span className="font-medium">info@karunyaoffset.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-accent mt-1" />
                <span className="font-medium">
                  Shop Address<br />
                  City, State - PIN Code
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-accent" />
                <span className="font-medium">Mon - Sat: 9:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button 
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-background/80 hover:text-accent transition-colors duration-300 text-sm text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('#') ? (
                    <button 
                      onClick={() => document.getElementById(link.href.substring(1))?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-background/80 hover:text-accent transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a 
                      href={link.href}
                      className="text-background/80 hover:text-accent transition-colors duration-300 text-sm block"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="font-display text-lg font-bold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <button className="p-2 bg-background/10 hover:bg-accent/20 rounded-lg transition-colors duration-300">
                  <Facebook className="h-5 w-5 text-accent" />
                </button>
                <button className="p-2 bg-background/10 hover:bg-accent/20 rounded-lg transition-colors duration-300">
                  <Instagram className="h-5 w-5 text-accent" />
                </button>
                <button className="p-2 bg-background/10 hover:bg-accent/20 rounded-lg transition-colors duration-300">
                  <MessageCircle className="h-5 w-5 text-accent" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-background/20" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-background/60 text-sm">
            © {currentYear} Karunya Offset Printers. All rights reserved.
          </div>
          <div className="flex items-center space-x-2 text-background/60 text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-400 fill-current" />
            <span>for quality printing</span>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;