module.exports = {
  name: 'layout-ui',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/layout/ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
