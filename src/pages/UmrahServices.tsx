import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, X, ArrowRight } from "lucide-react";
import PackageCard from "@/components/PackageCard";
import heroImage from "@/assets/hero-umrah.jpg";
import { motion } from "framer-motion";

const UmrahServices = () => {
  const packages = [
    {
      title: "Economy Package",
      price: "AED 1,499",
      features: [
        "Bus transportation from UAE to Saudi Arabia",
        "3-star hotel in Makkah (1km from Haram)",
        "3-star hotel in Madinah (800m from Prophet's Mosque)",
        "Duration: 7 days (4 Makkah, 3 Madinah)",
        "Group Size: 45-50 pilgrims",
        "Basic guidance and support",
        "Group transportation",
        "Saudi Arabia Umrah visa processing",
      ],
    },
    {
      title: "Standard Package",
      price: "AED 3,100",
      features: [
        "Round-trip economy flight included",
        "4-star hotel in Makkah (500m from Haram)",
        "4-star hotel in Madinah (400m from Prophet's Mosque)",
        "Duration: 10 days (6 Makkah, 4 Madinah)",
        "Group Size: 25-30 pilgrims",
        "Professional Umrah guide",
        "All internal transfers",
        "Visa processing included",
      ],
      isPopular: true,
    },
    {
      title: "Premium Package",
      price: "AED 3,499",
      features: [
        "Priority flight booking",
        "5-star hotel in Makkah (200m from Haram)",
        "5-star hotel in Madinah (150m from Prophet's Mosque)",
        "Duration: 12 days (7 Makkah, 5 Madinah)",
        "Group Size: 15-20 pilgrims",
        "Premium services and dedicated guide",
        "Airport assistance",
        "All transfers and visa processing",
      ],
      variant: "premium" as const,
    },
    {
      title: "VIP Package",
      price: "AED 4,400",
      features: [
        "Business class flight option available",
        "Luxury 5-star hotel with Haram view",
        "Premium 5-star hotel with Mosque view",
        "Duration: 15 days (9 Makkah, 6 Madinah)",
        "Group Size: 8-12 pilgrims",
        "Personal assistant throughout",
        "Private transportation",
        "Premium meals included",
      ],
      variant: "premium" as const,
    },
  ];

  const inclusions = [
    "Saudi Arabia Umrah visa",
    "Round-trip transportation (varies by package)",
    "Hotel accommodation (shared double rooms)",
    "All internal transfers in Saudi Arabia",
    "Experienced Umrah guide",
    "Group coordination and support",
    "Emergency assistance",
    "Pre-departure briefing session",
  ];

  const exclusions = [
    "Meals (except in VIP package)",
    "Personal expenses and shopping",
    "Medical insurance (available separately)",
    "Tips and gratuities",
    "Additional religious tours",
    "Single room supplement (if required)",
  ];

  const bookingProcess = [
    { step: "1", title: "Consultation", description: "Free consultation with our Umrah specialists" },
    { step: "2", title: "Documentation", description: "Submit required documents and photos" },
    { step: "3", title: "Payment", description: "50% advance payment to confirm booking" },
    { step: "4", title: "Visa Processing", description: "We handle all visa formalities" },
    { step: "5", title: "Pre-departure", description: "Briefing session and final preparations" },
    { step: "6", title: "Departure", description: "Group departure from Dubai/Abu Dhabi airports" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
         <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-amber-900/50 via-orange-900/40 to-amber-950/55"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-7xl font-medium text-primary-foreground mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Umrah Services
          </motion.h1>
          <motion.p 
            className="text-base md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience the spiritual journey of a lifetime with complete packages including flights, accommodation, and expert guidance
          </motion.p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">Umrah Package Categories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our range of packages designed to suit different needs and budgets
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PackageCard {...pkg} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusions & Exclusions */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Inclusions */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-primary-foreground" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Package Inclusions</h2>
              </div>
              <ul className="space-y-3">
                {inclusions.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center">
                  <X className="w-6 h-6 text-destructive" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Package Exclusions</h2>
              </div>
              <ul className="space-y-3">
                {exclusions.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Booking Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple steps to begin your spiritual journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookingProcess.map((item, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-card transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-secondary-foreground">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Book Your Umrah Package?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact us today for a free consultation with our Umrah specialists
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">
                Get Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href="https://wa.me/971525257136" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UmrahServices;
