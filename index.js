// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = ('inquirer');
const generateMarkdown = require ('./utils/generateMarkdown');
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
    function writeToFile(fileName, data) { 
        const content = generateMarkdown(data);
        fs.writeFile(fileName, content, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating Professional README.md File...");
        writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
      });
}

// Function call to initialize app
init();
