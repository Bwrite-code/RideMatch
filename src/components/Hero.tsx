
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] pt-24 overflow-hidden flex items-center">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-white -z-10"
        aria-hidden="true"
      />
      
      {/* Decorative elements */}
      <div 
        className="absolute top-[20%] right-[15%] w-64 h-64 bg-blue-300/20 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-[10%] left-[10%] w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl"
        aria-hidden="true"
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 animate-fade-in">
              New for Students
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <span className="text-gradient">Find Your Ride </span> 
            <span className="block">Partner in Seconds</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            RideMatch connects students looking to share bike rides instantly. Save money, reduce your carbon footprint, and make connections with our real-time matching system.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Link 
              to="/ride-match"
              className="btn-hover-effect glass-button px-8 py-3 rounded-full font-medium text-white flex items-center justify-center gap-2 group"
            >
              Find a Ride
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            
            <button 
              onClick={() => alert('Learn more features will be available in a future update.')}
              className="px-8 py-3 rounded-full font-medium border border-primary/30 text-primary/90 hover:bg-primary/5 transition-colors duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
