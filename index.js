#!/usr/bin/env node
var program = require('commander');
var slug = require('slug');
var clipboardy = require('clipboardy');
var chalk = require('chalk');

program
  .option('-g, --no-git', 'Don\'t include git command for new branch "git branch -m"')
  .option('-c, --no-copy', 'Don\'t copy output to the clipboard')
  .option('-t, --type <typet>', 'Branch type. The output is {type}/{description}');

program.on('--help', function(){
  console.log(`
Types (-t {type}):
  ${chalk.greenBright.bold('f')} or ${chalk.greenBright.bold('fe')} for ${chalk.blueBright('feature')}
  ${chalk.greenBright.bold('fi')} for ${chalk.blueBright('fix')}
  ${chalk.greenBright.bold('b')} for ${chalk.blueBright('bug')}
  ${chalk.greenBright.bold('c')} for ${chalk.blueBright('chore')}
  ${chalk.greenBright.bold('r')} for ${chalk.blueBright('release')}
  or any other custom type e.g. ${chalk.greenBright.bold('special')}`)
});

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
if (type === 'f' || type === 'fe') type = 'feature';
else if (type === 'fi') type = 'fix';
else if (type === 'b') type = 'bug';
else if (type === 'c') type = 'chore';
else if (type === 'r') type = 'release';
if (type) type+='/'
var description = slug(args.join('-'), { lower: true });
var copyOutput = gitCommand + type + description;
var printOutput = chalk.greenBright.bold(copyOutput);
if (program.copy) {
  clipboardy.writeSync(copyOutput);
  printOutput += chalk.blueBright(' copied to clipboard.');
}
printOutput = chalk.blueBright.bold('Branch Slug: ') + printOutput;

console.log('\n%s\n', printOutput);
