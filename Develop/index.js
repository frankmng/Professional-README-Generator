// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        mesage: "What is the title of your project?"
    },
    {
        type: 'input',
        name: 'description',
        message: "What is the motivation for building this project?"
    }
];

inquirer.prompt(questions).then((answers) => {
    const fileName = `README_TEST.md`
    // const answers = 
    writeToFile(fileName, (JSON.stringify(answers, null, '  ')));
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
