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
        let task = toDo.createList(argv.description);

        if (task != null) {
            console.log(task);
        } else {
            console.log('Description already exists please enter another\n'.red);
        }
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
        toDo.updateList(argv.description, argv.complete);
        break;
    default:
        console.log('unrecognized command');
}
