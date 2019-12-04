/**
 * This is a simple app to do with yargs package and more
 */

 // Imports
const argv = require('./config/yargs').argv;
const toDo = require('./to-do/to-do');


let command = argv._[0];

// Menu
switch( command ) {
    case 'create':
        let task = toDo.create(argv.description);
        console.log(task);
        break;
    case 'list':
        console.log('list');
        break;
    case 'update':
        console.log('update');
        break;
    default:
        console.log('unrecognized command');
}
