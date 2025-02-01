const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {withNativeWind} = require('nativewind/metro');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.transformer.babelTransformerPath = require.resolve(
  'react-native-svg-transformer',
);

defaultConfig.resolver.assetExts = defaultConfig.resolver.assetExts.filter(
  ext => ext !== 'svg',
);
defaultConfig.resolver.sourceExts = [
  ...defaultConfig.resolver.sourceExts,
  'svg',
];

const _config = {
  resolver: {
    sourceExts: ['jsx', 'js', 'ts', 'tsx', 'json', 'svg'],
  },
};
const config = mergeConfig(defaultConfig, _config);

module.exports = withNativeWind(config, {input: './src/styles/global.css'});
