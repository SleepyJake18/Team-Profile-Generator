const inquirer = require(`inquirer`);
const fs = (`fs`);
const { Employee, Manager, Engineer, Intern } = require(`./src/employeeClasses`);
const { generalQuestions, managerQuestion, engineerQuestion, internQuestion, addMoreMembers } = require(`./src/questions`);
const { startHTML, generateCard, endHTML } = require(`./src/generateHTML`);

const teamMembers = [];

function init() {
    startHTML();
    addTeamMember();
}

async function addTeamMember() {
    inquirer.prompt(generalQuestions)
    .then(async function(data){
        if (data.role === `Manager`) {
           const manager =  await inquirer.prompt(managerQuestion);
            //await inquirer.prompt(addMoreMembers);
           return await createMember({...data,...manager});
        } else if (data.role === `Engineer`) {
           const engineer = await  inquirer.prompt(engineerQuestion);
           return await createMember({...data,...engineer});
            //createMember(role);
        } else if (data.role === `Intern`) {
          const intern =  inquirer.prompt(internQuestion);
          return await createMember({...data,...intern});
            // createMember(role);
        }
    })
    .then(function(moreMembers){
        possiblyContinue(moreMembers);
    })
}


function createMember(data){
    let newEmployee;
    console.log(data);
    if (data.role === `Manager`) {
        newEmployee = new Manager(data.name, data.id, data.email, data.contact)
    } else if (data.role === `Engineer`) {
        newEmployee = new Engineer(data.name, data.id, data.email, data.contact)
    } else if (data.role === `Intern`) {
        newEmployee = new Intern(data.name, data.id, data.email, data.contact)
    }
    generateCard(newEmployee)
    teamMembers.push(newEmployee)
    return inquirer.prompt(addMoreMembers)
};

function possiblyContinue(moreMembers) {
    console.log(moreMembers);
    if (moreMembers === 'Yes') {
        return addTeamMember();
    } else if (moreMembers === 'No') {
        return endHTML();
    }
};

init();
