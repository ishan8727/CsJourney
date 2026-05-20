const fs = require('fs');
const { Command, Argument } = require('commander');
const program = new Command();

program
    .name('Manipulator')
    .description('manipulate the files in your file system!')
    .version('1.0.0')

program
    .command('count')
    .description('Count the number of characters/lines in your file.')
    .argument('<file>')
    .option('-l ,--line', 'count number of lines')
    .action((file, options)=>{
        if(options.line){
            const data = fs.readFileSync(file ,'utf-8');
            console.log(data.split('\n').length);
            // console.log(options)
        }
        else{
            const data = fs.readFileSync(file ,'utf-8');
            console.log(data.length);
        }
    })

program.parse();