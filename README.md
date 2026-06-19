# KB Demo

A React Native (Expo SDK 56) UI demo app.

**Stack:** Expo SDK 56 · React Native 0.85 · React Navigation · Redux Toolkit · react-native-unistyles · react-native-reanimated · @shopify/react-native-skia · react-native-svg · i18next.

> **Note on `android/` and `ios/`:** these native folders are **not committed** to the repo. They are generated from `app.json` by the **`expo prebuild`** command (Continuous Native Generation), so the app icon, splash, name, and native config always stay in sync with `app.json`. You generate them locally with the prebuild step below.

---

## Prerequisites

- **Node.js** ≥ 20 and **bun** (`npm i -g bun`)
- **JDK 17**
- **Android SDK** (Android Studio) with `ANDROID_HOME` set, plus an **emulator** or a **physical device** with USB debugging enabled
- Verify a device is connected: `adb devices`

---

## Run on an Android device

```bash
# 1. Install JS dependencies
bun install

# 2. Download the Skia native binaries
#    (bun blocks the @shopify/react-native-skia postinstall, so run this once)
npx install-skia

# 3. Generate the native android/ (and ios/) projects from app.json
npx expo prebuild --clean

# 4. Build, install and launch on the connected device/emulator
npx expo run:android
```

`expo run:android` compiles the app, installs it, and starts the Metro bundler. Leave it running.

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
npx expo prebuild --clean        # if android/ isn't generated yet
cd android && ./gradlew assembleRelease
```

The APK is written to:

```
android/app/build/outputs/apk/release/app-release.apk
```

(The release build is signed with the bundled debug keystore, so it installs on any device. For Play Store distribution, configure your own keystore in `android/app/build.gradle`.)

Install it on a connected device:

```bash
adb install -r android/app/build/outputs/apk/release/app-release.apk
```

---

## Project structure

```
src/
  component/   reusable UI (ui/) + composite views (view/)
  screens/     Authenticated/ + UnAuthenticated/ screens
  router/      React Navigation stacks + bottom tabs
  reduxToolkit/ store + slice
  theme/       colors, spacing, typography, unistyles config, assets
  i18n/        translations
  data/        demo/dummy data
  utils/       shared types + helpers
assets/        fonts, icons (svg), images, app-icon/
```

## Useful scripts

```bash
bun run compile      # tsc type-check
bun run lint         # eslint --fix
bun run android      # expo run:android
bun run prebuild:clean  # expo prebuild --clean
```
