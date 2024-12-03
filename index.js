// TODO: Include packages needed for this application
import inquirer from 'inquirer'; // Installed Inquirer
import fs from "fs"; // Installed Filesystem

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter your project title:",
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description of your project:",
    },
    {
        type: "input",
        name: "installation",
        message: "Enter installation instructions:",
    },
    {
        type: "input",
        name: "usage",
        message: "Enter usage information:",
    },
    {
        type: "input",
        name: "contributing",
        message: "Enter contribution guidelines:",
    },
    {
        type: "input",
        name: "tests",
        message: "Enter test instructions:",
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license:",
        choices: ["MIT", "Apache 2.0", "GPL 3.0"],
    },
    {
        type: "input",
        name: "githubUsername",
        message: "Enter your GitHub username:",
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address:",
    },
];

// TODO: Create a function to write README file
function generateReadme(answers) {
    const licenseBadge =
        answers.license === "MIT"
            ? "![License Badge](https://img.shields.io/badge/license-MIT-blue)"
            : answers.license === "Apache 2.0"
                ? "![License Badge](https://img.shields.io/badge/license-Apache%202.0-blue)"
            : answers.license === "GPL 3.0"
                ? "![License Badge](https://img.shields.io/badge/license-GPL%203.0-blue)"
                : null
    return `
  # ${answers.title}
  
  ${licenseBadge}
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Description
  ${answers.description}
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## License
  This project is licensed under the ${answers.license} License.
  
  ## Contributing
  ${answers.contributing}
  
  ## Tests
  ${answers.tests}
  
  ## Questions
  If you have any questions, please feel free to reach out:
  
  - GitHub: [${answers.githubUsername}](https://github.com/${answers.githubUsername})
  - Email: [${answers.email}](mailto:${answers.email})
    `;
}
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err)
        : console.log('README.md has been generated.')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        //Generate README content based on the user's responses
        const readmeContent = generateReadme(answers);

        //Write the content to the README file
        writeToFile('README.md', readmeContent)

        //Output the generated README content to the console
        console.log("Generated README.md content")
    })
}

// Function call to initialize app
init();