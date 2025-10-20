import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  // ✅ Replace this with your actual Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxwGG13zBMrLMZvduSSNPw4GXdeGsyiq_ZxeUl3CMTZzIBT-YodedshvwYfaks8ZOMDig/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate service is selected
    if (!formData.service) {
      toast({
        title: "Error",
        description: "Please select a service type",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Important for Google Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Note: With no-cors mode, we can't read the response
      // but if no error is thrown, it likely succeeded
      toast({
        title: "Message Sent! ✓",
        description: "We'll get back to you within 4 hours during business hours.",
      });
      
      // Reset form
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      details: ["10 Maleha St - opp. Dibba Bekary - Industrial Area 15 - Industrial Area - Sharjah"],
      type: "address",
      link: "https://www.google.com/maps/dir//DAR+AL+ASALAH+TOURISM+LLC+-+10+Maleha+St+-+opp.+Dibba+Bekary+-+Sharjah+-+United+Arab+Emirates/@25.2906294,55.4439761,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x3e5f5f002b85f161:0x40eff993c97df802!2m2!1d55.4439761!2d25.2906294!3e0?entry=ttu",
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+971 52 52 57 136", "+971 52 78 74 282", "+971 6 527 5166"],
      type: "phone",
      links: ["tel:+971525257136", "tel:+971527874282", "tel:+97165275166"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@dartourism.com", "umrah@dartourism.com", "visa@dartourism.com"],
      type: "email",
      links: ["mailto:info@dartourism.com", "mailto:umrah@dartourism.com", "mailto:visa@dartourism.com"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Sun-Thu: 8:00 AM - 8:00 PM", "Fri: 2:00 PM - 8:00 PM", "Sat: 9:00 AM - 6:00 PM"],
      type: "hours",
    },
  ];

  const handleContactClick = (type: string, link?: string) => {
    if (link) {
      window.location.href = link;
    }
  };

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Get in touch with our team for any inquiries or bookings
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6" autoComplete="on">
                <Input
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  disabled={isSubmitting}
                  autoComplete="name"
                  name="name"
                />
                <Input
                  type="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  disabled={isSubmitting}
                  autoComplete="email"
                  name="email"
                />
                <Input
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  disabled={isSubmitting}
                  autoComplete="tel"
                  name="phone"
                  type="tel"
                />

                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                  disabled={isSubmitting}
                  required
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Service Type *" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="umrah">Umrah</SelectItem>
                    <SelectItem value="visa">Visa</SelectItem>
                    <SelectItem value="travel">Travel</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>

                <Textarea
                  placeholder="Your Message *"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  disabled={isSubmitting}
                />
                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground mb-8">Contact Information</h2>
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-card transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-xl">{info.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {info.type === "address" && (
                      <div 
                        className="cursor-pointer group"
                        onClick={() => handleContactClick("address", info.link)}
                      >
                        <p className="text-muted-foreground group-hover:text-primary transition-colors duration-200 mb-3">
                          {info.details[0]}
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full"
                        >
                          Get Directions
                        </Button>
                      </div>
                    )}

                    {info.type === "phone" && info.links && (
                      <div className="space-y-2">
                        {info.details.map((detail, idx) => (
                          <div
                            key={idx}
                            onClick={() => handleContactClick("phone", info.links?.[idx])}
                            className="text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer hover:underline underline-offset-4"
                          >
                            {detail}
                          </div>
                        ))}
                      </div>
                    )}

                    {info.type === "email" && info.links && (
                      <div className="space-y-2">
                        {info.details.map((detail, idx) => (
                          <div
                            key={idx}
                            onClick={() => handleContactClick("email", info.links?.[idx])}
                            className="text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer hover:underline underline-offset-4"
                          >
                            {detail}
                          </div>
                        ))}
                      </div>
                    )}

                    {info.type === "hours" && (
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;