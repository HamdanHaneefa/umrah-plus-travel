import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Sharjah Office",
      details: ["Shop # 02 and 03, Industrial 15, Maliha Road, Industrial Area 15, Sharjah, UAE"],
      type: "address",
      link: "https://www.google.com/maps/place/DAR+AL+ASALAH+TOURISM+LLC/@25.2906294,55.4439761,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f5f002b85f161:0x40eff993c97df802!8m2!3d25.2906294!4d55.4439761!16s%2Fg%2F11smd19m5d",
    },
    {
      icon: MapPin,
      title: "Ajman Office",
      details: ["Shop # 01, Amr Ibn El Ass Street, Near Lucky Roundabout, Industrial Area 2, Ajman, UAE"],
      type: "address",
      link: "https://www.google.com/maps/place/Dar+Al+Asalah+Tourism/@25.3926445,55.4799646,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f5779e025a1cd:0x3f3eeb547f1a3f8e!8m2!3d25.3926445!4d55.4799646!16s%2Fg%2F11smd19m5d",
    },
    {
      icon: MapPin,
      title: "Pakistan Office",
      details: ["Shop No/2 First Floor, Ch. Tanveer Plaza, Jangi Chowk, Hasilpur, Pakistan"],
      type: "address",
      link: "https://www.google.com/maps/place/Dar+Al+Asalah+Tourism+LLC/@29.6927823,72.6548182,17z/data=!3m1!4b1!4m6!3m5!1s0x3922b7c1c7777777:0x3922b7c1c7777777!8m2!3d29.6927823!4d72.6548182!16s%2Fg%2F11smd19m5d",
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
      details: ["All Days: 9:00 AM - 11:30 PM"],
      type: "hours",
    },
  ];

  const handleContactClick = (type: string, link?: string) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
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
              <div className="text-lg text-muted-foreground">
                Please use our service-specific forms in the respective service pages for bookings and quotes:
                <ul className="list-disc ml-6 mt-4 space-y-2">
                  <li><Link to="/travel" className="text-primary hover:underline">Flight & Hotel Bookings</Link></li>
                  <li><Link to="/umrah" className="text-primary hover:underline">Umrah Services</Link></li>
                  <li><Link to="/visa" className="text-primary hover:underline">Visa Services</Link></li>
                </ul>
                <p className="mt-6">For general inquiries, please use our contact information provided.</p>
              </div>
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