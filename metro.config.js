/* eslint-env node */
// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// SVG support via react-native-svg-transformer (matches KbApp).
config.transformer.babelTransformerPath = require.resolve('react-native-svg-transformer');
config.resolver.assetExts = config.resolver.assetExts.filter((ext) => ext !== 'svg');
config.resolver.sourceExts = [...config.resolver.sourceExts, 'svg'];

config.transformer.getTransformOptions = async () => ({
  transform: {
    inlineRequires: true,
  },
});

// Support libraries that ship .cjs files.
config.resolver.sourceExts.push('cjs');

module.exports = config;
