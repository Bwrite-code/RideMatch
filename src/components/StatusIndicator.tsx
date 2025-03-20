
import { useEffect, useState } from 'react';
import { CheckCircle, Clock, Search } from 'lucide-react';

interface StatusIndicatorProps {
  status: 'idle' | 'waiting' | 'matched' | 'connected' | 'disconnected';
}

const StatusIndicator = ({ status }: StatusIndicatorProps) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (status === 'waiting') {
      // Reset progress and animate
      setProgress(0);
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            return 0; // Reset the progress
          }
          return prev + 1;
        });
      }, 100);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [status]);
  
  const renderIcon = () => {
    switch (status) {
      case 'idle':
        return <Clock className="text-muted-foreground" />;
      case 'waiting':
        return (
          <div className="spinner"></div>
        );
      case 'matched':
        return <CheckCircle className="text-green-500" />;
      case 'connected':
        return <Search className="text-primary" />;
      case 'disconnected':
        return <Clock className="text-destructive" />;
      default:
        return null;
    }
  };
  
  const renderText = () => {
    switch (status) {
      case 'idle':
        return "Ready to find a ride";
      case 'waiting':
        return "Finding your ride partner...";
      case 'matched':
        return "Ride partner found!";
      case 'connected':
        return "Connected to RideMatch";
      case 'disconnected':
        return "Disconnected";
      default:
        return "";
    }
  };
  
  const renderDescription = () => {
    switch (status) {
      case 'idle':
        return "Click the button to start looking for a ride partner";
      case 'waiting':
        return "Please wait while we find you a ride partner";
      case 'matched':
        return "You've been matched with a ride partner!";
      case 'connected':
        return "Ready to match you with a ride partner";
      case 'disconnected':
        return "Please check your connection and try again";
      default:
        return "";
    }
  };
  
  return (
    <div className={`p-6 rounded-xl glass-card transition-all duration-300 ${status === 'matched' ? 'scale-105 shadow-lg' : ''}`}>
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 flex justify-center items-center h-20 w-20">
          {renderIcon()}
        </div>
        
        <h3 className={`text-xl font-semibold mb-2 ${status === 'matched' ? 'text-green-500' : ''}`}>
          {renderText()}
        </h3>
        
        <p className="text-foreground/70 mb-4">
          {renderDescription()}
        </p>
        
        {status === 'waiting' && (
          <div className="w-full max-w-xs mt-2">
            <div className="progress-bar">
              <div 
                className="h-full bg-primary rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatusIndicator;
