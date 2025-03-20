
// This is a mock WebSocket service since we don't have an actual backend
// In a real implementation, this would connect to a real WebSocket server

type StatusCallback = (status: string) => void;
type MatchCallback = (partnerId: string) => void;

class WebSocketService {
  private ws: WebSocket | null = null;
  private isConnected: boolean = false;
  private statusCallback: StatusCallback | null = null;
  private matchCallback: MatchCallback | null = null;
  private reconnectInterval: number = 2000;
  private reconnectAttempts: number = 0;
  private maxReconnectAttempts: number = 5;
  
  // Simulated student queue for demo purposes
  private studentQueue: string[] = [];
  private timerId: NodeJS.Timeout | null = null;
  
  // Connect to the WebSocket server
  connect() {
    // In a real app, this would be a real WebSocket connection
    // For the demo, we'll simulate a connection
    console.log("Attempting to connect to WebSocket server...");
    
    // Simulate connection establishment
    setTimeout(() => {
      this.isConnected = true;
      console.log("WebSocket connected");
      
      if (this.statusCallback) {
        this.statusCallback('connected');
      }
      
      // Reset reconnect attempts on successful connection
      this.reconnectAttempts = 0;
    }, 1000);
    
    return this;
  }
  
  // Disconnect from the WebSocket server
  disconnect() {
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
    
    this.isConnected = false;
    console.log("WebSocket disconnected");
    
    if (this.statusCallback) {
      this.statusCallback('disconnected');
    }
    
    return this;
  }
  
  // Register for ride matching
  findRide(studentId: string) {
    if (!this.isConnected) {
      console.error("Cannot find ride: WebSocket not connected");
      return;
    }
    
    console.log(`Student ${studentId} is looking for a ride...`);
    
    if (this.statusCallback) {
      this.statusCallback('waiting');
    }
    
    // Simulate the matching process
    this.studentQueue.push(studentId);
    console.log("Current queue:", this.studentQueue);
    
    // If we have 2 or more students, match them
    if (this.studentQueue.length >= 2) {
      const partnerId = this.studentQueue.shift(); // First student
      this.studentQueue.shift(); // Remove current student
      
      console.log(`Match found! Pairing ${studentId} with ${partnerId}`);
      
      // Simulate network delay for the match
      this.timerId = setTimeout(() => {
        if (this.statusCallback) {
          this.statusCallback('matched');
        }
        
        if (this.matchCallback && partnerId) {
          this.matchCallback(partnerId);
        }
      }, 2000);
    } else {
      // No match yet, simulate a random match after some time
      this.timerId = setTimeout(() => {
        // Generate a random partner ID
        const partnerId = `student_${Math.floor(Math.random() * 1000)}`;
        
        console.log(`Match found! Pairing ${studentId} with ${partnerId}`);
        
        if (this.statusCallback) {
          this.statusCallback('matched');
        }
        
        if (this.matchCallback) {
          this.matchCallback(partnerId);
        }
        
        // Remove student from queue
        const index = this.studentQueue.indexOf(studentId);
        if (index > -1) {
          this.studentQueue.splice(index, 1);
        }
      }, 5000 + Math.floor(Math.random() * 5000)); // Random time between 5-10 seconds
    }
    
    return this;
  }
  
  // Cancel finding a ride
  cancelFind(studentId: string) {
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
    
    // Remove from queue
    const index = this.studentQueue.indexOf(studentId);
    if (index > -1) {
      this.studentQueue.splice(index, 1);
      console.log(`Student ${studentId} removed from queue`);
    }
    
    if (this.statusCallback) {
      this.statusCallback('idle');
    }
    
    return this;
  }
  
  // Set status callback
  onStatusChange(callback: StatusCallback) {
    this.statusCallback = callback;
    return this;
  }
  
  // Set match callback
  onMatch(callback: MatchCallback) {
    this.matchCallback = callback;
    return this;
  }
}

// Create singleton instance
const websocketService = new WebSocketService();

export default websocketService;
