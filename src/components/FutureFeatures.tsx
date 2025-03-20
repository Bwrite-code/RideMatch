
import { Lock, CreditCard, History, Star, Volume2, Clock, Zap } from 'lucide-react';

const features = [
  {
    title: 'Ride Cost Splitting',
    description: 'Split bike fare with your ride partner easily.',
    icon: CreditCard,
    comingSoon: 'Coming Spring 2024'
  },
  {
    title: 'Saved Matching History',
    description: 'View your past ride matches and partner details.',
    icon: History,
    comingSoon: 'Coming Summer 2024'
  },
  {
    title: 'Ride Rating System',
    description: 'Rate partners for reliability and courtesy.',
    icon: Star,
    comingSoon: 'Coming Fall 2024'
  },
  {
    title: 'Audio Notifications',
    description: 'Get alerted when your ride match is found.',
    icon: Volume2,
    comingSoon: 'Coming Spring 2024'
  },
  {
    title: 'Auto Reset Availability',
    description: 'Automatically reset if no match is found.',
    icon: Clock,
    comingSoon: 'Coming Summer 2024'
  },
  {
    title: 'Interactive UI',
    description: 'Enjoy animated elements for better engagement.',
    icon: Zap,
    comingSoon: 'Coming Fall 2024'
  }
];

const FutureFeatures = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Future Features</h2>
          <p className="text-lg text-foreground/70">
            We're continuously working to improve your RideMatch experience with these upcoming features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="inactive-feature p-6 rounded-xl glass-card transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative z-20">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-primary">
                    <feature.icon size={24} />
                  </div>
                  <Lock size={18} className="text-foreground/40" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-foreground/70 mb-4">{feature.description}</p>
                <span className="inline-block text-sm font-medium text-primary/80 bg-primary/10 px-3 py-1 rounded-full">
                  {feature.comingSoon}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FutureFeatures;
