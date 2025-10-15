import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const serviceLinks = [
    { name: "Umrah Services", path: "/umrah" },
    { name: "Visa Services", path: "/visa" },
    { name: "Travel Services", path: "/travel" },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    let hideTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      
      // Clear existing timeout
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }

      // If at the top of the page (hero section)
      if (scrollTop < 50) {
        setIsScrolled(false);
        setIsVisible(true);
        return;
      }

      // When scrolled down past hero section
      // Set both states together to prevent glitch
      setIsScrolled(true);
      setIsVisible(true);

      // Start timer to hide navbar after 4 seconds of no scrolling
      hideTimeout = setTimeout(() => {
        setIsVisible(false);
      }, 4000);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (isServicesOpen && !(event.target as Element).closest('.services-dropdown')) {
        setIsServicesOpen(false);
      }
    };

    // Initial check on mount
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
    };
  }, [isServicesOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    } ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300' 
        : 'bg-transparent transition-all duration-300'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={logoImage} 
              alt="Dar al Asalah Tourism LLC" 
              className="w-20 h-20 object-contain"
            />
            <div className="hidden sm:block">
              <span className="font-montserrat text-xl font-semibold text-gray-900 drop-shadow-sm">Dar al Asalah</span>
              <p className="font-inter text-sm text-gray-600 drop-shadow-sm">Tourism LLC</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-inter px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? "bg-primary text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative services-dropdown">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`font-inter px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center space-x-1 ${
                  serviceLinks.some(link => isActive(link.path))
                    ? "bg-primary text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      onClick={() => setIsServicesOpen(false)}
                      className={`font-inter block px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                        isActive(service.path)
                          ? "bg-primary text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+971525257136" className="font-inter flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-800 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+971 52 52 57 136</span>
            </a>
            <Button variant="secondary" size="sm" asChild className="font-medium">
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`font-inter block px-4 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? "bg-primary text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`font-inter w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-all duration-300 flex items-center justify-between ${
                  serviceLinks.some(link => isActive(link.path))
                    ? "bg-primary text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="ml-4 mt-2 space-y-1">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      onClick={() => {
                        setIsOpen(false);
                        setIsServicesOpen(false);
                      }}
                      className={`font-inter block px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                        isActive(service.path)
                          ? "bg-primary text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <a
              href="tel:+971525257136"
              className="font-inter flex items-center space-x-2 px-4 py-3 text-sm text-gray-600 hover:text-gray-800 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+971 52 52 57 136</span>
            </a>
            <Button variant="secondary" className="w-full font-medium" asChild>
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;