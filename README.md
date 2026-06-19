# KB Demo

A React Native (Expo SDK 56) UI demo app — Android.

**Stack:** Expo SDK 56 · React Native 0.85 · React Navigation · Redux Toolkit · react-native-unistyles · react-native-reanimated · @shopify/react-native-skia · react-native-svg · i18next.

> **Note on `android/`:** the native folder is **not committed** — it's generated from `app.json` by the **`bun run prebuild:clean`** command (Continuous Native Generation), so the app icon, splash, name and native config stay in sync with `app.json`. Generate it locally with the prebuild step below.

---

## Prerequisites

- **Node.js** ≥ 20 and **bun** (`npm i -g bun`)
- **JDK 17**
- **Android SDK** (Android Studio) with `ANDROID_HOME` set, plus an **emulator** or a **physical device** with USB debugging enabled
- Verify a device is connected: `adb devices`

---

## Run on an Android device

```bash
# 1. Install JS dependencies (Skia native binaries are fetched automatically)
bun install

# 2. Generate the native android/ project from app.json
bun run prebuild:clean

# 3. Build, install and launch on the connected device/emulator
bun android
```

`bun android` compiles the app, installs it, and starts the Metro bundler. Leave it running.

### Day-to-day

Once the app is installed natively, you only need the JS bundler:

```bash
bun start        # expo start --dev-client
# then press  a  to open it on Android
```

If a physical device can't reach Metro over Wi-Fi, forward the ports:

```bash
bun run adb
```

---

## Build a release APK

```bash
bun run prebuild:clean                    # if android/ isn't generated yet
cd android && ./gradlew assembleRelease
```

The APK is written to:

```
android/app/build/outputs/apk/release/app-release.apk
```

The release build is signed with the bundled debug keystore, so it installs on any device. Install it with:

```bash
adb install -r android/app/build/outputs/apk/release/app-release.apk
```

---

## Project structure

```
src/
  component/    reusable UI (ui/) + composite views (view/)
  screens/      Authenticated/ + UnAuthenticated/ screens
  router/       React Navigation stacks + bottom tabs
  reduxToolkit/ store + slice
  theme/        colors, spacing, typography, unistyles config, assets
  i18n/         translations
  data/         demo/dummy data
  utils/        shared types + helpers
assets/         fonts, icons (svg), images, app-icon/
```

## Useful scripts

```bash
bun run compile         # tsc type-check
bun run lint            # eslint --fix
bun android             # build + run on Android
bun run prebuild:clean  # regenerate native android/ from app.json
```

---

## Notes

- **Scope / timeline:** given the timeline, the focus was mostly on the **UI** (layouts, components, theming) rather than heavy animation work.
- **Feature ideas (if more time):**
  - A **sticky header** on the Lesson screen.
  - More **interactive animations** throughout.
- **Styling:** [react-native-unistyles](https://www.unistyl.es/) for a modern, theme-driven styling approach (design tokens + responsive `rw`/`rh`/`rf` helpers).
- **Platform:** built with **Expo** (managed native via prebuild). iOS isn't included here as I don't have a Mac machine.
- **AI tools used:** Antigravity and Cursor for development, and ChatGPT for generating the SVG assets.
```
