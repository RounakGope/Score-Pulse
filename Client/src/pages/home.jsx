import React, { useState, useEffect } from 'react';
// Assuming these exist based on your previous code
import Header from '../components/header';
import ScoreCard from '../components/ScoreCard';

const Home = () => {
  const [groupedMatches, setGroupedMatches] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a fetch delay for realism
    setTimeout(() => {
      const dummyData = [
        {
          id: 1,
          leagueName: "Serie A",
          teamHome: "SS Napoli",
          teamAway: "AC Milan",
          // Using generic placeholders if images fail
          logoHome: "https://media.api-sports.io/football/teams/492.png", 
          logoAway: "https://media.api-sports.io/football/teams/489.png",
          bgGradient: "bg-gradient-to-r from-[#1a2a6c] to-[#b21f1f]", // Custom gradient
        },
        {
          id: 2,
          leagueName: "Premier League",
          teamHome: "Man Utd",
          teamAway: "Tottenham",
          logoHome: "https://media.api-sports.io/football/teams/33.png",
          logoAway: "https://media.api-sports.io/football/teams/47.png",
          bgGradient: "bg-gradient-to-r from-[#380036] to-[#0CB5AA]", 
        },
        {
          id: 3,
          leagueName: "LaLiga",
          teamHome: "Barcelona",
          teamAway: "Real Madrid",
          logoHome: "https://media.api-sports.io/football/teams/529.png",
          logoAway: "https://media.api-sports.io/football/teams/541.png",
          bgGradient: "bg-gradient-to-r from-[#A50044] to-[#004D98]", 
        },
        {
          id: 4,
          leagueName: "Serie A",
          teamHome: "Juventus",
          teamAway: "Inter",
          logoHome: "https://media.api-sports.io/football/teams/496.png",
          logoAway: "https://media.api-sports.io/football/teams/505.png",
          bgGradient: "bg-gradient-to-r from-[#1a2a6c] to-[#b21f1f]", 
        }
      ];

      const grouped = dummyData.reduce((acc, match) => {
        if (!acc[match.leagueName]) {
          acc[match.leagueName] = {
            matches: [],
            bgGradient: match.bgGradient
          };
        }
        acc[match.leagueName].matches.push(match);
        return acc;
      }, {});

      setGroupedMatches(grouped);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans selection:bg-[#00ff88] selection:text-black">
      <Header />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto flex flex-col lg:flex-row p-6 gap-8 pt-8">
        
        {/* --- LEFT COLUMN: MATCH SCORES --- */}
        <div className="w-full lg:w-[35%] flex flex-col">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-6">
             <h2 className="text-2xl font-semibold tracking-wide">Matchday Live</h2>
             <span className="text-xs font-bold px-2 py-1 bg-red-600 text-white rounded animate-pulse">LIVE</span>
          </div>
          
          {/* Scrollable List Container */}
          <div className="flex flex-col gap-6 overflow-y-auto pr-2 custom-scrollbar" style={{ maxHeight: '80vh' }}>
            {loading ? (
              <div className="text-gray-500 italic">Loading fixtures...</div>
            ) : (
              Object.keys(groupedMatches).map((leagueName) => (
                <div key={leagueName} className="animate-fade-in-up">
                  {/* Subtle League Header */}
                  <div className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-3 ml-1">
                    {leagueName}
                  </div>
                  
                  {/* The ScoreCard Component */}
                  <div className="rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-[1.01] duration-300">
                    <ScoreCard
                      leagueName={leagueName}
                      matches={groupedMatches[leagueName].matches}
                      bgGradient={groupedMatches[leagueName].bgGradient}
                    />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* --- RIGHT COLUMN: NEWS & FEATURES --- */}
        <div className="w-full lg:w-[65%] flex flex-col gap-8">
           
           {/* 1. HERO NEWS CARD */}
           <div>
             <div className="text-2xl font-semibold mb-6 flex items-center gap-3">
               <span>Top Stories</span>
               <div className="h-[1px] flex-grow bg-gradient-to-r from-gray-700 to-transparent"></div>
             </div>

             {/* Styled Featured Article */}
             <div className="relative w-full h-[400px] rounded-3xl overflow-hidden group cursor-pointer shadow-2xl">
               {/* Background Image */}
               <img 
                 src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?q=80&w=2000&auto=format&fit=crop" 
                 alt="Stadium" 
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
               />
               
               {/* Gradient Overlay */}
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>

               {/* Content */}
               <div className="absolute bottom-0 left-0 p-8 w-full">
                 <span className="bg-[#00ff88] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
                   Breaking
                 </span>
                 <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-2 text-white group-hover:text-[#00ff88] transition-colors">
                   Champions League Final Venue Announced
                 </h3>
                 <p className="text-gray-300 line-clamp-2 max-w-xl">
                   UEFA confirms the host city for the 2026 final after intense bidding wars between three major European capitals.
                 </p>
               </div>
             </div>
           </div>

           {/* 2. SECONDARY NEWS GRID */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Small News Card 1 */}
              <div className="bg-[#1e1e1e] p-4 rounded-xl flex gap-4 items-center hover:bg-[#252525] transition-colors cursor-pointer border border-white/5">
                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <img src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=300" className="w-full h-full object-cover" alt="news" />
                </div>
                <div>
                  <div className="text-[#00ff88] text-xs font-bold mb-1">Transfer Market</div>
                  <h4 className="font-semibold text-sm leading-snug">Mbappé speaks on his future at Real Madrid</h4>
                </div>
              </div>

              {/* Small News Card 2 */}
              <div className="bg-[#1e1e1e] p-4 rounded-xl flex gap-4 items-center hover:bg-[#252525] transition-colors cursor-pointer border border-white/5">
                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <img src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=300" className="w-full h-full object-cover" alt="news" />
                </div>
                <div>
                  <div className="text-blue-400 text-xs font-bold mb-1">Tactics</div>
                  <h4 className="font-semibold text-sm leading-snug">Why the 3-2-5 formation is taking over Europe</h4>
                </div>
              </div>
           </div>

        </div>

      </main>

      {/* Global CSS for this page (Scrollbar) */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #333;
          border-radius: 20px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #555;
        }
      `}</style>
    </div>
  );
};

export default Home;