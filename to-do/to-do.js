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

/**
 * This function consists in update the object of array if exists, specifically
 * the field complete
 * @param {String} description - description to be searched in the array 
 * @param {boolean} complete - field to be updated in the object
 * @return {boolean} true if the description exists or false otherwise
 */
const updateList = (description, complete = true) => {
    loadDB();

    let chek = checkIfExists(description);

    if (chek == true) {
        listToDo.forEach((value) => {
            if (description == value.description) {
                value.completed = complete;
            }
        });
        storeDB();
        return true;
    } else {
        return false;
    }
}

/**
 * This function consists in checking if the description passed to the
 * argument exists in the array
 * @param {String} description - description to be checked
 * @return {boolean} true if the description exists or false otherwise
 */
const checkIfExists = (description) => {
    loadDB();

    for (let i of listToDo) {
        if (i.description.localeCompare(description) == 0) {
            return true;
        }
    }

    return false;
}

/**
 * This function consists in delete a task if exists
 * @param {String} description - description of the task 
 * @return {boolean} true if it could deleted or false otherwise
 */
const deleteObject = (description) => {
    loadDB();

    let newList = listToDo.filter(task => {
        return task.description != description  
    });

    if (newList.length === listToDo.length) {
        return false;
    } else {
        listToDo = newList;
        storeDB();
        return true;
    }
}

module.exports = {
    createList,
    getList,
    updateList,
    deleteObject
}