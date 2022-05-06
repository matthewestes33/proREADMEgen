// Packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// An array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please list the license that you are using.',
        choices: ['The MIT License', 'ISC License (ISC)', 'IBM Public License Version 1.0', 'none']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'List your collaborators, if any, with links to their GitHub profiles',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Include the instructions for your tests here.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'In case users have questions, what is your email?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'In case users want to see your portfolio, what is your GitHub username?',
    },
];

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
// Function to write README file
        const output = generateMarkdown(data);
        fs.writeFile('README.md', output, (err) => {
            if (err) {
                console.log(err);
            }
            console.log('Your README has been generated!');
        });
    });
}

// Function call to initialize app
init();


