// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ---
  ## Description

  ${data.description}

  ---
  ## Table of Contents

  -[Installation](#installation)
  -[Usage](#usage)
  -[License](#license)
  -[Contributing](#contributing)
  -[Tests](#tests)
  -[Questions](#questions)

  ---
  ## Installation {#installation}

  \`\`\`bash
  ${data.install}
  \`\`\`

  ---
  ## Usage {#usage}

  \`\`\`
  ${data.usage}
  \`\`\`

  ---
  ## License

  \`\`\`md
  ${renderLicenseSection()}
  \`\`\`

  ---
  ## Contributing {#contributing}

  If you would like to contribute, please adhere to the following guidelines:
  >${data.contribution}

  ---
  ## Tests {#tests}

  How to run my tests:
  >${data.test}
  
  ---
  ## Questions {#questions}

  My [Github](github.com/${data.github}) profile.

  If you have questions, send me an [email](${data.email})
`;
}

module.exports = generateMarkdown;
