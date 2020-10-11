const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");
const Engineer = require("./lib/Engineer.js");
const generateHTML = require('./src/page-template.js');
const {writeFile} = require('./util/generate-site');

const officeTeam = [];

// Manager prompt Questions
const managerPrompt = () => {
    return inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the team manager's name?",
                validate: Input => {
                    if (Input) {
                        return true;
                    } else {
                        console.log('Please enter a team manager name!');
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "id",
                message: "What is the team manager's id?",
                validate: Input => {
                    if (Input) {
                        return true;
                    } else {
                        console.log('Please enter a team manager ID!');
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "email",
                message: "What is the team manager's email?",
                validate: Input => {
                    if (Input) {
                        return true;
                    } else {
                        console.log('Please enter a team manager email!');
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the team manager's office number?",
                validate: Input => {
                    if (Input) {
                        return true;
                    } else {
                        console.log('Please enter a team manager office number!');
                        return false;
                    }
                }
            },
        ])
        .then((answers) => {
            const manager = new Manager(
                answers.name,
                answers.id,
                answers.email,
                answers.officeNumber
            );
            officeTeam.push(manager);
            promptChoice();
        });
};

// Intern Prompt Question
const internPrompt = () => {
    return inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is your intern's name?",
                validate: Input => {
                    if (Input) {
                        return true;
                    } else {
                        console.log('Please enter an Intern name!');
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "id",
                message: "What is your intern's id?",
                validate: Input => {
                    if (Input) {
                        return true;
                    } else {
                        console.log('Please enter an Intern ID!');
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "email",
                message: "What is your intern's email?",
                validate: Input => {
                    if (Input) {
                        return true;
                    } else {
                        console.log('Please enter an Intern e-mail!');
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "school",
                message: "What is your intern's school?",
                validate: Input => {
                    if (Input) {
                        return true;
                    } else {
                        console.log('Please enter an Intern school!');
                        return false;
                    }
                }
            },
        ])
        .then((Answers) => {
            const intern = new Intern(
                Answers.name,
                Answers.id,
                Answers.email,
                Answers.school
            );
            officeTeam.push(intern);
            promptChoice();
        });
};

// Engineer prompt Questions
const engineerPrompt = () => {
    return inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is your engineer's name?",
                validate: Input => {
                    if (Input) {
                        return true;
                    } else {
                        console.log('Please enter Engineer name!');
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "id",
                message: "What is your engineer's id?",
                validate: Input => {
                    if (Input) {
                        return true;
                    } else {
                        console.log('Please enter Engineer ID!');
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "email",
                message: "What is your engineer's email?",
                validate: Input => {
                    if (Input) {
                        return true;
                    } else {
                        console.log('Please enter Engineer e-mail!');
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "github",
                message: "What is your engineer's Github username?",
                validate: Input => {
                    if (Input) {
                        return true;
                    } else {
                        console.log('Please enter Engineer Github username!');
                        return false;
                    }
                }
            },
        ])
        .then((Answers) => {
            const engineer = new Engineer(
                Answers.name,
                Answers.id,
                Answers.email,
                Answers.github
            );
            officeTeam.push(engineer);
            promptChoice();
        });
};

// Prompt to add more Employee or finish building the team
const promptChoice = () => {
    return inquirer
        .prompt([
            {
                type: "list",
                name: "team",
                message: "Which team member would you like to add?",
                choices: ["Engineer", "Intern", "Finish building the team"],
            },
        ])
        .then((choice) => {
            if (choice.team === "Engineer") {
                return engineerPrompt();
            } else if (choice.team === "Intern") {
                return internPrompt();
            } else if (choice.team === "Finish building the team") {
                return generateHTML(officeTeam);
            }
        })
        .then(pageHTML => {
            return writeFile(pageHTML);
        })
};

managerPrompt();