const inquirer = require(`inquirer`);
const { Manager, Engineer, Intern } = require("./src/employeeClasses");
const fs = (`fs`);
const employeeClasses = require(`./src/employeesClasses`);
const questions = require(`./src/questions`);

const teamMembers = [];

function addteamMember() {
    inquirer.prompt(generalQuestions)
    .then(function({name, id, role, email}){
        if (role === `Manager`) {
            inquirer.prompt(managerQuestion);
        } else if (role === `Engineer`) {
            inquirer.prompt(engineerQuestion);
        } else {
            inquirer.prompt(internQuestion);
        }
        inquirer.prompt(addMoreMembers)
    })
    .then(function({contact, moreMembers}){
        let newEmployee;
        if (role === `Manager`) {
            newEmployee = new Manager(name, id, email, contact);
        } else if (role === `Engineer`) {
            newEmployee = new Engineer(name, id, email, contact);
        } else {
            newEmployee = new Intern(name, id, email, contact);
        }
        teamMembers.push(newEmployee);
        
    })
}