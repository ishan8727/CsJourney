const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
    .name('counter!')
    .description('count the number of chareacters in your file!')
    .version('0.1.0');


program
    .option('-e --exit', 'this does nothing!')
    .option('-f --file', 'name of the file')
    .argument('<string>')
    .action(()=>{
        console.log('file read!!!!');
    });


program.parse();

const options = program.opts();
const length = program.args[0].length;
console.log(program.args[0].split(" ",length));