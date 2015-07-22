var argv = require('argv'),
    echo = require('../lib/echo');
//console.log(process.argv[2]);
console.log(echo(process.argv.join(' ')));
//console.log(echo(argv.join(' ')));

