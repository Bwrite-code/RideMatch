
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FutureFeatures from '../components/FutureFeatures';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Features Overview */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How RideMatch Works</h2>
            <p className="text-lg text-foreground/70">
              Our real-time matching system connects students looking to share rides in just a few simple steps.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 rounded-xl glass-card text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Request a Ride</h3>
              <p className="text-foreground/70">
                Click the "Find a Ride" button to indicate you're looking for a ride partner.
              </p>
            </div>
            
            <div className="p-6 rounded-xl glass-card text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Matching</h3>
              <p className="text-foreground/70">
                Our system automatically matches you with another available student in real-time.
              </p>
            </div>
            
            <div className="p-6 rounded-xl glass-card text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Ride Together</h3>
              <p className="text-foreground/70">
                Connect with your match and coordinate your ride details easily.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <FutureFeatures />
      
      {/* Footer */}
      <footer className="bg-white py-12 border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-2xl font-bold text-gradient">RideMatch</span>
              <p className="text-foreground/70 mt-2">Connecting students for shared rides.</p>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="https://wa.me/+2349120744751" className="text-foreground/70 hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-foreground/60 text-sm">
            <p>© 2025 Technokwrite. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
