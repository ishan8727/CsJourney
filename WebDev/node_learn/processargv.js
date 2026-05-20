const fs = require('fs');

function main(){
    const a = process.argv[2];
    const b = process.argv[3];
    c = a*b;
    console.log(c);
    console.log(typeof(a), typeof(b), typeof(c));
    // parseInt(a);
    // console.log(typeof(a), typeof(b), typeof(c));
    
}

main();