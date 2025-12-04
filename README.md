# 🏟️ Digital Stadium – MVP

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Flutter](https://img.shields.io/badge/Flutter-2.10-blue)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-2.7.5-brightgreen)

**A modern football experience built for fans who want live scores, personalized club hubs, merch discovery, and community chat — all in one unified platform.**

---

## 🚀 Features

### ⚽ Live Football Scores (Top 5 Leagues)
- Real-time updates for Premier League, La Liga, Serie A, Bundesliga, Ligue 1
- Live scores, match events, standings, and fixtures via football data API

### 🔐 Login + “My Club” Personalization
- Sign in & pick your favorite club
- Team news, upcoming fixtures, squad & player info
- Live score notifications
- Customized dashboard experience

### 🛍️ Merchandise Discovery (Affiliate Model)
- Browse official club merchandise
- “Buy” redirects to official stores for affiliate commissions
- No payments handled inside the app

### 💬 Match-Day Chat Rooms
- Real-time chat for each live match
- React to goals, discuss tactics, and share emotions
- Powered by WebSockets for instant interaction

### 👥 Club Communities
- Join your club’s community to share posts and discuss matches
- Connect with fellow supporters worldwide

### 📊 Immersive Match Visualizer (No Video Needed)
- Event timeline, lineups, formations, and basic stats
- Shot and chance indicators for a dynamic match experience

---

## 🏗️ Tech Stack

| Frontend           | Backend               | External Services                       |
|--------------------|-----------------------|---------------------------------------|
| Flutter            | Spring Boot           | API-Football (live match & league data) |
| Riverpod / Bloc    | JWT Authentication    | Affiliate partners (Fanatics, Amazon, official club stores) |
| Firebase Notifications | WebSocket STOMP   |                                       |
| WebSockets (Chat)  | PostgreSQL            |                                       |
|                    | Redis (optional)      |                                       |

---

## 📥 Getting Started

1. Clone this repository  
2. Follow platform-specific setup guides for Flutter and Spring Boot
3. Configure API keys for football data provider and affiliate services
4. Run backend and frontend servers locally or deploy to your preferred backend hosting

---


## 💬 Contact & Contribution

Contributions, issues, and feature requests are welcome!  
Feel free to check the [issues page](https://github.com/RounakGope/Score-Pulse/issues).

---

*Enjoy the beautiful game with Digital Stadium!*
