import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plane, FileText, Globe, Hotel, Shield, CheckCircle, Star } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import PackageCard from "@/components/PackageCard";
import TestimonialCard from "@/components/TestimonialCard";
import heroImage from "@/assets/heroImage2.png";
import MakeyourJourney from "@/assets/make_journey.png";
import testimonialBg from "@/assets/testimonial_bg.jpg";
import { motion } from "framer-motion";

const Homepage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const services = [
    {
      icon: Plane,
      title: "Umrah Packages",
      description: "Complete spiritual journey packages with accommodation and guidance",
      detail: "Starting from AED 1,499",
      link: "/umrah",
      image: "https://user-gen-media-assets.s3.amazonaws.com/seedream_images/47d2d08c-8752-40f8-88e8-884845f524f5.png"
    },
    {
      icon: FileText,
      title: "UAE Visit Visas",
      description: "Tourist, business, and family visit visas processed efficiently",
      detail: "Processing time: 3-5 days",
      link: "/visa",
      image: "https://user-gen-media-assets.s3.amazonaws.com/seedream_images/376a5195-6f5b-45e9-af57-9865afed3cd6.png"
    },
    {
      icon: Globe,
      title: "International Visas",
      description: "Schengen, USA, UK, Canada visa services with expert consultation",
      detail: "Success rate: 95%+",
      link: "/visa",
      image: "https://user-gen-media-assets.s3.amazonaws.com/seedream_images/94364aca-ce92-4410-9574-9bd88e99b487.png"
    },
    {
      icon: Plane,
      title: "Flight Bookings",
      description: "Domestic and international flight reservations at competitive rates",
      detail: "24/7 support available",
      link: "/travel",
      image: "https://user-gen-media-assets.s3.amazonaws.com/seedream_images/adcfa212-93cd-487b-bfb1-42ac135d30b1.png"
    },
    {
      icon: Hotel,
      title: "Hotel Reservations",
      description: "Worldwide accommodation booking from budget to luxury options",
      detail: "Best price guarantee",
      link: "/travel",
      image: "https://user-gen-media-assets.s3.amazonaws.com/seedream_images/35afff5b-6ccc-44ea-9fd9-1ba17d2263db.png"
    },
    {
      icon: Shield,
      title: "Travel Insurance",
      description: "Comprehensive coverage for international and domestic travel",
      detail: "Instant policy issuance",
      link: "/travel",
      image: "https://user-gen-media-assets.s3.amazonaws.com/seedream_images/3b1284e0-7791-4b78-a4f4-d24719acec98.png"
    },
  ];



  const featuredPackages = [
    {
      title: "Economy Package",
      price: "AED 1,499",
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
      price: "AED 3,499",
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
      name: "Sagir Ali",
      text: "Highly recommended to everyone they made impossible to possible. Suggested to get there travel visas n tickets from them on good rates ❤️❤️ god bless them",
      timeAgo: "a month ago"
    },
    {
      name: "Kashif Amjad",
      text: "Good service in competitive prices",
      timeAgo: "a month ago"
    },
    {
      name: "Waseem Akram",
      text: "Amazing Staff, Providing quality service with best prices.",
      timeAgo: "8 hours ago"
    },
    {
      name: "Sameer Mastoi",
      text: "Excellent service and professional team. Highly satisfied with their support.",
      timeAgo: "a month ago"
    },
  ];

  useEffect(() => {
    let mounted = true;
    const img = new Image();
    img.src = heroImage;
    img.onload = () => {
      if (mounted) setIsLoaded(true);
    };
    // fallback to avoid stuck loader
    const fallback = setTimeout(() => mounted && setIsLoaded(true), 5000);
    return () => {
      mounted = false;
      clearTimeout(fallback);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden relative">
      {!isLoaded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <div className="w-14 h-14 border-4 border-primary rounded-full border-t-transparent animate-spin" aria-hidden="true"></div>
        </div>
      )}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            width: '110%',
            height: '110%',
            left: '-5%',
            top: '-5%'
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />
        <div className="absolute inset-0 bg-black/25" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="font-montserrat text-4xl md:text-6xl lg:text-7xl font-medium text-white mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Your Gateway to Sacred Journeys
          </motion.h1>
          <motion.p 
            className="font-inter text-xl md:text-2xl text-white/95 mb-8 max-w-3xl mx-auto drop-shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience spiritual fulfillment with our expertly crafted Umrah packages and comprehensive travel services from Sharjah, UAE
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button variant="secondary" size="lg" asChild data-testid="button-explore-umrah">
              <Link to="/umrah">
                Explore Umrah Packages <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-gray-900" data-testid="button-visa-quote">
              <Link to="/contact">Get Visa Quote</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Umrah Packages */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-montserrat text-3xl md:text-4xl font-medium text-foreground mb-4">Featured Umrah Packages</h2>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the spiritual journey of a lifetime with our carefully curated packages
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.map((pkg, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <PackageCard {...pkg} />
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button variant="hero" size="lg" asChild data-testid="button-view-packages">
              <Link to="/umrah">View All Packages <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us (image left + text + stats on right) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={MakeyourJourney}
                alt="Umrah"
                className="w-full h-[420px] object-cover rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div 
              className="text-left"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-foreground mb-6">
                Make Your Journey Comfortable and Meaningful
              </h2>

              <p className="font-inter text-base md:text-lg text-muted-foreground max-w-2xl">
                Experience spiritual fulfillment with our thoughtfully crafted Umrah packages,
                excellent support and trusted local partners. We take care of flights, visas,
                hotels and on-ground logistics so you can focus on your journey.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-6">
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="font-oswald text-3xl md:text-4xl font-semibold text-amber-500" data-testid="text-stat-tours">300</div>
                  <div className="font-inter text-sm text-muted-foreground mt-1">Successful Tours</div>
                </motion.div>

                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="font-oswald text-3xl md:text-4xl font-semibold text-amber-500" data-testid="text-stat-tourists">24,000</div>
                  <div className="font-inter text-sm text-muted-foreground mt-1">Happy Tourists</div>
                </motion.div>

                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="font-oswald text-3xl md:text-4xl font-semibold text-amber-500" data-testid="text-stat-places">200</div>
                  <div className="font-inter text-sm text-muted-foreground mt-1">Places Explored</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-montserrat text-3xl md:text-4xl font-medium text-foreground mb-4">Our Services</h2>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive travel and visa services tailored to your needs
            </p>
          </motion.div>
          
          {/* Mobile: Horizontal scroll, Desktop: Grid 2 cols per row */}
          <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 flex md:flex-none overflow-x-auto md:overflow-visible gap-4 pb-4 md:pb-0 snap-x snap-mandatory md:snap-none">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="flex-shrink-0 w-80 md:w-auto snap-center md:snap-align-none"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
          <motion.h2 
            className="font-montserrat text-3xl md:text-4xl font-medium text-foreground text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Tourist Feedback
          </motion.h2>

          {/* Mobile: Horizontal scroll, Desktop: Grid */}
          <div className="md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 flex md:flex-none overflow-x-auto md:overflow-visible gap-4 pb-4 md:pb-0 snap-x snap-mandatory md:snap-none">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-lg p-6 shadow-lg flex flex-col flex-shrink-0 w-80 md:w-auto snap-center md:snap-align-none"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p className="font-inter text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-4" data-testid={`text-testimonial-${i}`}>{t.text}</p>

                <div className="flex items-center mt-auto pt-4">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-base font-medium text-foreground mr-3 overflow-hidden flex-shrink-0 font-inter">
                    {t.name.split(" ").map(s => s[0]).slice(0,2).join("")}
                  </div>

                  <div>
                    <div className="font-inter font-medium text-foreground text-sm" data-testid={`text-name-${i}`}>{t.name}</div>
                    <div className="font-inter text-xs text-muted-foreground">{t.timeAgo}</div>
                  </div>
                </div>
              </motion.div>
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
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <p className="font-inter text-sm uppercase tracking-wider text-muted-foreground mb-2">LOCATIONS</p>
                <h2 className="font-montserrat text-3xl md:text-4xl font-medium text-foreground mb-4">
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
                    <h3 className="font-inter font-medium text-foreground">Main Office - Sharjah</h3>
                    <p className="font-inter text-sm text-muted-foreground">10 Maleha St, opposite Dibba Bakery, Sharjah, UAE</p>
                  </div>
                </div>
              </div>

              <Button variant="default" size="lg" asChild data-testid="button-directions">
                <a 
                  href="https://www.google.com/maps/dir//DAR+AL+ASALAH+TOURISM+LLC+-+10+Maleha+St+-+opp.+Dibba+Bekary+-+Sharjah+-+United+Arab+Emirates/@25.2906294,55.4439761,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x3e5f5f002b85f161:0x40eff993c97df802!2m2!1d55.4439761!2d25.2906294!3e0?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </a>
              </Button>
            </motion.div>

            <motion.div 
              className="h-[500px] rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="font-montserrat text-3xl md:text-4xl font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Begin Your Journey?
          </motion.h2>
          <motion.p 
            className="font-inter text-xl mb-8 opacity-90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Contact us today to plan your spiritual journey or process your visa applications
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button variant="secondary" size="lg" asChild data-testid="button-contact-cta">
              <Link to="/contact">Contact Us Now</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary" data-testid="button-call">
              <a href="tel:+971527874282">Call +971 52 78 74 282</a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
