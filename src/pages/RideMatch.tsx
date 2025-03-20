
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import MatchingInterface from '../components/MatchingInterface';

const RideMatch = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold mb-4">Find Your Ride Partner</h1>
              <p className="text-lg text-foreground/70">
                Our real-time matching system will connect you with another student looking to share a ride.
              </p>
            </div>
            
            <MatchingInterface />
            
            <div className="mt-12 p-6 rounded-xl glass-card">
              <h3 className="text-xl font-semibold mb-4">How It Works</h3>
              
              <ol className="space-y-4">
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-primary font-medium">
                    1
                  </div>
                  <div>
                    <p className="text-foreground/80">
                      Click the <strong>"Find a Ride"</strong> button to indicate you're available for a ride.
                    </p>
                  </div>
                </li>
                
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-primary font-medium">
                    2
                  </div>
                  <div>
                    <p className="text-foreground/80">
                      Wait while our system matches you with another available student. You can cancel at any time.
                    </p>
                  </div>
                </li>
                
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-primary font-medium">
                    3
                  </div>
                  <div>
                    <p className="text-foreground/80">
                      When matched, you'll receive your partner's details. Connect with them to arrange your ride.
                    </p>
                  </div>
                </li>
                
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-primary font-medium">
                    4
                  </div>
                  <div>
                    <p className="text-foreground/80">
                      After your ride, you can return to find another ride partner when needed.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="py-6 border-t border-border bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-foreground/60 text-sm">
            © {new Date().getFullYear()} RideMatch. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default RideMatch;
