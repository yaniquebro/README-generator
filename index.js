// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'What is title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter your project description',
    },
    {
        type: 'input',
        name: 'installInstructions',
        message: 'Enter the installation instructions',
    },
    {
        type: 'input',
        name: 'appUsage',
        message: 'Enter the usage information',
    },
    {
        type: 'input',
        name: 'howToContribute',
        message: 'Enter the contribution guidelines',
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'Enter the test instructions',
    },
    {
        type: 'list',
        message: 'Choose a license type for the application',
        name: 'licenseType',
        choices: ['MIT', 'Apache 2.0', 'MPL 2.0'],
    },
    {
        type: 'input',
        name: 'gitHubUser',
        message: 'What is your GitHub username?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log("FILE NOT CREATED INVALID DATA", err);
        } else {
            console.log('File created!');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    const generateMarkdown = require('./utils/generateMarkdown');
    const readMe = "./README.md";
    inquirer.prompt(questions).then((data) => {
        writeToFile(readMe, generateMarkdown(data));
    });
}
// Function call to initialize app
init();