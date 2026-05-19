const { Command } = require('commander');
const program = new Command();

program
    .name('string utility')
    .description('CLI to some JavaScript string utilities')
    .version('1.0.0');

program.command('split')
    .description('Split string into substrings and display an array')
    .argument('<string>', 'string to split')
    .option('--first', 'display just the first substring')
    .option('-s, --separator <char>', 'separator character',',')
    .action((str, options)=>{
        const limit = options.first ? 1 : undefined;
        console.log(str.split(options.separator, limit));
    });

program.parse();