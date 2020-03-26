module.exports = {
  name: 'warehouse',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/warehouse',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
