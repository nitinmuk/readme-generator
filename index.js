// array of questions for user
const questions = require('./utils/questions');
const gmd = require('./utils/generateMarkdown');
const inquirer = require("inquirer");
const fs = require('fs');

// function to write README file
function writeToFile(fileName, data) {
fs.appendFile(fileName,gmd(data), handleError);
}

// function to initialize program
function init() {
    console.log('Hi, Welcome to ReadMe generator');
    inquirer.prompt(questions).then(
        answers => {
            removeFile('./output/README.MD');
            console.log('Generating New README.MD in output folder...');
            writeToFile('./output/README.md',answers);
            console.log(JSON.stringify(answers, null, '\n'));
        });
}

// function call to initialize program
init();

const handleError = error => {
    if(error) {
        console.log(error);
    }
}
const removeFile = path => {
    try {
        if(fs.existsSync(path))
        {
            console.log('Deleting current README.MD from output folder..');
            fs.unlink(path, handleError);
        }
    } catch(error) {
        console.log(error);
    }
}