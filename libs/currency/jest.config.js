module.exports = {
  name: 'currency',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/currency',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
