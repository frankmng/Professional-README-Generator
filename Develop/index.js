// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        mesage: "Title of project: "
    },
    {
        type: 'input',
        name: 'description',
        message: "Description of project: "
    },
    {
        type: 'input',
        name: 'installation',
        message: "List the steps to install project: "
    },
    {
        type: 'input',
        name: 'usage',
        message: "Provide instructions and examples for use: "
    },
    {
        type: 'input',
        name: 'credits',
        message: "List your collaborators: "
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license:',
        choices: [
            'None',
            'Apache License 2.0', 
            'GNU General Public License v3.0', 
            'MIT License',
            'BSD 2-Clause “Simplified” License',
            'BSD 3-Clause “New or “Revised” License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU Affero General Public License v3.0',
            'GNU General Public License v2.0',
            'GNU Lesser General Public License v2.1',
            'Mozilla Public License 2.0'
        ]
    },
    {
        type: 'input',
        name: 'username',
        message: "Enter your github username: "
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter your email-adress: "
    }
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err ? console.log(err) : console.log('Success!'));
}

// // TODO: Create a function to initialize app
function init() {

inquirer.prompt(questions).then((answers) => {
    const fileName = `README_TEST.md`
    const data = generateMarkdown(answers)
    writeToFile(fileName, data);
})
    
}

// // Function call to initialize app
init();
