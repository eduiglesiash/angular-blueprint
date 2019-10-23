module.exports = {
  name: 'pwa',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/pwa',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
