import { Target, Eye, Heart, Award, Users, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutUs = () => {
  const milestones = [
    { year: "2008", event: "Company establishment with visa services" },
    { year: "2012", event: "Expanded to Umrah pilgrimage packages" },
    { year: "2015", event: "Added international travel and hotel booking services" },
    { year: "2018", event: "Launched online booking platform" },
    { year: "2020", event: "Achieved certified travel agency status" },
    { year: "2023", event: "Introduced premium VIP travel services" },
  ];

  const coreValues = [
    {
      icon: Heart,
      title: "Integrity",
      description: "Honest and transparent business practices in all our dealings",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Commitment to superior service quality that exceeds expectations",
    },
    {
      icon: CheckCircle,
      title: "Reliability",
      description: "Dependable support throughout your entire journey",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Embracing technology for better customer experience",
    },
    {
      icon: Users,
      title: "Respect",
      description: "Cultural sensitivity and inclusive service approach",
    },
  ];

  const teamMembers = [
    {
      name: "Mr. Khalid Al-Asalah",
      position: "Managing Director",
      experience: "20+ years in travel and tourism industry",
      specialization: "Middle East and European travel",
      education: "Graduate in Business Administration",
    },
    {
      name: "Mrs. Amina Hassan",
      position: "Operations Manager",
      experience: "Expert in visa processing and documentation",
      specialization: "15 years experience in UAE immigration services",
      education: "Certified travel consultant",
    },
    {
      name: "Mr. Ahmed Rahman",
      position: "Umrah Services Director",
      experience: "Experienced Hajj and Umrah guide",
      specialization: "Fluent in Arabic, English, and Urdu",
      education: "12+ years in religious tourism",
    },
  ];

  const certifications = [
    "UAE Ministry of Economy: Licensed travel agency (#12345)",
    "IATA (International Air Transport Association): Accredited agent",
    "ATOL (Air Travel Organiser's Licence): Protected bookings",
    "Emirates Tourism Council: Certified member",
    "Sharjah Chamber of Commerce: Active member since 2008",
  ];

  const awards = [
    { year: "2022", award: "Best Travel Agency - Sharjah Tourism Awards" },
    { year: "2021", award: "Customer Excellence Award - UAE Travel Association" },
    { year: "2020", award: "Digital Innovation Award - Emirates Business Council" },
    { year: "2019", award: "Outstanding Service Award - Umrah Operators Association" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            About Dar al Asalah Tourism LLC
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Your trusted travel partner since 2008, serving thousands of clients with excellence and dedication
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From a small visa processing service to a comprehensive travel agency
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-foreground mb-8 leading-relaxed">
              Founded in 2008 in Sharjah, United Arab Emirates, Dar al Asalah Tourism LLC has grown into a comprehensive 
              travel agency serving thousands of clients annually. Our commitment to excellence and customer satisfaction 
              has established us as one of Sharjah's most trusted travel partners.
            </p>
            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-secondary-foreground">{milestone.year}</span>
                  </div>
                  <div className="flex-1 pt-5">
                    <p className="text-foreground text-lg">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-lg text-foreground leading-relaxed">
                  To provide exceptional travel experiences and seamless visa services while maintaining the highest 
                  standards of professionalism, integrity, and customer care. We are committed to making travel dreams 
                  accessible and spiritual journeys memorable.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-lg text-foreground leading-relaxed">
                  To become the leading travel agency in the UAE, recognized for innovation, reliability, and excellence 
                  in customer service while facilitating meaningful connections between people and places across the globe.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Management Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to your travel success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground text-center mb-1">{member.name}</h3>
                  <p className="text-secondary text-center font-medium mb-4">{member.position}</p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• {member.experience}</p>
                    <p>• {member.specialization}</p>
                    <p>• {member.education}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      {/* <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Certifications & Licenses</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Officially recognized and accredited by leading authorities
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-card border border-border rounded-lg animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Awards */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Awards & Recognition</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Celebrating excellence in travel services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {awards.map((award, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-card border border-border rounded-lg hover:shadow-card transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-8 h-8 text-secondary-foreground" />
                </div>
                <div>
                  <p className="text-secondary font-bold text-lg mb-1">{award.year}</p>
                  <p className="text-foreground font-medium">{award.award}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Family of Satisfied Travelers</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Experience the difference that 15+ years of expertise makes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-secondary text-secondary-foreground rounded-md font-medium hover:shadow-gold transition-all duration-300">
              Contact Us Today
            </a>
            <a href="tel:+971525257136" className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary-foreground bg-transparent text-primary-foreground rounded-md font-medium hover:bg-primary-foreground hover:text-primary transition-all duration-300">
              Call +971 52 52 57 136
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
