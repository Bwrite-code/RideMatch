
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const inactiveFeatureAlert = (featureName: string) => {
    alert(`${featureName} will be available in a future update.`);
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-gradient">RideMatch</span>
        </Link>
        
        {/* Desktop menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`font-medium transition-colors duration-200 ${
              location.pathname === '/' ? 'text-primary' : 'text-foreground/80 hover:text-primary'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/ride-match" 
            className={`font-medium transition-colors duration-200 ${
              location.pathname === '/ride-match' ? 'text-primary' : 'text-foreground/80 hover:text-primary'
            }`}
          >
            Find a Ride
          </Link>
          <button 
            onClick={() => inactiveFeatureAlert('History')}
            className="font-medium text-foreground/60 cursor-not-allowed"
          >
            History
          </button>
          <button 
            onClick={() => inactiveFeatureAlert('Profile')}
            className="font-medium text-foreground/60 cursor-not-allowed"
          >
            Profile
          </button>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md animate-slide-down">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`font-medium py-2 transition-colors duration-200 ${
                location.pathname === '/' ? 'text-primary' : 'text-foreground/80'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/ride-match" 
              className={`font-medium py-2 transition-colors duration-200 ${
                location.pathname === '/ride-match' ? 'text-primary' : 'text-foreground/80'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Find a Ride
            </Link>
            <button 
              onClick={() => {
                inactiveFeatureAlert('History');
                setIsMenuOpen(false);
              }}
              className="font-medium py-2 text-left text-foreground/60 cursor-not-allowed"
            >
              History
            </button>
            <button 
              onClick={() => {
                inactiveFeatureAlert('Profile');
                setIsMenuOpen(false);
              }}
              className="font-medium py-2 text-left text-foreground/60 cursor-not-allowed"
            >
              Profile
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
