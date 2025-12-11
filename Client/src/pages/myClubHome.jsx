import React, { useState, useEffect } from 'react';
import Header from '../components/header';

// ==========================================
// 1. MOCK DATA
// ==========================================
const CLUB_DATA = {
  id: 5,
  name: "Real Madrid",
  league: "La Liga",
  position: "1st",
  logo: "https://media.api-sports.io/football/teams/541.png",
  manager: {
    name: "Xabi Alonso",
    nationality: "Spain",
    formation: "4-3-3",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Xabi_Alonso_Bayer_Leverkusen.jpg/800px-Xabi_Alonso_Bayer_Leverkusen.jpg"
  },
  fixtures: [
    { id: 1, opponent: "Barcelona", date: "24 Oct", venue: "H", logo: "https://media.api-sports.io/football/teams/529.png" },
    { id: 2, opponent: "Valencia", date: "30 Oct", venue: "A", logo: "https://media.api-sports.io/football/teams/532.png" },
    { id: 3, opponent: "AC Milan", date: "05 Nov", venue: "H", logo: "https://media.api-sports.io/football/teams/489.png" },
    { id: 4, opponent: "Osasuna", date: "09 Nov", venue: "H", logo: "https://media.api-sports.io/football/teams/531.png" },
  ],
  news: [
    { id: 1, title: "Statement: Club announces new stadium plans", image: "https://images.unsplash.com/photo-1486286701208-1d58e9338013?auto=format&fit=crop&w=500&q=60" },
    { id: 2, title: "Training: Preparing for the weekend clash", image: "https://images.unsplash.com/photo-1522778119026-d647f0565c6a?auto=format&fit=crop&w=500&q=60" },
    { id: 3, title: "Academy: U19s reach the final", image: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?auto=format&fit=crop&w=500&q=60" },
  ],
  squad: [
    "https://media.api-sports.io/football/players/278.png", // Vini
    "https://media.api-sports.io/football/players/757.png", // Mbappe
    "https://www.gettyimages.in/photos/real-madrid", // Rodrygo
    "https://media.api-sports.io/football/players/735.png", // Bellingham
    "https://media.api-sports.io/football/players/44.png",  // Valverde
    "https://media.api-sports.io/football/players/732.png", // Camavinga
  ]
};

// ==========================================
// 2. COMPONENT
// ==========================================
export default function MyClubHome () {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleNavigation = (path) => console.log(`Navigating to ${path}...`);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-200 font-sans selection:bg-orange-500 selection:text-black">
      
      <Header />

      <main className="max-w-7xl mx-auto p-6 space-y-10 pt-8">
        
        {/* --- 1. CLUB IDENTITY HEADER --- */}
        <div className="flex flex-col md:flex-row items-end justify-between border-b border-neutral-800 pb-8 gap-6 animate-fade-in">
          
          {/* Club Info */}
          <div className="flex items-center gap-8">
            {/* Logo Container - Clean White Backdrop for Color Accuracy */}
            <div className="w-28 h-28 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 shadow-2xl backdrop-blur-sm p-4 hover:border-orange-500/50 transition-colors duration-500">
              <img 
                src={CLUB_DATA.logo} 
                alt="Club Logo" 
                className="w-full h-full object-contain drop-shadow-lg" 
              />
            </div>
            <div>
              <h1 className="text-5xl font-light tracking-tighter text-white mb-2">{CLUB_DATA.name}</h1>
              <div className="flex items-center gap-3 text-sm font-bold text-neutral-500 uppercase tracking-widest">
                <span className="text-orange-500">{CLUB_DATA.league}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-700"></span>
                <span className="text-white">{CLUB_DATA.position} Place</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 w-full md:w-auto">
            <button 
              onClick={() => handleNavigation('standings')}
              className="group flex-1 md:flex-none px-8 py-3 bg-neutral-900 border border-neutral-800 text-sm font-medium uppercase tracking-wider transition-all hover:border-orange-500/50 hover:text-white"
            >
              Standings
            </button>
            <button 
              onClick={() => handleNavigation('community')}
              className="flex-1 md:flex-none px-8 py-3 bg-white hover:bg-orange-500 text-black text-sm font-bold uppercase tracking-wider transition-all duration-300 border border-white hover:border-orange-500"
            >
              Community
            </button>
          </div>
        </div>


        {/* --- 2. THREE COLUMN LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* === LEFT: FIXTURES (3 cols) === */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h3 className="text-lg font-light text-neutral-400 border-l-2 border-orange-500 pl-3">myFixtures</h3>
            
            <div className="flex flex-col gap-3">
              {CLUB_DATA.fixtures.map((match) => (
                <div 
                  key={match.id} 
                  className="group relative flex items-center justify-between p-4 rounded-xl bg-neutral-900/40 border border-neutral-800 hover:border-orange-500/60 hover:bg-neutral-900 transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                  <div className="flex flex-col z-10">
                    <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-1">{match.venue === 'H' ? 'Home' : 'Away'}</span>
                    <span className="text-sm font-semibold text-white group-hover:text-orange-400 transition-colors">
                      {match.opponent}
                    </span>
                  </div>
                  
                  <div className="flex flex-col items-end z-10">
                     <span className="text-xs text-neutral-400 font-mono mb-2">{match.date}</span>
                     {/* Logo keeps original color */}
                     <img src={match.logo} alt="Opponent" className="w-8 h-8 object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
              ))}
              <button className="mt-2 text-xs text-neutral-500 hover:text-orange-400 transition-colors text-left uppercase tracking-widest font-bold">
                View Full Calendar →
              </button>
            </div>
          </div>


          {/* === CENTER: NEWS (5 cols) === */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="text-lg font-light text-neutral-400 border-l-2 border-orange-500 pl-3">myNews</h3>
            
            <div className="flex flex-col gap-5">
              {CLUB_DATA.news.map((item) => (
                <div 
                  key={item.id} 
                  className="group relative w-full h-52 bg-neutral-900 rounded-2xl overflow-hidden cursor-pointer border border-neutral-800 hover:border-orange-500/50 transition-all duration-300 shadow-lg"
                >
                  {/* Full Color Image (No Grayscale) */}
                  <img 
                    src={item.image} 
                    alt="News" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out" 
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  
                  {/* Text Content */}
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h4 className="text-xl font-medium text-white leading-tight group-hover:text-orange-400 transition-colors duration-300">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* === RIGHT: SQUAD & MANAGER (4 cols) === */}
          <div className="lg:col-span-4 flex flex-col gap-10">
            
            {/* Manager Section */}
            <div>
               <h3 className="text-lg font-light text-neutral-400 border-l-2 border-orange-500 pl-3 mb-6">Manager</h3>
               {/* ID Card Style - Light Version for Contrast */}
               <div className="group flex items-center gap-5 p-5 rounded-2xl bg-[#e5e5e5] text-black shadow-xl hover:shadow-orange-500/20 transition-shadow duration-300">
                 <img 
                    src={CLUB_DATA.manager.image} 
                    alt="Manager" 
                    className="w-20 h-20 rounded-xl object-cover border-2 border-neutral-300 group-hover:border-orange-500 transition-colors"
                 />
                 <div>
                    <h4 className="text-xl font-bold tracking-tight">{CLUB_DATA.manager.name}</h4>
                    <div className="flex items-center gap-3 mt-2 text-xs font-bold uppercase tracking-wider text-neutral-600">
                       <span>{CLUB_DATA.manager.nationality}</span>
                       <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                       <span>{CLUB_DATA.manager.formation}</span>
                    </div>
                 </div>
               </div>
            </div>

            {/* Squad Section */}
            <div>
               <h3 className="text-lg font-light text-neutral-400 border-l-2 border-orange-500 pl-3 mb-6">mySquad</h3>
               <div className="grid grid-cols-3 gap-4">
                  {CLUB_DATA.squad.map((playerImg, idx) => (
                     <div 
                        key={idx} 
                        className="group aspect-square rounded-xl bg-neutral-900/50 border border-neutral-800 flex items-center justify-center hover:bg-neutral-900 hover:border-orange-500 transition-all duration-300 cursor-pointer relative overflow-hidden"
                     >
                        {/* Orange glow behind player on hover */}
                        <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <img 
                            src={playerImg} 
                            alt="Player" 
                            className="w-[85%] h-[85%] object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300 z-10" 
                        />
                     </div>
                  ))}
                  
                  {/* 'View All' Button */}
                  <div className="aspect-square rounded-xl border border-dashed border-neutral-700 flex flex-col items-center justify-center text-neutral-600 hover:text-orange-500 hover:border-orange-500 transition-all cursor-pointer bg-transparent hover:bg-orange-500/5 gap-1">
                    <span className="text-2xl font-light">+</span>
                    <span className="text-[10px] font-bold uppercase tracking-wide">View All</span>
                  </div>
               </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
};
