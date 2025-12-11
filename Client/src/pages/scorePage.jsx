import React, { useState, useEffect } from 'react';
import Header from '../components/header';

// ==========================================
// 1. MOCK DATA LAYER (Future API Structure)
// ==========================================
const MOCK_MATCH_DATA = {
  id: "match_123",
  league: "Premier League",
  time: "72:56",
  status: "Live",
  homeTeam: {
    id: 1,
    name: "Liverpool",
    logo: "https://media.api-sports.io/football/teams/40.png",
    score: 2,
    formation: "4-3-3",
    scorers: ["Salah 12'", "Diaz 45'"]
  },
  awayTeam: {
    id: 2,
    name: "Tottenham",
    logo: "https://media.api-sports.io/football/teams/47.png",
    score: 2,
    formation: "4-2-3-1",
    scorers: ["Son 33'", "Maddison 67'"]
  },
  // Data for the 'Squad' Tab (Positions are % for CSS placement)
  lineups: {
    home: [
      { id: 1, name: "Alisson", number: 1, rating: 7.2, pos: "GK", top: 85, left: 50 },
      { id: 2, name: "Trent", number: 66, rating: 7.5, pos: "RB", top: 70, left: 85 },
      { id: 3, name: "Van Dijk", number: 4, rating: 8.1, pos: "CB", top: 70, left: 60 },
      { id: 4, name: "Konate", number: 5, rating: 7.0, pos: "CB", top: 70, left: 40 },
      { id: 5, name: "Robertson", number: 26, rating: 6.9, pos: "LB", top: 70, left: 15 },
      { id: 6, name: "Endo", number: 3, rating: 6.8, pos: "CDM", top: 55, left: 50 },
      { id: 7, name: "Szoboszlai", number: 8, rating: 7.4, pos: "CM", top: 45, left: 70 },
      { id: 8, name: "Mac Allister", number: 10, rating: 7.9, pos: "CM", top: 45, left: 30 },
      { id: 9, name: "Salah", number: 11, rating: 8.5, pos: "RW", top: 20, left: 85 },
      { id: 10, name: "Nunez", number: 9, rating: 6.5, pos: "ST", top: 15, left: 50 },
      { id: 11, name: "Diaz", number: 7, rating: 8.2, pos: "LW", top: 20, left: 15 },
    ]
  },
  // Data for the 'Statistics' Tab
  stats: [
    { label: "Possession", home: 55, away: 45 },
    { label: "Shots", home: 14, away: 8 },
    { label: "Shots on Target", home: 6, away: 4 },
    { label: "Pass Accuracy", home: 88, away: 82 },
    { label: "Fouls", home: 9, away: 11 },
  ]
};

const apiService = {
  getMatchDetails: async (matchId) => {
    // FUTURE: return fetch(`/api/matches/${matchId}`).then(res => res.json());
    return new Promise(resolve => setTimeout(() => resolve(MOCK_MATCH_DATA), 500));
  }
};

// ==========================================
// 2. MAIN COMPONENT
// ==========================================
export default function ScorePage (){
  const [matchData, setMatchData] = useState(null);
  const [activeTab, setActiveTab] = useState('squad'); // Default tab
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiService.getMatchDetails("match_123").then((data) => {
      setMatchData(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-white">Loading MatchDay...</div>;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-orange-500 selection:text-black">
      <Header />

      <main className="max-w-6xl mx-auto p-6 space-y-8 pt-4">
        
        {/* --- SECTION 1: MATCH CARD --- */}
        <div className="animate-fade-in-down">
          <div className="text-center text-neutral-500 text-sm font-light uppercase tracking-[0.3em] mb-4">MatchDay</div>
          
          <div className="relative bg-[#1e1e1e] border border-neutral-800 rounded-3xl p-8 shadow-2xl overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-orange-500/50 blur-xl"></div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
              
              {/* Home Team */}
              <div className="flex items-center gap-6 flex-1 justify-end">
                <div className="text-right hidden md:block">
                  <h2 className="text-2xl font-bold text-white">{matchData.homeTeam.name}</h2>
                  <div className="text-xs text-neutral-400 mt-1">{matchData.homeTeam.scorers.join(', ')}</div>
                </div>
                <img src={matchData.homeTeam.logo} alt="Home" className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-lg" />
              </div>

              {/* Score Center */}
              <div className="flex flex-col items-center px-8">
                <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2">{matchData.league}</span>
                <div className="text-5xl md:text-6xl font-bold tracking-tighter text-white flex items-center gap-4">
                  <span>{matchData.homeTeam.score}</span>
                  <span className="text-neutral-600 text-3xl">-</span>
                  <span>{matchData.awayTeam.score}</span>
                </div>
                <div className="mt-2 px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-500 text-sm font-mono animate-pulse">
                  {matchData.time}
                </div>
              </div>

              {/* Away Team */}
              <div className="flex items-center gap-6 flex-1 justify-start">
                <img src={matchData.awayTeam.logo} alt="Away" className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-lg" />
                <div className="text-left hidden md:block">
                  <h2 className="text-2xl font-bold text-white">{matchData.awayTeam.name}</h2>
                  <div className="text-xs text-neutral-400 mt-1">{matchData.awayTeam.scorers.join(', ')}</div>
                </div>
              </div>

            </div>
          </div>
        </div>


        {/* --- SECTION 2: SPLIT LAYOUT (LEFT MENU / RIGHT CONTENT) --- */}
        <div className="flex flex-col md:flex-row gap-8 min-h-[500px]">
          
          {/* === LEFT SIDEBAR === */}
          <div className="w-full md:w-1/4 flex flex-col gap-3">
            <TabButton active={activeTab === 'squad'} onClick={() => setActiveTab('squad')}>Squad</TabButton>
            <TabButton active={activeTab === 'stats'} onClick={() => setActiveTab('stats')}>Statistics</TabButton>
            <TabButton active={activeTab === 'ratings'} onClick={() => setActiveTab('ratings')}>Ratings</TabButton>
            <TabButton active={activeTab === 'chat'} onClick={() => setActiveTab('chat')}>Live Chat</TabButton>
          </div>

          {/* === RIGHT CONTENT AREA === */}
          <div className="w-full md:w-3/4 bg-[#141414] border border-neutral-800 rounded-3xl p-1 relative overflow-hidden shadow-inner">
            <div className="w-full h-full p-6">
              
              {/* CONTENT SWITCHER */}
              {activeTab === 'squad' && <SquadView lineup={matchData.lineups.home} />}
              {activeTab === 'stats' && <StatsView stats={matchData.stats} homeName={matchData.homeTeam.name} awayName={matchData.awayTeam.name} />}
              {activeTab === 'ratings' && <RatingsView lineup={matchData.lineups.home} />}
              {activeTab === 'chat' && <ChatView />}

            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

// ==========================================
// 3. SUB-COMPONENTS
// ==========================================

// --- Navigation Button ---
const TabButton = ({ active, children, onClick }) => (
  <button 
    onClick={onClick}
    className={`
      w-full text-left px-6 py-4 rounded-xl font-medium transition-all duration-300 border
      ${active 
        ? 'bg-[#1e1e1e] border-orange-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.15)] translate-x-2' 
        : 'bg-[#141414] border-transparent text-neutral-500 hover:text-neutral-300 hover:bg-[#1a1a1a]'
      }
    `}
  >
    {children}
  </button>
);

// --- VIEW: SQUAD (Football Pitch) ---
const SquadView = ({ lineup }) => (
  <div className="w-full h-[500px] relative bg-[#2a4036] rounded-2xl border border-[#3a5046] overflow-hidden shadow-inner select-none">
    {/* CSS Pitch Markings */}
    <div className="absolute inset-4 border-2 border-white/20 rounded-lg"></div> {/* Touchline */}
    <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-white/20"></div> {/* Halfway Line */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-white/20 rounded-full"></div> {/* Center Circle */}
    
    {/* Penalty Areas (Simplified) */}
    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-48 h-24 border-2 border-t-0 border-white/20 rounded-b-lg"></div>
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-48 h-24 border-2 border-b-0 border-white/20 rounded-t-lg"></div>

    <div className="absolute bottom-6 left-0 right-0 text-center">
      <span className="text-white/30 font-bold tracking-widest text-xs uppercase">Playing towards Kop End</span>
    </div>

    {/* Players */}
    {lineup.map((player) => (
      <div 
        key={player.id}
        className="absolute flex flex-col items-center transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform cursor-pointer group"
        style={{ top: `${player.top}%`, left: `${player.left}%` }}
      >
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-700 to-red-900 border-2 border-white shadow-lg flex items-center justify-center text-xs font-bold relative z-10">
          {player.number}
        </div>
        <div className="mt-1 bg-black/60 px-2 py-0.5 rounded text-[10px] text-white backdrop-blur-sm font-semibold whitespace-nowrap group-hover:bg-orange-600 transition-colors">
          {player.name}
        </div>
      </div>
    ))}
  </div>
);

// --- VIEW: STATISTICS ---
const StatsView = ({ stats, homeName, awayName }) => (
  <div className="flex flex-col gap-6 h-full justify-center">
    <div className="flex justify-between text-neutral-500 text-xs uppercase font-bold px-1">
      <span>{homeName}</span>
      <span>Stats</span>
      <span>{awayName}</span>
    </div>
    
    {stats.map((stat, idx) => {
      const total = stat.home + stat.away;
      const homeWidth = (stat.home / total) * 100;
      
      return (
        <div key={idx} className="group">
          <div className="flex justify-between text-sm font-medium mb-2 text-neutral-300">
            <span>{stat.home}</span>
            <span className="text-neutral-500 group-hover:text-orange-500 transition-colors">{stat.label}</span>
            <span>{stat.away}</span>
          </div>
          <div className="flex h-2 bg-neutral-800 rounded-full overflow-hidden">
            <div style={{ width: `${homeWidth}%` }} className="bg-orange-500 transition-all duration-1000 ease-out"></div>
            <div style={{ width: `${100 - homeWidth}%` }} className="bg-neutral-700"></div>
          </div>
        </div>
      );
    })}
  </div>
);

// --- VIEW: RATINGS ---
const RatingsView = ({ lineup }) => (
  <div className="h-full overflow-y-auto pr-2 custom-scrollbar">
    <table className="w-full text-left border-collapse">
      <thead className="text-xs uppercase text-neutral-500 sticky top-0 bg-[#141414] pb-2 z-10">
        <tr>
          <th className="py-2">Player</th>
          <th className="py-2 text-center">Pos</th>
          <th className="py-2 text-right">Rating</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-neutral-800">
        {lineup.sort((a,b) => b.rating - a.rating).map((player) => (
          <tr key={player.id} className="group hover:bg-neutral-800/50 transition-colors">
            <td className="py-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-bold text-neutral-400">
                {player.number}
              </div>
              <span className="font-medium">{player.name}</span>
            </td>
            <td className="py-3 text-center text-sm text-neutral-500">{player.pos}</td>
            <td className="py-3 text-right">
              <span className={`
                px-2 py-1 rounded text-xs font-bold
                ${player.rating >= 8.0 ? 'bg-green-900 text-green-400' : 
                  player.rating >= 7.0 ? 'bg-neutral-800 text-neutral-300' : 'bg-red-900/30 text-red-400'}
              `}>
                {player.rating}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// --- VIEW: CHAT PLACEHOLDER ---
const ChatView = () => (
  <div className="flex flex-col h-full items-center justify-center text-neutral-600 gap-4">
    <div className="w-16 h-16 rounded-full bg-neutral-900 flex items-center justify-center border border-neutral-800">
      <span className="text-2xl animate-pulse">💬</span>
    </div>
    <p>Live Chat connecting...</p>
    <button className="text-xs text-orange-500 hover:text-orange-400 uppercase font-bold tracking-widest border border-orange-500/30 px-4 py-2 rounded-lg hover:bg-orange-500/10 transition-colors">
      Join Discussion
    </button>
  </div>
);