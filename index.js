const inquirer = require(`inquirer`);
const { Manager, Engineer, Intern } = require("./src/employeeClasses");
const fs = (`fs`);
const employeeClasses = require(`./src/employeesClasses`);
const questions = require(`./src/questions`);
const htmlfunctions = require(`./src/generateHTML`);
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
        
    })
    .then(function({role}){
        let newEmployee;
        if (role === `Manager`) {
            newEmployee = new Manager(name, id, email, contact);
        } else if (role === `Engineer`) {
            newEmployee = new Engineer(name, id, email, contact);
        } else {
            newEmployee = new Intern(name, id, email, contact);
        }
        teamMembers.push(newEmployee);
        inquirer.prompt(addMoreMembers)
    })
    .then(function({moreMembers}){
        if (moreMembers === `Yes`) {
            function addteamMember();
        } else {
            teamMembers.forEach(member => htmlfunctions.generateCard());
        }
    })
    .then(function(){
        htmlfunctions.endHTML();
    })
}