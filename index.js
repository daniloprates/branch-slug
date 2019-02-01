#!/usr/bin/env node
var slug = require('slug');
var clipboardy = require('clipboardy');

var includeBranch = false;
var doCopy = true;
var hasType = true;

var args = process.argv
  .slice(2)
  .filter(function(value) {
    if (value === '-b') {
      includeBranch = true;
    } else if (value === '-c') {
      doCopy = false;
    } else if (value === '-t') {
      hasType = false;
    } else {
      return true;
    }
  });

var branch = includeBranch ? 'git branch -m ' : '';
var type = hasType ? `${args.splice(0, 1)}/` : '';
var description = slug(args.join('-'), { lower: true });

var output = branch + type + description;

if (doCopy) {
  clipboardy.writeSync(output);
  console.log('\n"%s" copied to clipboard\n', output);
} else {
  console.log('\n%s\n', output);
}
