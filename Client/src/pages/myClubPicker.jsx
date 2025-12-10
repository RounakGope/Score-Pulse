import React, { useState, useEffect } from 'react';

// ==========================================
// 1. SERVICE LAYER (Mock Data)
// ==========================================
const MOCK_LEAGUES = [
  { id: 'pl', name: 'Premier League', logo: 'https://media.api-sports.io/football/leagues/39.png' },
  { id: 'll', name: 'La Liga', logo: 'https://media.api-sports.io/football/leagues/140.png' },
  { id: 'sa', name: 'Serie A', logo: 'https://media.api-sports.io/football/leagues/135.png' },
  { id: 'bl', name: 'Bundesliga', logo: 'https://media.api-sports.io/football/leagues/78.png' },
  { id: 'l1', name: 'Ligue 1', logo: 'https://media.api-sports.io/football/leagues/61.png' },
  { id: 'mls', name: 'MLS', logo: 'https://media.api-sports.io/football/leagues/253.png' },
];

const MOCK_CLUBS = {
  pl: [
    { id: 1, name: 'Manchester United', manager: 'Ruben Amorim', logo: 'https://media.api-sports.io/football/teams/33.png' },
    { id: 2, name: 'Manchester City', manager: 'Pep Guardiola', logo: 'https://media.api-sports.io/football/teams/50.png' },
    { id: 3, name: 'Liverpool', manager: 'Arne Slot', logo: 'https://media.api-sports.io/football/teams/40.png' },
    { id: 4, name: 'Chelsea', manager: 'Enzo Maresca', logo: 'https://media.api-sports.io/football/teams/49.png' },
    { id: 11, name: 'Arsenal', manager: 'Mikel Arteta', logo: 'https://media.api-sports.io/football/teams/42.png' },
    { id: 12, name: 'Tottenham', manager: 'Ange Postecoglou', logo: 'https://media.api-sports.io/football/teams/47.png' },
  ],
  ll: [
    { id: 5, name: 'Real Madrid', manager: 'Carlo Ancelotti', logo: 'https://media.api-sports.io/football/teams/541.png' },
    { id: 6, name: 'Barcelona', manager: 'Hansi Flick', logo: 'https://media.api-sports.io/football/teams/529.png' },
    { id: 7, name: 'Atletico Madrid', manager: 'Diego Simeone', logo: 'https://media.api-sports.io/football/teams/530.png' },
  ],
  sa: [
     { id: 8, name: 'Juventus', manager: 'Thiago Motta', logo: 'https://media.api-sports.io/football/teams/496.png' },
     { id: 9, name: 'AC Milan', manager: 'Paulo Fonseca', logo: 'https://media.api-sports.io/football/teams/489.png' },
  ]
};

const apiService = {
  getLeagues: async () => new Promise(resolve => setTimeout(() => resolve(MOCK_LEAGUES), 200)),
  getClubsByLeague: async (leagueId) => new Promise(resolve => setTimeout(() => resolve(MOCK_CLUBS[leagueId] || []), 300))
};

// ==========================================
// 2. COMPONENT
// ==========================================
export default function ChooseClub() {
  const [leagues, setLeagues] = useState([]);
  const [clubs, setClubs] = useState([]);
  const [selectedLeague, setSelectedLeague] = useState(null);
  const [selectedClub, setSelectedClub] = useState(null);
  const [isHovered, setIsHovered] = useState(null); // For hover effects

  useEffect(() => {
    apiService.getLeagues().then((data) => {
      setLeagues(data);
      if (data.length > 0) handleLeagueClick(data[0].id);
    });
  }, []);

  const handleLeagueClick = (leagueId) => {
    if (selectedLeague === leagueId) return;
    setSelectedLeague(leagueId);
    setClubs([]); 
    setSelectedClub(null); // Reset club selection on league switch
    apiService.getClubsByLeague(leagueId).then(setClubs);
  };

  const handleClubClick = (clubId) => {
    // Single selection toggle logic
    setSelectedClub(prev => prev === clubId ? null : clubId);
  };

  return (
    <div style={styles.pageBackground}>
      {/* Global Styles for Scrollbar */}
      <style>
        {`
          ::-webkit-scrollbar { width: 8px; }
          ::-webkit-scrollbar-track { background: #222; border-radius: 4px; }
          ::-webkit-scrollbar-thumb { background: #444; border-radius: 4px; }
          ::-webkit-scrollbar-thumb:hover { background: #555; }
        `}
      </style>

      <div style={styles.mainContainer}>
        <h1 style={styles.header}>Choose Your Club</h1>
        
        <div style={styles.contentWrapper}>
          
          {/* LEFT: LEAGUES GRID */}
          <div style={styles.leftPanel}>
            <div style={styles.grid}>
              {leagues.map((league) => (
                <div 
                  key={league.id} 
                  onClick={() => handleLeagueClick(league.id)}
                  style={{
                    ...styles.leagueCard,
                    ...(selectedLeague === league.id ? styles.leagueCardActive : {}),
                  }}
                >
                  <img src={league.logo} alt={league.name} style={styles.leagueLogo} />
                  {selectedLeague === league.id && <div style={styles.activeIndicator} />}
                </div>
              ))}
              {/* Placeholders for visual balance */}
              {[...Array(3)].map((_, i) => <div key={`ph-${i}`} style={styles.placeholderCard} />)}
            </div>
          </div>

          <div style={styles.divider} />

          {/* RIGHT: CLUBS LIST */}
          <div style={styles.rightPanel}>
            {clubs.length > 0 ? (
              clubs.map((club) => (
                <div 
                  key={club.id} 
                  onClick={() => handleClubClick(club.id)}
                  onMouseEnter={() => setIsHovered(club.id)}
                  onMouseLeave={() => setIsHovered(null)}
                  style={{
                    ...styles.clubCard,
                    ...(selectedClub === club.id ? styles.clubCardSelected : {}),
                    ...(isHovered === club.id && selectedClub !== club.id ? styles.clubCardHover : {})
                  }}
                >
                  <div style={styles.logoWrapper}>
                    <img src={club.logo} alt={club.name} style={styles.clubLogo} />
                  </div>
                  <div style={styles.textWrapper}>
                    <span style={styles.clubName}>{club.name}</span>
                    <span style={styles.managerName}>{club.manager}</span>
                  </div>
                  
                  {/* Selection Checkmark Indicator */}
                  {selectedClub === club.id && (
                    <div style={styles.checkMark}>✓</div>
                  )}
                </div>
              ))
            ) : (
              <div style={styles.loadingState}>
                {selectedLeague ? "Loading Clubs..." : "Select a League"}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

// ==========================================
// 3. REFINED STYLING
// ==========================================
const styles = {
  pageBackground: {
    backgroundColor: '#121212', // Deep dark matte
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    color: '#ffffff',
  },
  mainContainer: {
    width: '100%',
    maxWidth: '1100px',
    height: '85vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    fontSize: '32px',
    fontWeight: '300',
    letterSpacing: '1.5px',
    marginBottom: '40px',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    paddingBottom: '20px',
    width: '80%',
    textAlign: 'center',
    color: '#eee',
  },
  contentWrapper: {
    display: 'flex',
    width: '100%',
    height: '100%',
    gap: '30px',
  },
  
  // --- Left Side ---
  leftPanel: {
    flex: '0 0 35%', // Fixed width 35%
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: '10px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
    width: '100%',
    maxWidth: '350px',
  },
  leagueCard: {
    backgroundColor: '#1e1e1e',
    aspectRatio: '1/1', // Perfect square
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    position: 'relative',
    transition: 'all 0.2s ease-in-out',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
    border: '1px solid transparent',
  },
  leagueCardActive: {
    backgroundColor: '#2a2a2a',
    border: '2px solid #00ff88', // Neon green accent
    transform: 'scale(1.05)',
    boxShadow: '0 0 15px rgba(0, 255, 136, 0.2)',
  },
  placeholderCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: '16px',
    opacity: 0.3,
  },
  leagueLogo: {
    width: '65%',
    height: '65%',
    objectFit: 'contain',
    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))',
  },
  activeIndicator: {
    position: 'absolute',
    bottom: '-8px',
    width: '40%',
    height: '4px',
    backgroundColor: '#00ff88',
    borderRadius: '2px',
    boxShadow: '0 0 8px #00ff88',
  },

  // --- Divider ---
  divider: {
    width: '1px',
    background: 'linear-gradient(to bottom, transparent, #444, transparent)',
  },

  // --- Right Side ---
  rightPanel: {
    flex: '1',
    overflowY: 'auto',
    paddingRight: '15px', // Space for scrollbar
  },
  clubCard: {
    backgroundColor: '#252525',
    marginBottom: '12px',
    borderRadius: '12px',
    padding: '16px 24px',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    border: '1px solid #333',
    position: 'relative',
    overflow: 'hidden',
  },
  clubCardHover: {
    backgroundColor: '#2f2f2f',
    transform: 'translateX(5px)',
  },
  clubCardSelected: {
    backgroundColor: '#2d2d2d',
    borderColor: '#00ff88',
    boxShadow: 'inset 0 0 20px rgba(0, 255, 136, 0.05)',
  },
  logoWrapper: {
    width: '48px',
    height: '48px',
    backgroundColor: '#fff',
    borderRadius: '50%',
    padding: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '20px',
    flexShrink: 0,
  },
  clubLogo: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  textWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  clubName: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#fff',
    marginBottom: '4px',
  },
  managerName: {
    fontSize: '14px',
    color: '#aaa',
    fontWeight: '400',
  },
  checkMark: {
    color: '#00ff88',
    fontSize: '20px',
    fontWeight: 'bold',
    marginLeft: '15px',
  },
  loadingState: {
    color: '#666',
    textAlign: 'center',
    marginTop: '50px',
    fontStyle: 'italic',
  }
};