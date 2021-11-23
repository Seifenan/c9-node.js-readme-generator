// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
  else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    if (license === 'Apache_2.0') {
      return 'https://opensource.org/licenses/apache-2.0/'
    } else if (license === 'BSD_2') {
      return 'https://opensource.org/licenses/BSD-2-Clause/';
    } else if (license === 'BSD_3') {
      return 'https://opensource.org/licenses/BSD-3-Clause/';
    } else if (license === 'EPL') {
      return 'https://opensource.org/licenses/EPL-1.0';
    } else if (license === 'GNU') {
      return 'https://opensource.org/licenses/gpl-license';
    } else if (license === 'MIT') {
      return 'https://opensource.org/licenses/mit/';
    } else if (license === 'Mozilla') {
      return 'https://opensource.org/licenses/mpl-2.0/';
    } else if (license === 'No_License') {
      return 'https://opensource.org/licenses/unlicense/';
    }
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `${renderLicenseLink(license)}`;
  } else {
    return '';
  }
}

// ## License
  // [![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}  
  ${renderLicenseBadge(data.license)}

  ## Description  
  ${data.description}

  ## Table of Contents 
  * [description](#description)
  * [installation](#installation)
  * [usage](#usage)
  * [username](#username)
  * [questions](#questions)
  * [credits](#credits)
  * [license](#license)
  * [badges](#badges)
  * [contribution](#contribution)
  * [test](#test)
  
  ## Installation
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## Credits
  ${data.username}

  ## Contributing
  ${data.contributors}

  ## Tests
  ${data.tests}

  ## Questions
  To check out more of my projects, visit my repo [link](https://github.com/${data.username}).
  To reach me with more questions email me at ${data.email}. 

  ## License
  ${renderLicenseBadge(data.license)}
  
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
