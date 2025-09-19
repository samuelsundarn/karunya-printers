import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useScrollReveal, useScrollRevealFromLeft, useScrollRevealFromRight } from '@/hooks/useScrollReveal';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

const FALLBACK_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxzDqPOQTQ5Zv_ILqLtTLqwE2CRnxUOjqV-tX8ysmDSBGQuigAkJCTkW16GSMKCUlzzGg/exec';

const CallbackForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showSuccessPrompt, setShowSuccessPrompt] = useState(false);
  const { toast } = useToast();
  
  const headerRef = useScrollReveal();
  const leftColumnRef = useScrollRevealFromLeft({ delay: 200 });
  const rightColumnRef = useScrollRevealFromRight({ delay: 400 });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone) {
      toast({
        title: "Required fields missing",
        description: "Please fill in your name and phone number.",
        variant: "destructive"
      });
      return;
    }

    const scriptUrl = (import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL as string | undefined) || FALLBACK_SCRIPT_URL;

    setIsSubmitting(true);

    try {
      // Send as URL-encoded form data for best compatibility with Apps Script
      const payload = new URLSearchParams({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        service: formData.service,
        message: formData.message,
        timestamp: new Date().toISOString()
      });

      const response = await fetch(scriptUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: payload.toString(),
        mode: 'no-cors',
      });

      const succeeded = response.ok || response.type === 'opaque';
      if (!succeeded) {
        throw new Error(`Submission failed with status ${response.status}`);
      }
      
      setIsSuccess(true);
      setShowSuccessPrompt(true);
      toast({
        title: "Request submitted successfully!",
        description: "We will contact you within 24 hours. Thank you for choosing Karunya Offset Printers!",
      });

      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: '',
          message: ''
        });
        setIsSuccess(false);
      }, 3000);

    } catch (error) {
      toast({
        title: "Submission failed",
        description: "Something went wrong. Please try again or call us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-subtle-gradient">
      <div className="max-w-7xl mx-auto px-4">
        <div ref={headerRef} className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Get In Touch
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Request a <span className="text-primary">Callback</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your printing project to life? Share your requirements and we'll get back to you 
            with a personalized quote and expert guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div ref={leftColumnRef} className="space-y-8">
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Why Choose Karunya Offset Printers?
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Premium Quality Guarantee</h4>
                    <p className="text-muted-foreground text-sm">
                      State-of-the-art equipment and finest materials ensure exceptional results every time.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Quick Turnaround</h4>
                    <p className="text-muted-foreground text-sm">
                      Most orders completed within 24-48 hours without compromising on quality.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <AlertCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Expert Design Support</h4>
                    <p className="text-muted-foreground text-sm">
                      Professional designers help create stunning layouts that capture your vision.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="font-display text-xl">Contact Information</CardTitle>
                <CardDescription>Reach out to us directly</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="font-medium">+91 XXXXX XXXXX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="font-medium">info@karunyaoffset.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-primary mt-1" />
                  <span className="font-medium">
                    Shop Address<br />
                    City, State - PIN Code
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="font-medium">Mon - Sat: 9:00 AM - 8:00 PM</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Callback Form */}
          <Card ref={rightColumnRef} className="border-border/50 shadow-medium">
            <CardHeader>
              <CardTitle className="font-display text-xl">Request Callback</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSuccess ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground">
                    We will contact you soon with a personalized quote.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interest</Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wedding-cards">Wedding Card Design & Printing</SelectItem>
                        <SelectItem value="flex-printing">Flex Design & Printing</SelectItem>
                        <SelectItem value="offset-printing">Offset/Multicolor Printing</SelectItem>
                        <SelectItem value="visiting-cards">Visiting Cards</SelectItem>
                        <SelectItem value="brochures">Brochures & Catalogs</SelectItem>
                        <SelectItem value="diaries">Custom Diaries & Notebooks</SelectItem>
                        <SelectItem value="other">Other Services</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Requirements</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project requirements, quantity, timeline, etc."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Request Callback'}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <AlertDialog open={showSuccessPrompt} onOpenChange={setShowSuccessPrompt}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Submission received</AlertDialogTitle>
            <AlertDialogDescription>
              Thank you! Your request has been submitted. We'll reach out within 24 hours.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setShowSuccessPrompt(false)}>OK</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
};

export default CallbackForm;