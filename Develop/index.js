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
    }
];

inquirer.prompt(questions).then((answers) => {
    const fileName = `README_TEST.md`
    // const projectTitle = [];
    // const {title: title } = answers;
    // const {description: description, ...answers} = answers
    // let title2 = ({ title: projectTitle[0] } = answers);
    const data = generateMarkdown(answers)
    writeToFile(fileName, data);
});
// TODO: Create a function to write README file

let writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) => 
    err ? console.log(err) : console.log('Success!'));
}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
