module.exports = {
  name: 'layout-feature',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/layout/feature',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
