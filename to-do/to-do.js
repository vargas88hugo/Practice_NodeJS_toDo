const fs = require('fs');

let listToDo = [];

// Function that creates an object from the arguments
const create = (description) => {
    let toDo = {
        description,
        completed: false
    }

    listToDo.push('toDo');

    return toDo;
}

module.exports = {
    create
}