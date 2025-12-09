import React from 'react';

const ScoreCard = ({ leagueName, matches, bgGradient }) => {
  return (
    <div className={`relative w-full p-6 rounded-xl overflow-hidden mb-6 text-white shadow-lg ${bgGradient}`}>
      
      {/* League Header */}
      <h3 className="text-xl font-light mb-4 opacity-90 border-b border-white/10 pb-2">
        {leagueName}
      </h3>

      {/* Loop through matches in this league */}
      <div className="flex flex-col gap-4">
        {matches.map((match) => (
          <div key={match.id} className="flex items-center gap-3 z-10 relative">
            
            {/* Home Logo */}
            {match.logoHome ? (
              <img src={match.logoHome} alt={match.teamHome} className="w-8 h-8 object-contain" />
            ) : (
              <div className="w-8 h-8 bg-gray-600 rounded-full animate-pulse" />
            )}

            {/* Match Score/Vs */}
            <div className="text-lg font-normal tracking-wide flex-1 whitespace-nowrap">
              <span>{match.teamHome}</span>
              <span className="mx-2 text-white/60">-</span>
              <span>{match.teamAway}</span>
            </div>

            {/* Away Logo */}
            {match.logoAway ? (
              <img src={match.logoAway} alt={match.teamAway} className="w-8 h-8 object-contain" />
            ) : (
              <div className="w-8 h-8 bg-gray-600 rounded-full animate-pulse" />
            )}
            
          </div>
        ))}
      </div>

      {/* Background Icon Watermark */}
      <div className="absolute right-[-20px] bottom-[-20px] opacity-10 pointer-events-none">
        <div className="text-9xl font-bold">⚽</div>
      </div>
    </div>
  );
};

export default ScoreCard;