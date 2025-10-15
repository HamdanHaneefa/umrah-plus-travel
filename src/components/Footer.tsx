import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import logoImage from "@/assets/favicon.png";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Umrah Services", path: "/umrah" },
    { name: "Visa Services", path: "/visa" },
    { name: "Travel Services", path: "/travel" },
  ];

  const services = [
    "Umrah Packages",
    "UAE Visit Visas",
    "International Visas",
    "Flight Bookings",
    "Hotel Reservations",
    "Travel Insurance",
  ];

  return (
    <footer className="bg-gradient-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Footer */}
        <div className="hidden lg:block py-8">
          {/* First Row - Logo, Social Icons, Legal Links */}
          <div className="flex items-center justify-between mb-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex-shrink-0">
                <img
                  src={logoImage}
                  alt="Dar al Asalah Tourism LLC"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="font-montserrat text-base font-semibold">Dar al Asalah</div>
                <div className="font-inter text-sm opacity-90">Tourism LLC</div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-8">
              <a href="#" className="font-inter text-sm opacity-75 hover:opacity-100 transition-opacity whitespace-nowrap">
                Privacy Policy
              </a>
              <a href="#" className="font-inter text-sm opacity-75 hover:opacity-100 transition-opacity whitespace-nowrap">
                Terms and Conditions
              </a>
            </div>
          </div>

          {/* Second Row - Main Navigation */}
          <nav className="flex items-center justify-center gap-10 pt-4 border-t border-primary-foreground/10">
            {quickLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="font-inter text-sm font-medium hover:opacity-80 transition-opacity whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/about"
              className="font-inter text-sm font-medium hover:opacity-80 transition-opacity whitespace-nowrap"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="font-inter text-sm font-medium hover:opacity-80 transition-opacity whitespace-nowrap"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Mobile Footer */}
        <div className="lg:hidden py-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10">
                <img
                  src={logoImage}
                  alt="Dar al Asalah Tourism LLC"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="font-montserrat text-sm font-semibold">Dar al Asalah</div>
                <div className="font-inter text-xs opacity-90">Tourism LLC</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <a href="#" className="w-8 h-8 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <nav className="grid grid-cols-2 gap-3 mb-6">
            {quickLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="font-inter text-sm font-medium hover:opacity-80 transition-opacity"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/about"
              className="font-inter text-sm font-medium hover:opacity-80 transition-opacity"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="font-inter text-sm font-medium hover:opacity-80 transition-opacity"
            >
              Contact
            </Link>
          </nav>

          <div className="pt-4 border-t border-primary-foreground/20">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a href="#" className="font-inter text-sm opacity-75 hover:opacity-100 transition-opacity">
                Privacy Policy
              </a>
              <a href="#" className="font-inter text-sm opacity-75 hover:opacity-100 transition-opacity">
                Terms and Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;