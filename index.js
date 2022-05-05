// Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a description of how to get the development environment running.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please list the license that you are using. This lets other developers know what they can and cannot do with your project.',
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
        name: 'questions',
        message: 'Allow users to contact you if they have additional questions.',
    },
];

// TODO: Create a function to write README file
//function generateMarkdown(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(data)
        const output = generateMarkdown(data);
        console.log(output)
        fs.writeFile('README.md', output, (err) => {
            if (err) {
                console.log(err);
            }
            console.log('README created!');
        });
    });
}

// Function call to initialize app
init();


