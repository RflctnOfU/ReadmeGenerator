// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license.license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
  } else if (license.license === 'ISC') {
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]'
  } else if (license.license === 'GNU GPLv3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]'
  } else if (license.license === 'Apache License 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]'
  } else return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license.license === 'MIT') {
    return `(https://opensource.org/licenses/MIT)`
  } else if (license.license === 'ISC') {
    return `(https://opensource.org/licenses/ISC)`
  } else if (license.license === 'GNU GPLv3') {
    return `(https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license.license === 'Apache License 2.0') {
    return `(https://opensource.org/licenses/Apache-2.0)`
  } else return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license.license != 'none') {
    return `This project is licensed under the ${license.license} license.`
  } else return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseBadge(data)}${renderLicenseLink(data)}     
  # ${data.title}

  ---
  ## Description

  ${data.description}

  ---
  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ---
  ## Installation

  \`\`\`bash
  ${data.install}
  \`\`\`

  ---
  ## Usage

  \`\`\`
  ${data.usage}
  \`\`\`

  ---
  ## License

  
  ${renderLicenseSection(data)}
  

  ---
  ## Contributing

  If you would like to contribute, please adhere to the following guidelines:
  >${data.contribution}

  ---
  ## Tests

  How to run my tests:
  >${data.test}
  
  ---
  ## Questions

  My [Github](https://github.com/${data.github}) profile.

  If you have questions, send me an [email](${data.email})
`;
}

module.exports = generateMarkdown;
