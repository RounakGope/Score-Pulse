import React from 'react';

const ScoreCard = ({ leagueName, matches, bgGradient }) => {
  // We ignore the `bgGradient` prop for this monotone design, 
  // as the styling is now consistent and relies on background classes.

  return (
    // Base container is now dark, slightly transparent, and uses blur for depth
    <div className="relative w-full p-6 rounded-2xl overflow-hidden text-white border border-[#2a2a2a] shadow-xl backdrop-blur-sm bg-[#1e1e1e]/80 transition-all duration-300 hover:shadow-2xl hover:border-[#3a3a3a]">
      
      {/* League Header */}
      <div className="flex justify-between items-center mb-5 pb-3 border-b border-[#3a3a3a]">
        <h3 className="text-xl font-medium tracking-wider uppercase text-gray-300">
          {leagueName}
        </h3>
        {/* Status indicator (can be dynamic, e.g., 'Live', 'FT', or 'Today') */}
        <span className="text-xs font-bold text-[#00ff88] border border-[#00ff88] px-2 py-0.5 rounded-full uppercase tracking-widest">
            Today
        </span>
      </div>

      {/* Loop through matches in this league */}
      <div className="flex flex-col gap-4">
        {matches.map((match) => (
          <div 
            key={match.id} 
            className="flex items-center gap-4 z-10 relative bg-[#2a2a2a]/50 p-3 rounded-lg hover:bg-[#2a2a2a] transition-colors duration-200 cursor-pointer"
          >
            
            {/* Team Home */}
            <div className="flex items-center gap-2 w-5/12 justify-end">
                {/* Home Logo */}
                {match.logoHome ? (
                    <img src={match.logoHome} alt={match.teamHome} className="w-7 h-7 object-contain rounded-full bg-white p-1 shadow-md" />
                ) : (
                    <div className="w-7 h-7 bg-gray-600 rounded-full animate-pulse" />
                )}
                <span className="text-sm font-semibold text-right truncate">{match.teamHome}</span>
            </div>

            {/* Score/Time Centerpiece */}
            <div className="w-2/12 flex-shrink-0 flex justify-center">
                <div className="text-xs font-bold text-gray-400 border border-gray-600 px-3 py-1 rounded-full bg-[#1e1e1e] shadow-inner">
                    VS
                </div>
            </div>

            {/* Team Away */}
            <div className="flex items-center gap-2 w-5/12 justify-start">
                <span className="text-sm font-semibold truncate">{match.teamAway}</span>
                {/* Away Logo */}
                {match.logoAway ? (
                    <img src={match.logoAway} alt={match.teamAway} className="w-7 h-7 object-contain rounded-full bg-white p-1 shadow-md" />
                ) : (
                    <div className="w-7 h-7 bg-gray-600 rounded-full animate-pulse" />
                )}
            </div>
            
          </div>
        ))}
      </div>

      {/* Subtle Bottom Separator/Footer Action */}
      <div className="text-center mt-5 pt-3 border-t border-[#3a3a3a]">
        <button className="text-xs text-gray-400 hover:text-[#00ff88] transition-colors duration-200 uppercase tracking-widest font-semibold">
            View All Fixtures →
        </button>
      </div>
    </div>
  );
};

export default ScoreCard;