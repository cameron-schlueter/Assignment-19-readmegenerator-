// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![MIT badge](https://img.shields.io/badge/license-MIT-blue)'
  }
  else if (license === 'Apache 2.0') {
    return '![Apache badge](https://img.shields.io/badge/license-Apache%202.0-lightgreen)'
  }
  else if (license === 'GPL') {
    return '![GPL](https://img.shields.io/badge/license-GPL-yellow)'
  }
  else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license === 'None'){
  return ''
}
else {
  return '- [License](#license)'
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None'){
    return ''
  }
  else {
    return `### License
    https://opensource.org/license/apache-2-0/
    `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description 
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributers](#contributers)
${renderLicenseLink(data.license)}

### Installation
${data.installation}

### Usage
${data.usage}

### Contributers
${data.contributers}

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;