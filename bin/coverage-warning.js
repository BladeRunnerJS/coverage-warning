#!/usr/bin/env node
var colors = require('colors/safe');

console.info(
  colors.red('With Great Power Comes Great Responsibility:\n') +
  '\n' +
  '  Adding tests solely for the purpose of increasing code coverage\n' +
  '  considered harmful:\n' +
  '\n' +
  '    * http://www.dan-manges.com/blog/increasing-code-coverage-may-be-harmful\n' +
  '\n' +
  '  Good tests verify the desired behavior of the program in the tersest,\n' +
  '  most easy to comprehend manner. Your coverage report is available as\n' +
  '  \'coverage-report.html\'.\n' +
  '\n' +
  colors.green('Please use this information in a responsible manner.\n')
);
