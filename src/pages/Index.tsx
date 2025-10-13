import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plane, FileText, Globe, Hotel, Shield, Bus, CheckCircle, Star } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import PackageCard from "@/components/PackageCard";
import TestimonialCard from "@/components/TestimonialCard";
import heroImage from "@/assets/hero-umrah.jpg";

const Index = () => {
  const services = [
    {
      icon: Plane,
      title: "Umrah Packages",
      description: "Complete spiritual journey packages with accommodation and guidance",
      detail: "Starting from AED 1,500",
      link: "/umrah",
    },
    {
      icon: FileText,
      title: "UAE Visit Visas",
      description: "Tourist, business, and family visit visas processed efficiently",
      detail: "Processing time: 3-5 days",
      link: "/visa",
    },
    {
      icon: Globe,
      title: "International Visas",
      description: "Schengen, USA, UK, Canada visa services with expert consultation",
      detail: "Success rate: 95%+",
      link: "/visa",
    },
    {
      icon: Plane,
      title: "Flight Bookings",
      description: "Domestic and international flight reservations at competitive rates",
      detail: "24/7 support available",
      link: "/travel",
    },
    {
      icon: Hotel,
      title: "Hotel Reservations",
      description: "Worldwide accommodation booking from budget to luxury options",
      detail: "Best price guarantee",
      link: "/travel",
    },
    {
      icon: Shield,
      title: "Travel Insurance",
      description: "Comprehensive coverage for international and domestic travel",
      detail: "Instant policy issuance",
      link: "/travel",
    },
  ];

  const featuredPackages = [
    {
      title: "Economy Package",
      price: "AED 1,500",
      features: [
        "Bus transportation from UAE",
        "3-star hotel accommodation",
        "Basic guidance and support",
        "7 days (4 Makkah, 3 Madinah)",
        "Group size: 45-50 pilgrims",
      ],
    },
    {
      title: "Standard Package",
      price: "AED 3,100",
      features: [
        "Round-trip flight included",
        "4-star hotel near Haram",
        "Professional Umrah guide",
        "10 days (6 Makkah, 4 Madinah)",
        "Group size: 25-30 pilgrims",
      ],
      isPopular: true,
    },
    {
      title: "Premium Package",
      price: "AED 3,500",
      features: [
        "Priority flight booking",
        "5-star hotel walking distance to Haram",
        "VIP ground transportation",
        "12 days (7 Makkah, 5 Madinah)",
        "Group size: 15-20 pilgrims",
      ],
      variant: "premium" as const,
    },
  ];

  const testimonials = [
    {
      name: "Ahmed Al-Rashid",
      text: "Excellent service for my family's Umrah journey. The arrangements were perfect and the team was very supportive. Highly recommended!",
    },
    {
      name: "Fatima Hassan",
      text: "Professional visa processing, got my UK visa without any issues. The team guided me through every step of the process.",
    },
    {
      name: "Mohammed Ali",
      text: "Best travel agency in Sharjah for all tourism needs. Been using their services for years and never disappointed.",
    },
  ];

  const whyChooseUs = [
    { icon: CheckCircle, title: "15+ Years Experience", description: "in travel and tourism industry" },
    { icon: CheckCircle, title: "Licensed Agency", description: "by UAE tourism authorities" },
    { icon: CheckCircle, title: "24/7 Customer Support", description: "for all your travel needs" },
    { icon: CheckCircle, title: "Competitive Pricing", description: "without compromising service quality" },
    { icon: CheckCircle, title: "Expert Guidance", description: "from experienced travel consultants" },
    { icon: Star, title: "95% Success Rate", description: "for visa applications" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
            Your Gateway to Sacred Journeys
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Experience spiritual fulfillment with our expertly crafted Umrah packages and comprehensive travel services from Sharjah, UAE
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="secondary" size="lg" asChild>
              <Link to="/umrah">
                Explore Umrah Packages <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/contact">Get Visa Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive travel and visa services tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Umrah Packages */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Umrah Packages</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the spiritual journey of a lifetime with our carefully curated packages
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.map((pkg, index) => (
              <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <PackageCard {...pkg} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/umrah">View All Packages <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner for spiritual journeys and travel services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied travelers who have trusted us
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us today to plan your spiritual journey or process your visa applications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Contact Us Now</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href="tel:+971525257136">Call +971 52 52 57 136</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
