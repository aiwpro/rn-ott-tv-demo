# React Native Android TV OTT Demo (Expo + TypeScript)

Small OTT-style demo for Android TV that lets users browse a catalog, view details, and play a video stream.

## ✨ Features
- **Home**: simple rail with 6+ items (thumbnail + title).
- **Details**: poster, title, description, duration, **Play** button.
- **Player**: playback via `expo-av` `Video` (HLS & MP4).
- **States**: loading spinner; friendly error for load/playback.
- **Testing**: 3+ unit tests and 1 integration test with `@testing-library/react-native`.
- **TV UX**: D‑pad focus using `Pressable focusable` and focus styles.

## 🧱 Tech
- **Expo SDK 50** (managed workflow)
- **TypeScript**
- **React Navigation** (native stack)
- **expo-av** for video playback
- **Jest + @testing-library/react-native** for tests

## 🚀 Setup
```bash
# 1) Install deps
npm i

# 2) Run Android TV emulator

# 3) Start App
npm start

› Press a │ open Android
› Press r │ reload app
```

> **Android TV emulator tip**: Open Android Studio, launch the Virtual Device Manager, and create an Android TV AVD (e.g., API 30, Android 11).

## 🧪 Tests
```bash
npm test
```

## 📁 Data Source
Catalog is bundled locally at `assets/catalog.json`. Replace with your own or host remotely.

## ⚠️ Known limitations & TODOs
- Focus management is minimal (default D‑pad). Add row/column focus guides for complex layouts if needed.
- No persistence or analytics. No DRM/subtitles.
- For production, replace mock latency with real fetch and proper error handling + retry.
- Add thumbnails caching, skeletons, and more rails.
