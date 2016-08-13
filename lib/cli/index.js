#!/usr/bin/env node
const program = require('commander');

program
  .version('0.1.0')
  .command('install <version>', 'install a version of Firefox')
  .parse(process.argv);
