module.exports = {
  name: 'dynamic',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/dynamic',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
