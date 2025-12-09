import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import ScoreCard from '../components/ScoreCard';

const Home = () => {
  const [groupedMatches, setGroupedMatches] = useState({});

  useEffect(() => {
    const fetchMatches = () => {
      // Raw data from backend (flat list)
      const dummyData = [
        {
          id: 1,
          leagueName: "Serie-A",
          teamHome: "SS Napoli",
          teamAway: "AC Milan",
          logoHome: "https://upload.wikimedia.org/wikipedia/commons/2/2d/SSC_Neapel.svg", 
          logoAway: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg",
          bgGradient: "bg-gradient-to-r from-[#1e2a38] to-[#2c3e50]", 
        },
        {
          id: 2,
          leagueName: "Premier-League",
          teamHome: "Man United",
          teamAway: "Tottenham",
          logoHome: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
          logoAway: "https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg",
          bgGradient: "bg-[#2A4036]", 
        },
        {
          id: 3,
          leagueName: "LaLiga",
          teamHome: "Barcelona",
          teamAway: "Real Madrid",
          logoHome: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
          logoAway: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
          bgGradient: "bg-gradient-to-r from-[#3a1c1c] to-[#502c2c]", 
        },
        // NEW MATCH ADDED AT THE END
        {
          id: 4,
          leagueName: "Serie-A", // Same league name as ID 1
          teamHome: "Juventus",
          teamAway: "Inter Milan",
          logoHome: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Juventus_FC_2017_icon_%28black%29.svg/2048px-Juventus_FC_2017_icon_%28black%29.svg.png",
          logoAway: "https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg",
          bgGradient: "bg-gradient-to-r from-[#1e2a38] to-[#2c3e50]", 
        }
      ];

      // GROUPING LOGIC
      // We transform the array into an object: { "Serie-A": [match1, match4], "Premier-League": [match2]... }
      const grouped = dummyData.reduce((acc, match) => {
        // If this league doesn't exist in our object yet, create it
        if (!acc[match.leagueName]) {
          acc[match.leagueName] = {
            matches: [],
            bgGradient: match.bgGradient // Store the color preference from the first match found
          };
        }
        // Push the match into that league's array
        acc[match.leagueName].matches.push(match);
        return acc;
      }, {});

      setGroupedMatches(grouped);
    };

    fetchMatches();
  }, []);

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white font-sans">
      <Header />

      <main className="flex flex-col md:flex-row p-8 gap-8">
        
        {/* LEFT SIDE: Score Cards */}
        <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col">

           <div className="text-xl mb-4">Goal News</div>
          
          {}
          {Object.keys(groupedMatches).map((leagueName) => (
            <ScoreCard 
              key={leagueName}
              leagueName={leagueName}
              matches={groupedMatches[leagueName].matches}
              bgGradient={groupedMatches[leagueName].bgGradient}
            />
          ))}

        </div>

        {}
        <div className="w-full md:w-1/2 lg:w-2/3">
           <div className="text-xl mb-4">Goal News</div>
           <div className="w-full h-[500px] bg-gray-700 rounded-3xl flex items-center justify-center opacity-50">
             Stadium Image Area
           </div>
        </div>

      </main>
    </div>
  );
};

export default Home;