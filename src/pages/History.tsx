import Navbar from '../components/Navbar';
import React from "react";

const History: React.FC = () => {
  // Example: Replace with real ride history data fetching
  const rides = [
    { id: 1, date: "2025-08-01", from: "Downtown", to: "Airport", status: "Completed" },
    { id: 2, date: "2025-07-28", from: "Mall", to: "University", status: "Cancelled" },
    { id: 3, date: "2025-07-25", from: "Library", to: "Stadium", status: "Completed" },
    { id: 4, date: "2025-07-20", from: "Hostel", to: "Market", status: "Completed" },
    { id: 5, date: "2025-07-15", from: "Park", to: "Cinema", status: "Cancelled" },
    { id: 6, date: "2025-07-10", from: "Cafeteria", to: "Gym", status: "Completed" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-4xl font-extrabold mb-4 text-primary">Ride History</h1>
            <p className="text-lg text-foreground/70 mb-8">View your past ride matches and statuses.</p>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {rides.map(ride => (
              <li key={ride.id} className="rounded-xl glass-card p-6 shadow-lg border border-blue-100 hover:border-primary transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-blue-700">{ride.date}</span>
                  <span className={`px-2 py-1 rounded text-xs font-bold ${ride.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{ride.status}</span>
                </div>
                <div className="text-foreground/80 mb-1"><strong>From:</strong> {ride.from}</div>
                <div className="text-foreground/80"><strong>To:</strong> {ride.to}</div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default History;
