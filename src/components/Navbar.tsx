import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/favicon.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "#", isDropdown: true },
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
      
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }

      if (scrollTop < 50) {
        setIsScrolled(false);
        setIsVisible(true);
        return;
      }

      setIsScrolled(true);
      setIsVisible(true);

      hideTimeout = setTimeout(() => {
        setIsVisible(false);
      }, 4000);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (isServicesOpen && !(event.target as Element).closest('.services-dropdown')) {
        setIsServicesOpen(false);
      }
      if (isMobileServicesOpen && !(event.target as Element).closest('.services-dropdown-mobile')) {
        setIsMobileServicesOpen(false);
      }
    };

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
  }, [isServicesOpen, isMobileServicesOpen]);

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
              className="w-16 h-16 object-contain"
            />
            <div className="hidden sm:block">
              <span className="text-xl font-medium text-gray-900 drop-shadow-sm tracking-tight">Dar al Asalah</span>
              <p className="text-sm text-gray-600 drop-shadow-sm font-light">Tourism LLC</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 ml-auto mr-24">
            {navLinks.map((link) => (
              link.isDropdown ? (
                <div key="services" className="relative services-dropdown group">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="relative text-gray-700 font-normal text-[15px] py-2 transition-colors duration-300 hover:text-gray-900 flex items-center space-x-1"
                  >
                    <span>Services</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    serviceLinks.some(s => isActive(s.path)) 
                      ? 'w-full' 
                      : 'w-0 group-hover:w-full'
                  }`}></span>
                  
                  {isServicesOpen && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          onClick={() => setIsServicesOpen(false)}
                          className={`block px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                            isActive(service.path)
                              ? "bg-primary text-white"
                              : "text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative text-gray-700 font-normal text-[15px] py-2 transition-colors duration-300 hover:text-gray-900 group"
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    isActive(link.path) 
                      ? 'w-full' 
                      : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button 
              size="sm" 
              asChild 
              className="bg-primary hover:bg-primary-dark text-white font-normal px-6 py-2 rounded-md transition-colors duration-300"
              data-testid="button-get-started"
            >
              <Link to="/contact">Get Started</Link>
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
              link.isDropdown ? (
                <div key="services-mobile" className="services-dropdown-mobile">
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className={`w-full text-left px-4 py-3 rounded-md text-sm font-normal transition-all duration-300 flex items-center justify-between ${
                      serviceLinks.some(s => isActive(s.path))
                        ? "bg-primary text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span>Services</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isMobileServicesOpen && (
                    <div className="ml-4 mt-2 space-y-1">
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          onClick={() => {
                            setIsOpen(false);
                            setIsMobileServicesOpen(false);
                          }}
                          className={`block px-4 py-2 rounded-md text-sm font-normal transition-all duration-300 ${
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
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-md text-sm font-normal transition-all duration-300 ${
                    isActive(link.path)
                      ? "bg-primary text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {link.name}
                </Link>
              )
            ))}
            
            <Button 
              className="w-full bg-primary hover:bg-primary-dark text-white font-normal" 
              asChild
              data-testid="button-mobile-get-started"
            >
              <Link to="/contact" onClick={() => setIsOpen(false)}>Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;