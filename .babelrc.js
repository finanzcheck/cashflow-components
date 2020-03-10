module.exports = {
  presets: [
    [
      'next/babel',
      {
        'transform-runtime': {
          useESModules: false
        },
        'preset-env': {
          useBuiltIns: 'usage',
          corejs: 3
        }
      }
    ]
  ],
  plugins: [
    [
      'inline-react-svg',
      {
        svgo: {
          plugins: [
            {
              cleanupIDs: false
            }
          ]
        }
      }
    ],
    ['transform-define', env],
    'emotion'
  ]
};
