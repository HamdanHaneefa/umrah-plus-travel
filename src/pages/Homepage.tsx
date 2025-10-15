import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plane, FileText, Globe, Hotel, Shield, Bus, CheckCircle, Star } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import PackageCard from "@/components/PackageCard";
import TestimonialCard from "@/components/TestimonialCard";
import heroImage from "@/assets/heroImage2.png";
import testimonialBg from "@/assets/testimonial_bg.jpg";

const Homepage = () => {
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
    className="absolute inset-0 bg-cover bg-center animate-subtle-zoom"
    style={{ 
      backgroundImage: `url(${heroImage})`,
      width: '120%',
      height: '120%',
      left: '-10%',
      top: '-10%'
    }}
  />
  {/* Lighter overlay for better text visibility */}
  <div className="absolute inset-0 bg-black/25" />
  
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 className="font-montserrat text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up drop-shadow-lg">
      Your Gateway to Sacred Journeys
    </h1>
    <p className="font-inter text-xl md:text-2xl text-white/95 mb-8 max-w-3xl mx-auto animate-fade-in-up drop-shadow-md" style={{ animationDelay: "0.2s" }}>
      Experience spiritual fulfillment with our expertly crafted Umrah packages and comprehensive travel services from Sharjah, UAE
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
      <Button variant="secondary" size="lg" asChild>
        <Link to="/umrah">
          Explore Umrah Packages <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </Button>
      <Button variant="outline" size="lg" asChild className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-gray-900">
        <Link to="/contact">Get Visa Quote</Link>
      </Button>
    </div>
  </div>
</section>
      {/* Featured Umrah Packages */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Umrah Packages</h2>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
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

      {/* Why Choose Us (image left + text + stats on right) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left: image */}
            <div>
              <img
                src={heroImage}
                alt="Umrah"
                className="w-full h-[420px] object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Right: heading, copy, stats */}
            <div className="text-left">
              <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-foreground mb-6">
                Make Your Journey Comfortable and Meaningful
              </h2>

              <p className="font-inter text-base md:text-lg text-muted-foreground max-w-2xl">
                Experience spiritual fulfillment with our thoughtfully crafted Umrah packages,
                excellent support and trusted local partners. We take care of flights, visas,
                hotels and on-ground logistics so you can focus on your journey.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="font-oswald text-3xl md:text-4xl font-bold text-amber-500">300</div>
                  <div className="font-inter text-sm text-muted-foreground mt-1">Successful Tours</div>
                </div>

                <div className="text-center">
                  <div className="font-oswald text-3xl md:text-4xl font-bold text-amber-500">24,000</div>
                  <div className="font-inter text-sm text-muted-foreground mt-1">Happy Tourists</div>
                </div>

                <div className="text-center">
                  <div className="font-oswald text-3xl md:text-4xl font-bold text-amber-500">200</div>
                  <div className="font-inter text-sm text-muted-foreground mt-1">Places Explored</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
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
      {/* <ServiceSection/> */}

      {/* Testimonials */}
      <section
        className="relative py-20"
        style={{
          backgroundImage: `url(${testimonialBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Tourist Feedback</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-6 shadow-lg flex flex-col"
              >
                <p className="font-inter text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-4">{t.text}</p>

                <div className="flex items-center mt-auto pt-4">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-base font-semibold text-foreground mr-3 overflow-hidden flex-shrink-0 font-inter">
                    {t.name.split(" ").map(s => s[0]).slice(0,2).join("")}
                  </div>

                  <div>
                    <div className="font-inter font-semibold text-foreground text-sm">{t.name}</div>
                    <div className="font-inter text-xs text-muted-foreground">Happy Traveller</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          </div>
        </div>
      </section>

    {/* Locations Section */}
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Content */}
            <div>
              <div className="mb-6">
                <p className="font-inter text-sm uppercase tracking-wider text-muted-foreground mb-2">LOCATIONS</p>
                <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Located in <span className="text-red-600">the heart of Sharjah</span>
                </h2>
              </div>
              
              <p className="font-inter text-muted-foreground mb-8 leading-relaxed">
                Our office is conveniently located in Sharjah, providing easy access for all your travel and visa needs. Visit us to discuss your Umrah packages, visa applications, and travel plans with our expert consultants.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-inter font-semibold text-foreground">Main Office - Sharjah</h3>
                    <p className="font-inter text-sm text-muted-foreground">10 Maleha St, opposite Dibba Bakery, Sharjah, UAE</p>
                  </div>
                </div>
              </div>

              <Button variant="default" size="lg" asChild>
                <a 
                  href="https://www.google.com/maps/dir//DAR+AL+ASALAH+TOURISM+LLC+-+10+Maleha+St+-+opp.+Dibba+Bekary+-+Sharjah+-+United+Arab+Emirates/@25.2906294,55.4439761,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x3e5f5f002b85f161:0x40eff993c97df802!2m2!1d55.4439761!2d25.2906294!3e0?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </a>
              </Button>
            </div>

            {/* Right: Map */}
            <div className="h-[500px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.2636948679886!2d55.44179207542!3d25.29062947763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f002b85f161%3A0x40eff993c97df802!2sDAR%20AL%20ASALAH%20TOURISM%20LLC!5e0!3m2!1sen!2s!4v1729000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DAR AL ASALAH TOURISM LLC Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="font-inter text-xl mb-8 opacity-90 max-w-2xl mx-auto">
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

export default Homepage;