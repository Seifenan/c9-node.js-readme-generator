// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description  

  ${data.description}

  ## Table of Contents (Optional)

  ## Installation

  ${data.installation}

  ## Usage 
  ${data.usage}

  ## Credits
  ${data.contributors}

  ## License
  [![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})

  ## Badges

  ${data.license}

  ## Contributing

  ${data.contributors}
  ## Tests
  ${data.tests}
`;
}

module.exports = generateMarkdown;
