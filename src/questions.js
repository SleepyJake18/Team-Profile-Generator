const generalQuestions = [
    {
        type: `input`,
        message: `What is your team member's name?`,
        name: `name`
    },
    {
        type: `list`,
        message: `What is your team member's role?`,
        choices: [
            `Engineer`,
            `Intern`,
            `Manager`
        ],
        name: `role`
    },
    {
        type: `input`,
        message: `What is your team member's ID?`,
        name: `id`
    },
    {
        type: `input`,
        message: `What is your team member's email address?`,
        name: `email`
    }
];

const engineerQuestion = [
    {
        type: `input`,
        message: `What is your engineer's GitHub username?`,
        name: `contact`
    }
];

const managerQuestion = [
    {
        type: `input`,
        message: `What is your manager's office number?`,
        name: `contact`
    }
];

const internQuestion = [
    {
        type: `input`,
        message: `What is your intern's school name?`,
        name: `contact`
    }
];

const addMoreMembers = [
    {
        type: `list`,
        message: `Would you like to add more members?`,
        choices: [
            `Yes`,
            `No`
        ],
        name: `moreMembers`
    }
];

module.exports = { generalQuestions, engineerQuestion, managerQuestion, internQuestion, addMoreMembers };