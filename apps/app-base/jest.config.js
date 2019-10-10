module.exports = {
  name: 'app-base',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/app-base',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
