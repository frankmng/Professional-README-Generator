// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges ={
    '':'None',
    '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)':'Apache License 2.0',  
    '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)':'GNU General Public License v3.0',
    '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)':'MIT License',
    '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)':'BSD 2-Clause “Simplified” License',
    '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)':'BSD 3-Clause “New or “Revised” License',
    '':'Boost Software License 1.0',
    '[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)':'Creative Commons Zero v1.0 Universal',
    '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)':'Eclipse Public License 2.0',
    '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)':'GNU Affero General Public License v3.0',
    '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)':'GNU General Public License v2.0',
    '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)':'GNU Lesser General Public License v3',
    '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)':'Mozilla Public License 2.0'
  }
  const result = Object.keys(badges).find(key => badges[key] === license);
  return result;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  return(`Licensed under ${license}.`)
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {title, description, installation, usage, credits, license} = data

  let badge = renderLicenseBadge(license)
  let licenseSection = renderLicenseSection(license)
  // Call function renderLicenseBadge
  // then call function renderLicenseLink
  // then call function renderLicenseSection

  return (
    `${badge}\n
# ${title}\n
## Description
${description}\n
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)\n
## Installation
${installation}\n
## Usage
${usage}\n
## Credits
${credits}\n
## License
${licenseSection}\n`
);
}


module.exports = generateMarkdown;
