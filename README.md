🏟️ Digital Stadium – MVP

A modern football experience built for fans who want live scores, personalized club hubs, merch discovery, and community chat — all in one unified platform.

🚀 What This App Does (MVP Features)
⚽ Live Football Scores (Top 5 Leagues)

Real-time match updates for:

Premier League

La Liga

Serie A

Bundesliga

Ligue 1

Includes live scores, match events, standings, and fixtures using a football data API.
🔐 Login + “My Club” Personalization

After signing in, users can choose their favorite club and instantly get:

Team news

Upcoming fixtures

Squad & player info

Live score notifications

A customized dashboard

🛍️ Merchandise Discovery (Affiliate Model)

Users can browse official club merchandise within the app.
When they tap “Buy,” they are redirected to the official store.
This lets the platform earn affiliate commission without handling payments.

💬 Match-Day Chat Rooms

Each live match has its own real-time chat space so fans can:

React to goals

Discuss tactics

Share emotions live

Chat is powered by WebSockets to maintain real-time interaction.
👥 Club Communities

Users can join their favorite club’s community to:

Share posts

Discuss matches

Stay connected with fellow supporters

This builds long-term engagement beyond match days.

📊 Immersive Match Visualizer (No Video Needed)

To keep fans engaged even without live video:

Event timeline

Lineups & formations

Basic stats

Shot / chance indicators

This ensures chat remains active and match experience feels alive.
🏗️ Tech Stack (MVP)
Frontend

Flutter

Riverpod / Bloc

Firebase Notifications

WebSockets for real-time chat

Backend

Spring Boot

JWT Authentication

WebSocket STOMP

PostgreSQL

Redis (optional)

External Services

API-Football (live match & league data)

Affiliate partners (Fanatics, Amazon, club stores)
