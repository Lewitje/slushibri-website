# Slushibri

**Privacy Policy + App Information**

This document contains everything needed to build a clean, professional website for the Slushibri mobile app. It includes a full app overview and a complete, accurate Privacy Policy suitable for Google Play and general use.

---

## App Overview

**Slushibri** is a fun, lightweight mobile app for the Kolibri office slushie machine.

It lets people at the office:
- See the **currently served slushie** with beautiful visuals
- Check the **machine status** (e.g. "Ready in 12:34" or "Offline")
- Participate in **weekly democratic flavor voting**
- Browse the full historical **menu** of every slushie idea ever created (called *Menubri*)
- Enjoy a humorous **"Table Service"** ordering experience

The app has a strong office-geofence element: most interactive features (voting and placing an order) are only enabled when you are physically at the Kolibri office.

### Visual Style
The app features a playful winter/snow theme with:
- Animated snow blizzard effects
- Beautiful AI-generated cup and floating ingredient illustrations for every flavor
- Smooth cup rotation animations
- A large interactive office map for the table service joke

### Tone
Light-hearted, humorous, and very much an internal team joke app rather than a serious commercial product.

---

## Key Features

### 1. Home Screen
- Live display of the current slushie (title, description, and generated artwork)
- Animated 3D-style cup with floating ingredients
- Machine status pill with live countdown when the machine is preparing
- "Voting Open" entry point (when a vote is active)
- "Menu" button → historical slushies
- "Place Order" button (geofenced + requires machine ready)

### 2. Weekly Flavor Voting
- When voting is open, users swipe/rate the current week's lineup of slushies (good or bad)
- One vote per person per slushie (enforced via anonymous user ID)
- "Vote again" option and public results view
- Results show total good + bad votes for each flavor

### 3. Menubri (Historical Menu)
- Every slushie ever created is public
- Grid view showing the generated artwork + title + description + total vote count
- Sorted by popularity

### 4. Table Service (Joke Feature)
- Interactive pannable office map with labeled desks and meeting rooms
- Select a chair → get a funny personalized message
- "Place order" triggers a deliberately never-ending delivery animation with rotating joke messages
- Purely for entertainment — no real orders are placed

### 5. Admin Tools (PIN protected)
- Create new slushie candidates
- AI generation of ingredients + custom cup/floating images (powered by Gemini)
- Manage weekly lineups (draft → voting → locked → completed)
- Pick winners
- Control the physical machine status ("Ready in X minutes")
- View detailed vote tallies

### 6. Technical / Live Features
- Real-time updates (current flavor and machine status change live)
- Fully anonymous authentication (no emails or accounts)
- Location used **only on-device** for the geofence check

---

## Technology

- **Frontend**: Expo (React Native) + Expo Router + React Native Reanimated + Shopify React Native Skia
- **Backend**: Supabase (PostgreSQL + Auth + Storage + Realtime + Edge Functions)
- **Image Generation**: Gemini 2.5 Flash + custom image processing pipeline (magick-wasm)
- **Platforms**: Android (primary), iOS builds also exist
- **Package**: `co.lewi.slushibri`

---

## Privacy Policy

**Effective Date:** July 9, 2026

Slushibri is a fun, lightweight mobile app for checking the current slushie flavor at the Kolibri office, participating in weekly flavor voting, and enjoying a humorous "table service" experience.

### Information We Collect

We collect very little information and only what is necessary for the app to work:

- **Anonymous authentication**  
  When you open the app we create an anonymous user session through our backend provider (Supabase). This creates a random user ID on their servers that is **not linked to your name, email, or any personal identity**. This ID is used only to let you vote on each flavor once.

- **Location data (precise)**  
  The app asks for your location (when in use) solely to check whether you are physically at the Kolibri office (within ~100 meters).  
  - This check happens **entirely on your device**.  
  - Your location coordinates are **never sent to our servers or stored**.  
  - Location is only used to enable or disable certain fun features (voting and placing a "table service" order).

- **Voting activity**  
  When you vote on a slushie flavor, we record your vote (good or bad) tied only to your anonymous user ID. You can see your own past votes. Aggregated vote counts for each flavor are shown publicly so everyone can see the results — these aggregates contain no personal information.

- **Public content**  
  Slushie flavor names, descriptions, ingredients, and the AI-generated images are stored publicly so the app can display them. This is intentional and part of the app's features.

> **"Place Order" / Table Service** is a purely local joke feature. Selecting a chair and tapping "Place order" does not send any data anywhere. It just shows a humorous animated tracker that intentionally never finishes delivering.

### How We Use the Information

- To power the core features of the app (showing the current flavor, letting people vote once per flavor, and the geofence-based feature gates).
- To provide live updates (current flavor and machine status) using Supabase realtime.
- We do **not** use any data for advertising, marketing, or selling to third parties.

### Third-Party Services

The app relies on the following service providers:

- **Supabase** (backend, database, authentication, storage, edge functions, and realtime). Supabase processes the anonymous user IDs and votes on our behalf. Their own privacy practices apply: [https://supabase.com/privacy](https://supabase.com/privacy).
- Standard Expo and React Native libraries (for location, networking, etc.). These send only the minimal technical data required for the features described above.

We do not use analytics SDKs, advertising networks, crash reporters, or any other third-party tracking.

### Data Sharing and Selling

We do not sell your data. The only data that leaves your device is:

- Anonymous session and vote data sent to Supabase (necessary for the app to function).
- Standard network requests to load public slushie images and data.

### Data Retention and Deletion

- Anonymous user sessions live in the app and on Supabase until you uninstall the app or clear app data.
- Your past votes remain in the database (tied only to the anonymous ID) so that vote totals stay accurate. Because the ID is anonymous and not linked to you, these votes cannot be attributed to any individual.
- To remove your local session and stop future votes from being associated with the current anonymous ID, simply uninstall the app.
- If you would like us to delete specific votes or data where possible, contact us (see below). Note that aggregated historical results cannot be retroactively changed without affecting everyone else's experience.

### Security

All communication with our backend is encrypted in transit (HTTPS/TLS). We use industry-standard practices through Supabase. However, no method of transmission or storage is 100% secure.

### Children's Privacy

This app is not directed to children. We do not knowingly collect personal information from children under 13 (or the applicable age in your jurisdiction).

### Changes to This Policy

We may update this policy occasionally. When we do, we will update the "Effective Date" at the top. Continued use of the app after changes means you accept the updated policy.

### Contact Us

If you have questions about this privacy policy or the data practices of Slushibri, please reach out:

**Lewi**  
Email: [your-email@example.com]  
*(Replace with actual contact method before publishing)*

---

## Google Play Data Safety Summary

This section is intended to help when filling out the Data safety form in the Google Play Console.

**Data Collected:**

| Data Type              | Collected?     | Shared? | Purpose                  | Notes |
|------------------------|----------------|---------|--------------------------|-------|
| Precise Location       | Yes            | No      | App functionality        | Used only on-device for office geofence check. Never transmitted or stored. |
| User IDs (anonymous)   | Yes            | No      | App functionality        | Supabase anonymous auth ID used solely for one-vote-per-person enforcement. |
| All other categories   | No             | —       | —                        | No personal info, photos, contacts, payments, etc. |

**Data Sharing:** None.

**Account Deletion:** The app does not create traditional user accounts. Authentication is fully anonymous. Users can remove their local session by uninstalling the app.

**Security Practices:** Data is encrypted in transit. We rely on Supabase's security infrastructure.

---

## Suggested Website Structure (for the other AI)

You can use the content above to generate a simple, elegant static website. Recommended page sections:

1. **Hero** — App name + short tagline + download buttons (Android + iOS if applicable)
2. **About** — What the app is + office context
3. **Features** — Grid or cards for the main experiences (Current Flavor, Voting, Menubri, Table Service)
4. **How It Works** — Brief explanation of the weekly cycle + geofence
5. **Privacy** — Full privacy policy (or a clean summarized version + link to full)
6. **Data Safety** — Short transparent table for Google Play users
7. **Footer** — Contact + Effective date + "Made for Kolibri"

**Tone recommendations for the site:**
- Playful but professional
- Use the winter/snow aesthetic
- Keep humor visible but not overwhelming on the privacy page

---

## Notes for Hosting / Legal

- Host the final privacy policy at a permanent, publicly accessible HTTPS URL (required by Google Play).
- Do not put it behind a login or country gate.
- Update the contact email and effective date before publishing.
- The policy text above is written to be accurate based on the current implementation of the app (as of July 2026).

---

*This document was prepared for easy conversion into a website while remaining fully usable as the official privacy policy.*