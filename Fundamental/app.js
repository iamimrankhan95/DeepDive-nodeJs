console.log('started...');
//-------------requires
/**
 * If the module identifier passed to require() is not a core module, and does not begin with '/', '../', or './', then Node.js starts at the parent directory of the current module, and adds /node_modules, and attempts to load the module from that location. Node will not append node_modules to a path already ending in node_modules.

If it is not found there, then it moves to the parent directory, and so on, until the root of the file system is reached.
 */
var fs = require('fs');
const os=require('os');
const moduleTest=require('./playground/moduleTest.js');
const _=require('lodash');
const yargs=require('yargs');
// const json=require('./playground/json');
const common=require('./commonFiles/common');
//______________________________

var argv=yargs.argv;
// var command=process.argv[2];
// console.log('process=> ', process.argv,'\n\n\n');
console.log('yarg=> ',argv);
// p(argv._[0]);p();
if(argv._[0]=='add'){
    moduleTest.addNote(argv.title,argv.body);
}
if(argv._[0]=='remove'){
    moduleTest.remove(argv.title,argv.body);
}
// var user=os.userInfo();

//console.log(user);
//fs.appendFileSync('fundamental.txt',`hello ${user.username} !`);
// console.log(note.add(2,3));
// console.log(_.isString('imran'));
// var x='imran';
// console.log(x.isString);
// console.log(process.argv);








































