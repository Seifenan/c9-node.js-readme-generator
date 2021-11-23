// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');



// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'username',
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
  {
    type: 'input',
    name: 'title',
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
    name: 'description',
    default: 'This basic app requires the user to install dependancies and will ask a series of questions to generate a readme file',
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
    type: 'list',
    name: 'license',
    message: 'Which license(s) was used or will be used in this project?',
    choices: [
      'Apache_2.0', 
      'BSD_2', 
      'BSD_3', 
      'EPL', 
      'GNU', 
      'MIT', 
      'Mozilla', 
      'No_License'
    ]
  },
  {
    type: 'input',
    name: 'installation',
    default: 'Install using "npm i" command in your terminal',
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
    name: 'usage',
    default: 'User must "npm install" in the terminal to automatically install required dependencies and files. The user must run "node index.js" to trigger the set of questions that will generate the readme file',
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
    type: 'input',
    name: 'contributors',
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
    name: 'tests',
    default: 'This is the Automated README test!',
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
    name: 'email',
    message: 'Provide an email for others to reach you with questions.',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log('Please enter a valid email address!');
        return false;
      }
    }
  },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//   fs.writeFile('README.md'
// }

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(userResponses => {
    console.log('Generating README...');
    writeToFile('README.md', generateMarkdown(userResponses));
  });
}

// Function call to initialize app
init();