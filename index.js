const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");
const Engineer = require("./lib/Engineer.js");
const generateHTML = require('./src/HTMLgenerator.js');

const officeTeam = [];

// array of questions for user
const managerPrompt = () => {
    return inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the team manager's name?",
                validate: managerName => {
                    if (managerName) {
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
            },
            {
                type: "input",
                name: "email",
                message: "What is the team manager's email?",
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the team manager's office number?",
            },
        ])
        .then((answers) => {
            const manager = new Manager(
                answers.name,
                answers.id,
                answers.email,
                answers.officeName
            );
            // officeTeam.push(manager);
            // idArray.push(answers.id);
            promptChoice();
        });
};

const internPrompt = () => {
    return inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is your intern's name?",
            },
            {
                type: "input",
                name: "id",
                message: "What is your intern's id?",
            },
            {
                type: "input",
                name: "email",
                message: "What is your intern's email?",
            },
            {
                type: "input",
                name: "school",
                message: "What is your intern's school?",
            },
        ])
        .then((Answers) => {
            const intern = new Intern(
                Answers.name,
                Answers.id,
                Answers.email,
                Answers.school
            );
            // officeTeam.push(intern);
            promptChoice();
        });
};

const engineerPrompt = () => {
    return inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is your engineer's name?",
            },
            {
                type: "input",
                name: "id",
                message: "What is your engineer's id?",
            },
            {
                type: "input",
                name: "email",
                message: "What is your engineer's email?",
            },
            {
                type: "input",
                name: "github",
                message: "What is your engineer's GitHub username?",
            },
        ])
        .then((Answers) => {
            const engineer = new Engineer(
                Answers.name,
                Answers.id,
                Answers.email,
                Answers.github
            );
            // officeTeam.push(engineer);
            promptChoice();
        });
};

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
                // return generateSite();
            }
        });
};
const generateSite = () => {
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }
    fs.writeFileSync(outPutPath, generateHTML(officeTeam), "utf-8");
};
managerPrompt();
