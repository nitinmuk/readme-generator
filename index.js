// array of questions for user
const questions = require('./utils/questions');
const gmd = require('./utils/generateMarkdown');
const inquirer = require("inquirer");
const fs = require('fs');

// function to write README file
function writeToFile(fileName, data) {
fs.appendFile(fileName, 
`${gmd('Title')}
${data.projectTitle}
${gmd('Description')}
${data.projectDesc}
${gmd('Table of Contents')}`, handleError);
}

// function to initialize program
function init() {
    console.log('Hi, Welcome to ReadMe generator');
    inquirer.prompt(questions).then(
        answers => {
            removeFile('./README.MD');
            console.log('Generating New README.MD ...');
            writeToFile('README.md',answers);
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
            console.log('Deleting Current README.MD..');
            fs.unlink(path, handleError);
        }
    } catch(error) {
        console.log(error);
    }
}