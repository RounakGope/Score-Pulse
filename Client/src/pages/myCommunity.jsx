import React, { useState, useEffect } from 'react';
import Header from '../components/header';

// ==========================================
// 1. MOCK DATA SERVICE
// ==========================================
const COMMUNITY_DATA = {
  // Current User's Club Info
  myClub: {
    id: 5,
    name: "FC Barcelona",
    logo: "https://media.api-sports.io/football/teams/529.png",
    isMatchLive: true, 
    // DYNAMIC IMAGE: Only the stadium needs to be specific to the club now
    stadiumImage: "https://images.unsplash.com/photo-1563299796-b729d0af54a5?auto=format&fit=crop&w=800&q=80" // Camp Nou
  },

  // The 3 Main Chat Modules
  chatModules: [
    {
      id: 'global',
      title: "Global Chat",
      type: "public",
      // GENERIC IMAGE: Group of fans / Atmosphere
      image: "https://images.unsplash.com/photo-1504159506876-7949514619cd?auto=format&fit=crop&w=800&q=80", 
      description: "Connect with football fans worldwide"
    },
    {
      id: 'private',
      title: "Private Chat",
      type: "private",
      // GENERIC IMAGE: Modern Locker Room
      image: "https://www.fcbarcelona.com/en/news/3004483/fantastic-party-atmosphere-at-the-spotify-camp-nou", 
      description: "Exclusive squad discussions"
    },
    {
      id: 'matchday',
      title: "MatchDay Chat",
      type: "live",
      // Dynamic: set to null here, we will load myClub.stadiumImage in the component
      image: "https://www.barcelona-tickets.com/camp-nou-tour/camp-nou-facts/", 
      description: "Live reaction zone"
    }
  ],

  // Right Sidebar Data
  worldWideCommunities: [
    { id: 1, name: "Liverpool", logo: "https://media.api-sports.io/football/teams/40.png" },
    { id: 2, name: "Man City", logo: "https://media.api-sports.io/football/teams/50.png" },
    { id: 3, name: "Juventus", logo: "https://media.api-sports.io/football/teams/496.png" },
    { id: 4, name: "Bayern", logo: "https://media.api-sports.io/football/teams/48.png" },
    { id: 5, name: "PSG", logo: "https://media.api-sports.io/football/teams/85.png" },
  ]
};

const apiService = {
  getData: async () => new Promise(resolve => setTimeout(() => resolve(COMMUNITY_DATA), 500))
};

// ==========================================
// 2. MAIN COMPONENT
// ==========================================
export default function MyCommunity ()  {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiService.getData().then((response) => {
      setData(response);
      setLoading(false);
    });
  }, []);

  const handleNavigation = (path) => {
    console.log(`Navigating to: ${path}`);
  };

  const handleCommunityVisit = (clubName) => {
    console.log(`Visiting community: ${clubName}`);
  };

  if (loading) return <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-white">Loading Community...</div>;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-orange-500 selection:text-black">
      <Header />

      <main className="max-w-7xl mx-auto p-6 pt-8">
        
        {/* Page Header */}
        <div className="flex items-center gap-4 mb-10 border-b border-neutral-800 pb-6 animate-fade-in">
          <img src={data.myClub.logo} alt="My Club" className="w-16 h-16 object-contain drop-shadow-lg" />
          <div>
            <h1 className="text-3xl font-light text-white tracking-tight">myCommunity</h1>
            <p className="text-neutral-500 text-sm font-medium uppercase tracking-widest">
              {data.myClub.name}
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* --- LEFT SECTION: CHAT CARDS --- */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.chatModules.map((chat) => {
              const isMatchDay = chat.id === 'matchday';
              const isLocked = isMatchDay && !data.myClub.isMatchLive;
              
              // LOGIC: If it's MatchDay, use the Club's Specific Stadium, otherwise use the Generic Image
              const bgImage = isMatchDay ? data.myClub.stadiumImage : chat.image;

              return (
                <div 
                  key={chat.id}
                  onClick={() => !isLocked && handleNavigation(chat.id)}
                  className={`
                    relative h-[500px] rounded-3xl overflow-hidden group border border-neutral-800 transition-all duration-500
                    ${isLocked ? 'cursor-not-allowed opacity-60 grayscale' : 'cursor-pointer hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]'}
                  `}
                >
                  {/* Background Image */}
                  <img 
                    src={bgImage} 
                    alt={chat.title} 
                    className={`
                      absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out
                      ${!isLocked && 'group-hover:scale-110'}
                    `} 
                  />
                  
                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-70"></div>

                  {/* Status Badges */}
                  <div className="absolute top-4 right-4">
                    {isMatchDay && data.myClub.isMatchLive && (
                       <span className="bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest animate-pulse shadow-lg">
                         Live
                       </span>
                    )}
                    {isLocked && (
                       <span className="bg-neutral-800 text-neutral-400 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-neutral-600">
                         Offline
                       </span>
                    )}
                  </div>

                  {/* Text Content */}
                  <div className="absolute bottom-0 left-0 p-8 w-full transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                    <h2 className={`text-2xl font-bold mb-2 ${!isLocked && 'group-hover:text-orange-500'} transition-colors`}>
                      {chat.title}
                    </h2>
                    <p className="text-sm text-neutral-400 font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 transform translate-y-4 group-hover:translate-y-0">
                      {isLocked ? "Chat opens 1 hour before kick-off." : chat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* --- RIGHT SECTION: SIDEBAR (Community Worldwide) --- */}
          <div className="w-full lg:w-80 flex flex-col gap-6 relative">
             <div className="hidden lg:block absolute -left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-neutral-800 to-transparent"></div>

            <div className="mb-4">
              <h3 className="text-2xl font-light text-right text-white">Community</h3>
              <h3 className="text-2xl font-light text-right text-neutral-500">WorldWide</h3>
            </div>

            <div className="flex flex-col gap-3">
              {data.worldWideCommunities.map((club) => (
                <div 
                  key={club.id}
                  onClick={() => handleCommunityVisit(club.name)}
                  className="group flex items-center justify-between bg-[#141414] hover:bg-[#1e1e1e] border border-neutral-800 hover:border-orange-500/30 p-4 rounded-xl cursor-pointer transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                     <img src={club.logo} alt={club.name} className="w-10 h-10 object-contain grayscale group-hover:grayscale-0 transition-all duration-300" />
                     <div className="flex flex-col">
                        <span className="text-xs text-neutral-500 font-bold uppercase tracking-wider group-hover:text-orange-500 transition-colors">View</span>
                        <span className="text-sm font-semibold text-white">{club.name}</span>
                     </div>
                  </div>
                  <span className="text-neutral-600 group-hover:text-white transform group-hover:translate-x-1 transition-all">
                    →
                  </span>
                </div>
              ))}
              
              {[...Array(2)].map((_, i) => (
                <div key={i} className="h-[74px] bg-[#111] rounded-xl border border-neutral-800/50 border-dashed opacity-50"></div>
              ))}
            </div>

          </div>

        </div>
      </main>
    </div>
  );
};
