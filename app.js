
'use strict';

const events = require('./lib/events.js');
const files = require('./lib/files.js');
const logger = require('./lib/logger.js');

let file = process.argv.slice(2).shift();
// console.log('process:', process.argv);
// console.log('file:', file);
if (file) {
  files.alterFile(file);
}