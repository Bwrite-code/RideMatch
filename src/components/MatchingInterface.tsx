
import { useState, useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';
import StatusIndicator from './StatusIndicator';
import websocketService from '../services/websocket';

const users = [
  {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    phone: "+1234567890",
    memberSince: "2024-05-10",
  },
  {
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "+1987654321",
    memberSince: "2023-11-22",
  },
  {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    phone: "+1122334455",
    memberSince: "2025-01-15",
  },
  {
    name: "Bob Lee",
    email: "bob.lee@example.com",
    phone: "+1098765432",
    memberSince: "2024-08-30",
  },
  {
    name: "Maria Garcia",
    email: "maria.garcia@example.com",
    phone: "+1230984567",
    memberSince: "2025-03-05",
  },
  {
    name: "Samuel Okoro",
    email: "samuel.okoro@example.com",
    phone: "+2348012345678",
    memberSince: "2025-04-12",
  },
];

const MatchingInterface = () => {
  const [status, setStatus] = useState<'idle' | 'waiting' | 'matched' | 'connected' | 'disconnected'>('idle');
  const [partnerId, setPartnerId] = useState<string | null>(null);
  const [studentId] = useState(users[0].name);
  
  useEffect(() => {
    // Setup WebSocket service
    websocketService
      .onStatusChange(newStatus => {
        setStatus(newStatus as any);
      })
      .onMatch(newPartnerId => {
        setPartnerId(newPartnerId);
      })
      .connect();
    
    return () => {
      websocketService.disconnect();
    };
  }, []);
  
  const handleFindRide = () => {
    if (status === 'idle' || status === 'connected') {
      websocketService.findRide(studentId);
    } else if (status === 'waiting') {
      websocketService.cancelFind(studentId);
    } else if (status === 'matched') {
      // Reset the state
      setStatus('idle');
      setPartnerId(null);
    }
  };
  
  const getBtnText = () => {
    switch (status) {
      case 'idle':
      case 'connected':
        return "Find a Ride";
      case 'waiting':
        return "Cancel";
      case 'matched':
        return "Find Another Ride";
      case 'disconnected':
        return "Reconnect";
      default:
        return "Find a Ride";
    }
  };
  
  return (
    <div className="max-w-md mx-auto w-full">
      <StatusIndicator status={status} />
      
      {status === 'matched' && (
        <div className="mt-6 p-6 rounded-xl glass-card animate-scale-in">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-500 mr-3">
              <CheckCircle2 size={20} />
            </div>
            <h3 className="text-lg font-semibold">Ride Match Details</h3>
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg mb-2">
              <span className="text-sm text-foreground/70">Partner Name</span>
              <span className="font-medium">Ruth Ugeuanyi</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg mb-2">
              <span className="text-sm text-foreground/70">Your Name</span>
              <span className="font-medium">Idowu Bright</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
              <span className="text-sm text-foreground/70">Status</span>
              <span className="font-medium text-green-500">Ready to ride</span>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-foreground/70 text-sm mb-2">
              Connect with your partner to arrange your ride details.
            </p>
            <a
              href="https://wa.me/message/WRKVTQEHQOJQB1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-hover-effect glass-button py-3 rounded-lg font-medium text-white inline-block text-center"
            >
              Contact Partner
            </a>
          </div>
        </div>
      )}
      
      <div className="mt-6">
        <button 
          onClick={handleFindRide}
          className={`w-full btn-hover-effect py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
            status === 'waiting' 
              ? 'bg-destructive/90 hover:bg-destructive text-destructive-foreground' 
              : status === 'matched'
                ? 'glass-button text-white'
                : 'glass-button text-white'
          }`}
        >
          {status === 'waiting' && <X size={18} />}
          {getBtnText()}
        </button>
      </div>
    </div>
  );
};

export default MatchingInterface;
