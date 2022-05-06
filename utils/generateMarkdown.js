// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'none') {
    return '';
  }
  else{ 
    return `## License ${license}`
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'none') {
    return '';
  }
  if(license === 'IBM Public License Version 1.0') {
    return '[IBM Public License Version 1.0](https://opensource.org/licenses/IPL-1.0)'
  }
  if(license === 'ISC License (ISC)') {
    return '[ISC License (ISC)](https://opensource.org/licenses/ISC)'
  }
  if(license === 'The MIT License') {
    return '[The MIT License](https://opensource.org/licenses/MIT)'
  }

}

// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'none') {
    return '';
  }
  if(license === 'IBM Public License Version 1.0') {
    return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
  }
  if(license === 'ISC License (ISC)') {
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
  }
  if(license === 'The MIT License') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
}


// Function to generate markdown for README 
// using language from Professional README Guide 
// https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}
  
  ## Table of Contents
 
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  Email me at: ${data.email}
  
  View my GitHub portfolio at https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;
