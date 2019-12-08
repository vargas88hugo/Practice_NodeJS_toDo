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
            console.log(('The task ' + task.description + ' has been created.\n').green);
        } else {
            console.log('Description already exists please enter another.\n'.red);
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
        let foo = toDo.updateList(argv.description, argv.complete);
        if (foo == true) {
            console.log(('The task ' + argv.description + ' has been updated.\n'). green);
        } else {
            console.log('Description not found.\n'.red);
        }
        break;
    case 'delete':
        let dele = toDo.deleteObject(argv.description);

        if (dele == true) {
            console.log(("The task " + argv.description + " has been deleted.\n").green);
        } else {
            console.log("Description not found.".red);
        }

        break;
    default:
        console.log('unrecognized command');
}
