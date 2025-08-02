import Navbar from '../components/Navbar';
import React from "react";

const Profile: React.FC = () => {
  // Example: Replace with real user profile data fetching
  const users = [
    {
      name: "Ruth Ugeuanyi",
      email: "ugeuanyiruth@gmail.com",
      phone: "+2349120744751",
      memberSince: "2024-05-10",
    },
    {
      name: "Ojo Olawale",
      email: "ojoolawale@gmail.com",
      phone: "+2349120744751",
      memberSince: "2023-11-22",
    },
    {
      name: "Ajayi Ayomide",
      email: "ajayiayomide@gmail.com",
      phone: "+2349120744751",
      memberSince: "2025-01-15",
    },
    {
      name: "Odufa Favour",
      email: "favourodufa@gmail.com",
      phone: "+2349120744751",
      memberSince: "2024-08-30",
    },
    {
      name: "Christine Okechukwu",
      email: "okechukwuchristine@gmail.com",
      phone: "+2349120744751",
      memberSince: "2025-03-05",
    },
    {
      name: "Samuel Okoro",
      email: "samuel.okoro@gmail.com",
      phone: "+2349120744751",
      memberSince: "2025-04-12",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-4xl font-extrabold mb-4 text-primary">Profile</h1>
            <p className="text-lg text-foreground/70 mb-8">Manage your account details and view your membership info.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {users.map((user, idx) => (
              <div key={idx} className="glass-card p-8 rounded-xl shadow-lg border border-blue-100 flex flex-col items-center">
                <div className="mb-4 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-2xl font-bold text-primary">
                    {user.name[0]}
                  </div>
                </div>
                <div className="mb-2 text-lg font-semibold text-blue-700">{user.name}</div>
                <div className="mb-2 text-foreground/80"><strong>Email:</strong> {user.email}</div>
                <div className="mb-2 text-foreground/80"><strong>Phone:</strong> {user.phone}</div>
                <div className="text-foreground/70"><strong>Member Since:</strong> {user.memberSince}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
