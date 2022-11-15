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
  return (
    `# ${data.title}\n
## Description\n\n
${data.description}\n
## Table of Contents\n
- [Installation](#installation)<br>
- [Usage](#usage)<br>
- [Credits](#credits)<br>
- [License](#license)\n
## Installation\n
${data.installation}\n
## Usage\n
${data.usage}\n`
);
}

module.exports = generateMarkdown;
