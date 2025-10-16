import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, DollarSign, FileCheck, ArrowRight } from "lucide-react";
import visaImage from "@/assets/visa-services.jpg";

const VisaServices = () => {
  const uaeVisas = [
    {
      title: "Tourist Visa (30 Days)",
      price: "AED 350",
      processing: "3-4 working days",
      validity: "60 days to enter UAE",
      stay: "30 days from entry date",
      features: [
        "Passport copy (6 months validity)",
        "Passport size photograph",
        "Emirates ID copy of sponsor (if applicable)",
        "Hotel booking confirmation",
        "Return flight ticket",
      ],
    },
    {
      title: "Business Visa (30 Days)",
      price: "AED 450",
      processing: "4-5 working days",
      validity: "60 days to enter UAE",
      stay: "For business meetings and conferences",
      features: [
        "Company invitation letter",
        "Business license copy",
        "Bank statements (3 months)",
        "Hotel booking confirmation",
        "Professional photograph",
      ],
    },
    {
      title: "Family Visit Visa (90 Days)",
      price: "AED 650",
      processing: "5-7 working days",
      validity: "60 days to enter UAE",
      stay: "90 days from entry date",
      features: [
        "Family relationship proof",
        "Sponsor's Emirates ID and salary certificate",
        "Sponsor's bank statements",
        "Medical insurance",
        "Accommodation proof",
      ],
      isPopular: true,
    },
  ];

  const internationalVisas = [
    {
      title: "Schengen Visa",
      countries: "27 European Union countries",
      price: "AED 800-1,200",
      processing: "10-15 working days",
      validity: "90 days within 180-day period",
      features: [
        "Completed application form",
        "Travel itinerary and flight bookings",
        "Hotel reservations",
        "Travel insurance (minimum €30,000 coverage)",
        "Bank statements (6 months)",
        "Employment certificate and salary certificate",
      ],
    },
    {
      title: "USA Tourist Visa (B1/B2)",
      price: "AED 1,500 + embassy fees",
      processing: "3-6 weeks",
      validity: "Up to 10 years (multiple entry)",
      interview: "Required at US Consulate",
      features: [
        "DS-160 form completion",
        "Interview appointment scheduling",
        "Financial documents and bank statements",
        "Employment verification",
        "Travel purpose documentation",
        "Property ownership documents",
      ],
    },
    {
      title: "UK Visit Visa",
      price: "AED 1,200 + government fees",
      processing: "15-20 working days",
      validity: "6 months to 2 years",
      purpose: "Tourism, business, family visit",
      features: [
        "VAF1A application form",
        "Financial capability proof",
        "Accommodation arrangements",
        "Travel itinerary",
        "Employment and income proof",
        "Previous travel history",
      ],
    },
    {
      title: "Canada Visitor Visa",
      price: "AED 1,100 + processing fees",
      processing: "4-6 weeks",
      validity: "Up to 10 years",
      entry: "Multiple entries allowed",
      features: [
        "Online application (IMM 5257)",
        "Biometrics requirement",
        "Travel history and passport copies",
        "Financial support proof",
        "Medical examination (if required)",
        "Purpose of visit documentation",
      ],
    },
  ];

  const guarantees = [
    {
      icon: FileCheck,
      title: "Document Verification",
      description: "Free pre-submission document check",
    },
    {
      icon: Clock,
      title: "Application Tracking",
      description: "Online status updates throughout process",
    },
    {
      icon: FileCheck,
      title: "Interview Preparation",
      description: "Guidance for visa interviews when required",
    },
    {
      icon: DollarSign,
      title: "Refund Policy",
      description: "Full refund if visa rejected due to our error",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${visaImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-amber-900/50 via-orange-900/40 to-amber-950/55"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-medium text-primary-foreground mb-4 drop-shadow-lg">
            Visa Services
          </h1>
          <p className="text-base md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            Expert visa processing services for UAE and international destinations with 95%+ success rate
          </p>
        </div>
      </section>

      {/* UAE Visit Visas */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">UAE Visit Visas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fast and efficient visa processing for tourist, business, and family visits
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {uaeVisas.map((visa, index) => (
              <Card key={index} className={`relative hover:shadow-elegant transition-all duration-300 ${
                visa.isPopular ? "border-2 border-secondary" : ""
              }`}>
                <CardHeader>
                  <CardTitle className="text-xl">{visa.title}</CardTitle>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Price:</span>
                      <span className="text-2xl font-bold text-secondary">{visa.price}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Processing:</span>
                      <span className="text-sm font-medium">{visa.processing}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Validity:</span>
                      <span className="text-sm font-medium">{visa.validity}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Stay:</span>
                      <span className="text-sm font-medium">{visa.stay}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Required Documents:</h4>
                  <ul className="space-y-2 mb-6">
                    {visa.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground">• {feature}</li>
                    ))}
                  </ul>
                  <Button className="w-full" asChild>
                    <Link to="/contact">Apply Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* International Visas */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">International Visa Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive visa services for popular international destinations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {internationalVisas.map((visa, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl">{visa.title}</CardTitle>
                  {visa.countries && (
                    <p className="text-sm text-muted-foreground">Coverage: {visa.countries}</p>
                  )}
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-xs text-muted-foreground">Price</span>
                      <p className="text-lg font-bold text-secondary">{visa.price}</p>
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground">Processing Time</span>
                      <p className="text-sm font-medium">{visa.processing}</p>
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground">Validity</span>
                      <p className="text-sm font-medium">{visa.validity}</p>
                    </div>
                    {visa.interview && (
                      <div>
                        <span className="text-xs text-muted-foreground">Interview</span>
                        <p className="text-sm font-medium">{visa.interview}</p>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Required Documents:</h4>
                  <ul className="space-y-2 mb-6">
                    {visa.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground">• {feature}</li>
                    ))}
                  </ul>
                  <Button className="w-full" asChild>
                    <Link to="/contact">Get Consultation</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-4">Visa Processing Guarantee</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We ensure a smooth and hassle-free visa application process
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((item, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-card transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-medium mb-6">Need Help with Your Visa Application?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Our visa specialists are ready to assist you with expert guidance and support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">
                Get Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href="tel:+971527874282">Call +971 52 78 74 282</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisaServices;
