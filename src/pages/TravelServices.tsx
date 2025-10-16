import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, Hotel, MapPin, Shield, Bus, ArrowRight } from "lucide-react";
import flightImage from "@/assets/flight-booking.jpg";

const TravelServices = () => {
  const flightServices = [
    {
      title: "Domestic Flights (UAE)",
      features: [
        "Airlines: Emirates, Flydubai, Air Arabia, Etihad Airways",
        "Routes: Dubai-Abu Dhabi, Dubai-Sharjah connections",
        "Booking: Online booking system with instant confirmation",
        "Support: 24/7 customer service for changes and cancellations",
      ],
    },
    {
      title: "International Flights",
      features: [
        "Destinations: Asia, Europe, Americas, Africa, Oceania",
        "Booking Options: Economy, business, and first-class seats",
        "Special Deals: Group bookings, corporate rates, seasonal offers",
        "Services: Seat selection, meal preferences, baggage allowance",
      ],
    },
  ];

  const hotelCategories = [
    {
      region: "UAE Hotels",
      areas: [
        "Dubai: 3-star to 7-star luxury resorts and business hotels",
        "Abu Dhabi: City center and beach resort accommodations",
        "Sharjah: Budget-friendly to premium hotel options",
        "Other Emirates: Fujairah, Ras Al Khaimah, Ajman hotels",
      ],
    },
    {
      region: "International Hotels",
      areas: [
        "Global Network: Partnerships with major hotel chains worldwide",
        "Room Types: Standard, deluxe, suites, family rooms",
        "Amenities: Pool, spa, fitness center, business facilities",
        "Booking Guarantee: Best rate guarantee and instant confirmation",
      ],
    },
  ];

  const holidayPackages = [
    {
      title: "Dubai Explorer",
      duration: "3 Days/2 Nights",
      price: "AED 800 per person",
      highlights: [
        "Burj Khalifa and Dubai Mall visits",
        "Desert safari with BBQ dinner",
        "Dubai Marina and JBR beach tour",
        "Traditional souks and Gold Market",
        "Airport transfers included",
      ],
    },
    {
      title: "Abu Dhabi Cultural Tour",
      duration: "2 Days/1 Night",
      price: "AED 600 per person",
      highlights: [
        "Sheikh Zayed Grand Mosque visit",
        "Louvre Abu Dhabi museum",
        "Emirates Palace and Corniche",
        "Ferrari World or Yas Waterworld",
        "Professional tour guide",
      ],
    },
    {
      title: "Turkey Historical Tour",
      duration: "7 Days/6 Nights",
      price: "AED 2,500 per person",
      highlights: [
        "Istanbul city tour and Bosphorus cruise",
        "Cappadocia hot air balloon experience",
        "Pamukkale thermal springs visit",
        "Ephesus ancient city exploration",
        "All accommodations and most meals included",
      ],
    },
    {
      title: "Europe Grand Tour",
      duration: "12 Days/11 Nights",
      price: "AED 4,800 per person",
      highlights: [
        "Paris, Rome, Amsterdam, Prague visits",
        "High-speed train connections",
        "4-star hotel accommodations",
        "Professional multilingual guides",
        "Major attractions and museum entries",
      ],
    },
  ];

  const insurancePlans = [
    {
      title: "Domestic Travel Insurance",
      coverage: "AED 100,000",
      premium: "AED 50 per person per trip",
      features: [
        "Medical expenses coverage",
        "Trip cancellation protection",
        "Baggage loss coverage",
        "Duration: Up to 30 days within UAE",
      ],
    },
    {
      title: "International Travel Insurance - Basic",
      coverage: "AED 500,000",
      premium: "AED 150 per person",
      features: [
        "Medical coverage: AED 500,000",
        "Emergency evacuation: AED 1,000,000",
        "Trip cancellation: AED 50,000",
        "Baggage loss: AED 10,000",
      ],
    },
    {
      title: "International Travel Insurance - Comprehensive",
      coverage: "AED 1,000,000",
      premium: "AED 300 per person",
      features: [
        "Medical coverage: AED 1,000,000",
        "Emergency evacuation: AED 2,000,000",
        "Trip cancellation: AED 100,000",
        "Baggage loss: AED 20,000",
        "Adventure sports coverage included",
      ],
    },
  ];

  const transportServices = [
    {
      title: "Airport Transfers",
      icon: Plane,
      services: [
        "Dubai Airport: Sedan AED 120, SUV AED 180",
        "Abu Dhabi Airport: Sedan AED 200, SUV AED 280",
        "Sharjah Airport: Sedan AED 80, SUV AED 120",
        "Group Transfer: 12-seater van AED 300-500",
      ],
    },
    {
      title: "City Tours and Transfers",
      icon: Bus,
      services: [
        "Half Day Tours: AED 200-350 per person",
        "Full Day Tours: AED 400-650 per person",
        "Private Car Hire: AED 300-500 per day with driver",
        "Group Bus Service: AED 150-250 per person per day",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
         <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${flightImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-amber-900/50 via-orange-900/40 to-amber-950/55"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-7xl font-medium text-primary-foreground mb-4 drop-shadow-lg">
            Travel Services
          </h1>
          <p className="text-base md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            Complete travel solutions including flights, hotels, holiday packages, and insurance
          </p>
        </div>
      </section>

      {/* Flight Booking Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Plane className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">Flight Booking Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
               Competitive rates for domestic and international flights with 24/7 support
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {flightServices.map((service, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <span className="text-secondary text-xl">•</span>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hotel Reservations */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Hotel className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">Hotel Reservation Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
               Worldwide accommodation from budget-friendly to luxury options
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hotelCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl">{category.region}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.areas.map((area, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <span className="text-secondary text-xl">•</span>
                        <span className="text-foreground">{area}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Holiday Packages */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">Holiday Packages</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
               Curated travel experiences for UAE and international destinations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {holidayPackages.map((pkg, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-sm text-muted-foreground">{pkg.duration}</span>
                    <span className="text-xl font-bold text-secondary">{pkg.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Highlights:</h4>
                  <ul className="space-y-2 mb-6">
                    {pkg.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground">• {highlight}</li>
                    ))}
                  </ul>
                  <Button className="w-full" asChild>
                    <Link to="/contact">Book Package</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Insurance */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">Travel Insurance</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
               Comprehensive protection for worry-free travel
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insurancePlans.map((plan, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{plan.title}</CardTitle>
                  <div className="mt-4 space-y-2">
                    <div>
                      <span className="text-xs text-muted-foreground">Coverage</span>
                      <p className="text-lg font-bold text-secondary">{plan.coverage}</p>
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground">Premium</span>
                      <p className="text-sm font-medium">{plan.premium}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Features:</h4>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground">• {feature}</li>
                    ))}
                  </ul>
                  <Button className="w-full" asChild>
                    <Link to="/contact">Get Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ground Transportation */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">Ground Transportation</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
               Comfortable and reliable transfers for all your travel needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transportServices.map((service, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.services.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <span className="text-secondary text-xl">•</span>
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">Ready to Plan Your Next Trip?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
             Let our travel experts create the perfect itinerary for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">
                Contact Travel Experts <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href="tel:+971653012345">Call +971 6 531 2345</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TravelServices;
