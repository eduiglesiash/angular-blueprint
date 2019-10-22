module.exports = {
  name: 'layout-domain',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/layout/domain',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
