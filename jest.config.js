module.exports = {
  preset: 'jest-expo',
  setupFiles: ['./jest.setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@reduxjs/toolkit|redux|redux-persist|reselect|immer|react-redux|react-native-unistyles|react-native-nitro-modules|react-native-edge-to-edge|@shopify/react-native-skia|zeego)/)',
  ],
};
