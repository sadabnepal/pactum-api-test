module.exports = {
  extension: ['ts'],
  recursive: true,
  parallel: false,
  timeout: 3000,
  reporter: ['spec', "mochawesome"],
  'reporter-option': ['reportDir=report', 'reportFilename=index'],
  package: './package.json',
  spec: ["./tests/specs/*.ts"],
  require: 'ts-node/register',
};