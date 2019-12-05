const fs = require('fs');

let listToDo = [];

/**
 * Function that stores data in a file with the method writeFile
 */
const storeDB = () => {
    let data = JSON.stringify(listToDo);

    fs.writeFile('db/data.json', data, (e) => {
        if (e) throw new Error('Cannot be stored');
    });
}

/**
 * Function that loads the information of json files. It
 * creates persistence in the data
 */ 
const loadDB = () => {
    try {
        listToDo = require('../db/data.json');
    } catch (error) {
        listToDo = [];
    }
}

/**
 * Function that creates an object from the arguments
 * @param {String} description - argument of the command line
 */
const createList = (description) => {
    loadDB();

    if (checkIfExists(description)) {
        return null;
    }

    let toDo = {
        description,
        completed: false
    }

    listToDo.push(toDo);

    storeDB();

    return toDo;
}

/**
 * Function that reads a json file and store it in an array
 * @return {Array} array with json objects
 */
const getList = () => {
    try {
        listToDo = require('../db/data.json');
    } catch (error) {
        listToDo = [];
    }

    return listToDo;
}

const updateList = (description, complete = true) => {
    loadDB();

    listToDo.forEach((value) => {
        if (description == value.description) {
            value.completed = complete;
        }
    });

    storeDB();
}

const checkIfExists = (description) => {
    loadDB();

    for (let i of listToDo) {
        if (i.description.localeCompare(description) == 0) {
            return true;
        }
    }

    return false;
}


module.exports = {
    createList,
    getList,
    updateList
}