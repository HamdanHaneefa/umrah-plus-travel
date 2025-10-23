import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plane, FileText, Globe, Hotel, Shield, CheckCircle, Star, ChevronLeft, ChevronRight } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import PackageCard from "@/components/PackageCard";
import TestimonialCard from "@/components/TestimonialCard";
import { heroImage, MakeyourJourney } from "@/assets/placeholder";
import testimonialBg from '../assets/testimonial_bg.jpg'
import { motion, AnimatePresence } from "framer-motion";

const Homepage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

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
      image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800"
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
      price: "AED 3,099",
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
      name: "Amina Rahman",
      text: "Very professional and quick. Helped us get visas and flight tickets within a day — great communication throughout.",
      timeAgo: "3 days ago"
    },
    {
      name: "Ravi Menon",
      text: "Excellent rates and clear guidance on documents. The whole process was smooth from start to finish.",
      timeAgo: "2 weeks ago"
    },
    {
      name: "Fatima Noor",
      text: "Friendly staff and fast responses on WhatsApp. My family's Umrah booking was handled perfectly.",
      timeAgo: "1 month ago"
    },
    {
      name: "Omar Siddiqui",
      text: "Transparent pricing and timely updates. I received my ticket details earlier than expected — highly recommended.",
      timeAgo: "5 days ago"
    },
    {
      name: "Priya Sharma",
      text: "They made a complicated process very simple. Supportive team and dependable service — will use again.",
      timeAgo: "4 weeks ago"
    },
    {
      name: "Khalid Bashir",
      text: "Quick turnaround and honest advice. Saved us money and stress. Very satisfied with the service.",
      timeAgo: "6 months ago"
    },
    {
      name: "Sara Mathews",
      text: "Booking was easy, paperwork checked carefully, and follow-up was consistent. Lovely experience overall.",
      timeAgo: "2 days ago"
    },
    {
      name: "Imran Patel",
      text: "Professional team, helped with special requests and arranged everything on time. Will definitely recommend.",
      timeAgo: "8 hours ago"
    },
    {
      name: "Neha Kapoor",
      text: "Great communication and reliable updates. Felt safe trusting them with our travel plans.",
      timeAgo: "3 weeks ago"
    },
    {
      name: "Adil Khan",
      text: "Responsive, friendly and efficient — got my visa and ticket without any hassles.",
      timeAgo: "just now"
    }
  ];

  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const tick = () => {
      const children = Array.from(el.children) as HTMLElement[];
      if (!children.length) return;
      const positions = children.map((c) => c.offsetLeft);
      const current = el.scrollLeft;
      let nextIndex = positions.findIndex((p) => p > current + 4);
      if (nextIndex === -1) nextIndex = 0;
      el.scrollTo({ left: positions[nextIndex], behavior: 'smooth' });
    };

    const onResize = () => {
      setTimeout(tick, 200);
    };
    window.addEventListener('resize', onResize);

    const startDelay = window.setTimeout(tick, 1200);
    const interval = window.setInterval(tick, 4000);

    return () => {
      window.clearTimeout(startDelay);
      window.clearInterval(interval);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  useEffect(() => {
    let mounted = true;
    const img = new Image();
    img.src = heroImage;
    img.onload = () => {
      if (mounted) setIsLoaded(true);
    };
    const fallback = setTimeout(() => mounted && setIsLoaded(true), 5000);
    return () => {
      mounted = false;
      clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [services.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <div className="min-h-screen overflow-x-hidden relative">
      {!isLoaded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <div className="w-14 h-14 border-4 border-primary rounded-full border-t-transparent animate-spin" aria-hidden="true"></div>
        </div>
      )}

      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-8">
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
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-8 pt-16">
            <motion.h1
              className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4 drop-shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Your Gateway to Sacred Journeys
            </motion.h1>
            <motion.p
              className="font-inter text-base md:text-lg text-white/95 max-w-2xl mx-auto drop-shadow-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Experience spiritual fulfillment with our expertly crafted Umrah packages and comprehensive travel services from Sharjah, UAE
            </motion.p>
          </div>

          <motion.div
            className="relative max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative overflow-hidden rounded-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden"
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-48 md:h-auto overflow-hidden">
                      <img
                        src={services[currentSlide].image}
                        alt={services[currentSlide].title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
                    </div>

                    <div className="p-6 flex flex-col justify-center">
                      <div className="mb-3">
                        {(() => {
                          const Icon = services[currentSlide].icon;
                          return <Icon className="w-8 h-8 text-amber-500" />;
                        })()}
                      </div>
                      <h3 className="font-montserrat text-xl md:text-2xl font-medium text-foreground mb-2">
                        {services[currentSlide].title}
                      </h3>
                      <p className="font-inter text-sm text-muted-foreground mb-3 leading-relaxed">
                        {services[currentSlide].description}
                      </p>
                      <p className="font-inter text-sm text-amber-600 font-semibold mb-4">
                        {services[currentSlide].detail}
                      </p>
                      <Button variant="default" size="sm" asChild className="w-full md:w-auto">
                        <Link to={services[currentSlide].link}>
                          Learn More <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 rounded-full p-2 shadow-lg transition-all z-10"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 rounded-full p-2 shadow-lg transition-all z-10"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-4">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-white w-6'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
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

      {/* Testimonials */}
      <section
        className="relative py-16"
        style={{
          backgroundImage: `url(${testimonialBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <motion.h2
            className="font-montserrat text-3xl md:text-4xl font-medium text-foreground text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Trusted Clients
          </motion.h2>

          <div
            ref={carouselRef}
            className="flex overflow-x-auto gap-4 pb-2 snap-x snap-mandatory md:no-scrollbar"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-lg p-6 shadow-lg flex flex-col flex-shrink-0 w-80 snap-center"
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
              <a href="tel:+971527874282">Call +971 6 527 5166</a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
