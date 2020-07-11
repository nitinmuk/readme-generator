const questions = require('./utils/questions');
const gmd = require('./utils/generateMarkdown');
const inquirer = require("inquirer");
const fs = require('fs');

/**
 * it generates markdown code in README.md using fs and generateMarkdown modules
 * @param {name of file which need to be generated} fileName 
 * @param {holds answers for each question provided by user} data 
 */
function writeToFile(fileName, data) {
    fs.writeFile(fileName, gmd(data), error =>
        error ? console.log(error) : console.log("README.md generated successfully in output folder.")
    );
}

/**
 * function to trigger questions and collect answers and then generate README in output folder.
 */
function init() {
    console.log('Hi, Welcome to ReadMe generator');
    inquirer.prompt(questions).then(
        answers => {
            console.log('Generating New README.MD in output folder...');
            writeToFile('./output/README.md', answers);
        });
}

// function call to execute program
init();