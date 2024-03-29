# Weather app

This is a simple To Do app that adds, updates, lists and deletes the tasks entered in the command line and creates persistence with a json file. It is my introduction with NodeJS. For this project I used yargs and colors packages.

## Requirements

For development, you will only need Node.js, yargs and axios packages.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.
```
      $ sudo apt install nodejs
      $ sudo apt install npm
```

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.
```
    $ node --version
    v8.11.3

    $ npm --version
    6.1.0
```

## Install

```
    $ git clone https://github.com/vargas88hugo/weather_nodejs.git
    $ cd weather_nodejs
    $ npm install
```

## Running the project

```
    $ node app create -d "Walk the dog"
    $ node app list
    $ node app update -d "Walk the dog -c true
    $ node app delete -d "Walk the dog"
```
