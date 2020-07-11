// array of questions for user
const questions = [
    {
        type : 'input',
        message : 'Enter project title:',
        name : 'projectTitle'
    },
    {
        type : 'input',
        message : 'Enter project description:',
        name : 'projectDesc'
    },
    {
        type : 'input',
        message : 'Enter installation instructions',
        name : 'InstalInst'
    },
    {
        type : 'input',
        message : 'Enter usage information',
       name : 'usageInfo'
    },
    {
        type : 'editor',
        message : 'Enter contribution guidelines',
        name : 'contriGuide'
    },
    {
        type : 'editor',
        message : 'Enter test instructions',
        name : 'testInst'
    },
    {
        type : 'list',
        message : 'Choose a license out of following options: ',
        name : 'license',
        choices : ['GNU GPLv3','MIT', 'ISC','Unlicense', 'None']
    },
    {
        type : 'input',
        message : 'Enter your github username',
        name : 'gitHubUser'
    },
    {
        type : 'input',
        message : 'Enter your email address',
        name : 'email'
    }
];

module.exports = questions;