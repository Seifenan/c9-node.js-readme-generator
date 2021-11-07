// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'Title',
    message: 'What is the title of this project?',
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log('Please enter your title!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'Description',
    message: 'Provide a brief description of this Project or Application.',
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('Please enter your description!');
        return false;
      }
    }
  },
  {
    type: 'checkbox',
    name: 'Table of Contents',
    message: 'What sections would you like to include in this project?',
    choices: [
      {
        name: 'Deployed Application Link',
        checked: true
      },
      {
        name: 'Description',
        checked: true
      },
      {
        name: 'Installation',
        checked: false
      },
      {
        name: 'Usage',
        checked: false
      },
      {
        name: 'License',
        checked: false
      },
      {
        name: 'Contributors',
        checked: false
      },
      {
        name: 'Tests',
        checked: false
      },
      {
        name: 'Questions',
        checked: false
      },
      {
        name: 'GitHub Repository Link',
        checked: true
      },
      {
        name: 'Screenshots',
        checked: true
      },
    ]
  },
  {
    type: 'input',
    name: 'Installation',
    message: 'Provide step-by-step installation instructions for your Application.',
    validate: installInput => {
      if (installInput) {
        return true;
      } else {
        console.log('Please enter your installation instructions to continue!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'Usage',
    message: 'Provide an example or instructions for using your Application.',
    validate: usageInput => {
      if (usageInput) {
        return true;
      } else {
        console.log('Please enter your example or usage instructions to continue!');
        return false;
      }
    }
  },
  {
    type: 'List',
    name: 'License',
    message: 'Which license(s) was used or will be used in this project?',
    choices: [
      'Apache 2.0', 
      'BSD 2', 
      'BSD 3', 
      'EPL', 
      'GNU', 
      'MIT', 
      'Mozilla', 
      'No License'
    ]
  },
  {
    type: 'input',
    name: 'Contributors',
    message: 'Who are the Contributors of this project?',
    validate: contribInput => {
      if (contribInput) {
        return true;
      } else {
        console.log('Please enter your Contributors to continue!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'Tests',
    message: 'What are the instructions for testing this project?',
    validate: testingInput => {
      if (testingInput) {
        return true;
      } else {
        console.log('Please enter your instructions to continue!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'Questions',
    message: 'Provide an email for others to reach you with questions.',
    validate: questionsInput => {
      if (questionsInput) {
        return true;
      } else {
        console.log('Please enter a valid email address!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'Username',
    message: 'What is your GitHub username?',
    validate: usernameInput => {
      if (usernameInput) {
        return true;
      } else {
        console.log('Please enter a valid username!');
        return false;
      }
    }
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();








// const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);


// var profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);


// var cmdlineArg = process.argv;
// console.log(cmdlineArg);


// var message = 'Hello Node!';
// var sum = 5 + 3;
// console.log(message);
// console.log(sum);