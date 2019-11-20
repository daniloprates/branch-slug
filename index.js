#!/usr/bin/env node
var program = require('commander');
var slug = require('slug');
var clipboardy = require('clipboardy');
var chalk = require('chalk');

program
  .option('-g, --no-git', chalk.magenta(`Don\'t include git command for new branch ${chalk.italic.bold('git branch -m')}`))
  .option('-n, --no-copy', chalk.magenta('Don\'t copy output to the clipboard'))
  .option('-f, --type-feature', chalk.greenBright(`Branch type: ${chalk.blueBright('feature')}. The output is ${chalk.blue.bold('feature/{description')}`))
  .option('-i, --type-fix', chalk.greenBright(`Branch type: ${chalk.blueBright('fix')}. The output is ${chalk.blue.bold('fix/{description')}`))
  .option('-b, --type-bug', chalk.greenBright(`Branch type: ${chalk.blueBright('bug')}. The output is ${chalk.blue.bold('bug/{description')}`))
  .option('-c, --type-chore', chalk.greenBright(`Branch type: ${chalk.blueBright('chore')}. The output is ${chalk.blue.bold('chore/{description')}`))
  .option('-r, --type-release', chalk.greenBright(`Branch type: ${chalk.blueBright('release')}. The output is ${chalk.blue.bold('release/{description')}`))
  .option('-t, --type <type>', chalk.greenBright(`Custom branch type. The output is ${chalk.blue.bold('{type}/{description}')}`));

program.parse(process.argv);

var nextItemIsTypeDescription = false;

var args = process.argv
  .slice(2)
  .filter((item, index, array) => {
    if (nextItemIsTypeDescription) {
      nextItemIsTypeDescription = false;
      return false;
    }
    if (item === '-t' || item === '--type') {
      nextItemIsTypeDescription = true
    }
    if (program.options.find(o => o.short === item || o.long === item)) {
      return false
    }
    return true;
  });

var gitCommand = program.git ? 'git branch -m ' : '';
var type = program.type || '';
if (program.typeFeature) type = 'feature';
else if (program.typeFix) type = 'fix';
else if (program.typeBug) type = 'bug';
else if (program.typeChore) type = 'chore';
else if (program.typeRelease) type = 'release';
if (type) type+='/'
var description = slug(args.join('-'), { lower: true, remove: /[.]/g });
if (!description) {
  return
}
var copyOutput = gitCommand + type + description;
var printOutput = chalk.greenBright.bold(copyOutput);
if (program.copy) {
  clipboardy.writeSync(copyOutput);
  printOutput += chalk.blueBright(' copied to clipboard.');
}
printOutput = chalk.blueBright.bold('Branch Slug: ') + printOutput;

console.log('\n%s\n', printOutput);
