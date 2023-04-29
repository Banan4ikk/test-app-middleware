module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.tsx', '.ts', '.js', '.json'],
          root: '.',
          alias: {
            '@app': './src',
            '@assets': './assets',
          },
        },
      ],
    ],
  };
};
