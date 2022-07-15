// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')
const markdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter a description of your project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What, if any, are the instructions for installation?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Any information about usage?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please enter contribution guidelines',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Please enter any test instructions.',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Under which license will this app be covered?',
        name: 'license',
        choices: ['MIT', 'ISC', 'GNU GPLv3', 'Apache License 2.0']
    },
    {
        type: 'input',
        message: 'Please enter your GitHub user name.',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Please enter your email address?',
        name: 'email'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // fs.writeFile('readme.json', JSON.stringify(fileName, null, '\t'), (err) => err ? console.error(err) : console.log('success'));
    markdown(fileName);
    fs.writeFile('README2.md', generateMarkdown(data), (err) => err ? console.error(err) : console.log('big success!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) =>
            fs.writeFile('readme.json', JSON.stringify(response, null, '\t'), (err) => err ? console.error(err) : console.log('success')))


}

// Function call to initialize app
init();









// Description:
// 