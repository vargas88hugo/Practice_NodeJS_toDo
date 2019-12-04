/**
 * This is a simple app to do with yargs package and more
 */

 // Imports
const argv = require('./config/yargs').argv;
const toDo = require('./to-do/to-do');
const colors = require('colors');


let command = argv._[0];

// Menu
switch( command ) {
    case 'create':
        let task = toDo.create(argv.description);
        console.log(task);
        break;
    case 'list':
        let list = toDo.getList();
        
        for (let task of list) {
            console.log('================= To Do ================='.green);
            console.log(task.description + " - " + task.completed);
            console.log('=========================================\n'.green);
        }
        
        break;
    case 'update':
        console.log('update');
        break;
    default:
        console.log('unrecognized command');
}
