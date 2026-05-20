const fs = require('fs');
const { Command, Argument } = require('commander');
const program = new Command();

program
    .name('Manipulator')
    .description('manipulate the files in your file system!')
    .version('1.0.0')

program
    .command('c')
    .description('Count the number of characters in your file.')
    .option('-f, --file <path>', 'location of the file')
    .action((options)=>{
        const data = fs.readFileSync(options.file ,'utf-8');
        console.log(data.length);
    })

program.parse();