// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {
    data = [];
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is your project title? (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }
                    else {
                        console.log('Please enter your project title!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'description',
                message: 'Enter a description of your project.',
                default: ''
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Enter installation instructions.',
                default: ''
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Enter instructions for use.',
                default: ''
            },
            {
                type: 'checkbox',
                name: 'license',
                message: 'What licenses did you use for this project? (Check all that apply)',
                default: '',
                choices: ['MIT', 'Apache', 'GPLv2', 'GPLv3', 'BSD 3-clause']
            },
            {
                type: 'input',
                name: 'contributors',
                message: 'Enter contributors for the project.',
                default: ''
            },
            {
                type: 'input',
                name: 'test',
                message: 'Enter test instructions.',
                default: ''
            },
            {
                type: 'input',
                name: 'github',
                message: 'Enter your GitHub Username (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }
                    else {
                        console.log('Please enter your GitHub username!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter your email.',
                default: ''
            },
        ]);

};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(`./dist/${fileName}`, data, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
}

// TODO: Create a function to initialize app
function init() {
    questions()
    .then(answers => {
        return generateMarkdown(answers);
    })
    .then(markdown => {
        return writeToFile('README.md', markdown)
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    });
}

// Function call to initialize app
init();

