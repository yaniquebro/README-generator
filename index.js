// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = ('inquirer');
const generateMarkdown = require ('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
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
    {
        type: 'input',
        name: 'userEmail',
        message: 'What is your email address?',
        validate: function (email) {
            // Regex mail check (return true if valid mail)
            const isValid = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
            return isValid ? true : "Enter a valid email address";
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
