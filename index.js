const markdownmaker = require('./markdown')
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const prompt = inquirer.createPromptModule();
const fs = require('fs');
const path = require('path');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of the project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is the description of the project?'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How is this project meant to be used?'
  },
  {
    type: 'input',
    name: 'contributers',
    message: 'Who are the contributers of the project?'
  },
  {
    type: 'input',
    name: 'questions',
    message: 'How can you report questions and issues associated with this project?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter the contact email of the author:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'select license from list',
    choices: ['MIT', 'Apache 2.0', 'GPL', 'None']
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(__dirname, '/sample/', fileName), data)
 }

// TODO: Create a function to initialize app
function init() {
  prompt(questions).then(answers => {
    console.log(answers)
    writeToFile('README.md', markdownmaker(answers))
  })
 }

// Function call to initialize app
init();