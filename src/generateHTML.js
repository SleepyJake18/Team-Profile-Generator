const fs = require(`fs`);
const { resolve } = require("path");

function startHTML () {
    const HTML = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
        <link rel="stylesheet" href="stylesheet.css">
        <title>Team Members</title>
    </head>
    <body>
        <header>
            <nav class="navbar customNav justify-content-center">
                <span class="mb-0 h1">My Team</span>
            </nav>
        </header>
        <main class = "container">
            <div class = "row justify-content-center align-items-center">`;
            fs.writeFile(`./dist/myteam.html`, HTML, function(err) {
                if (err) {
                    console.log(err);
                }
            });
            console.log("start");
        }

function generateCard(member) {
    const name = member.getName();
    const role = member.getRole();
    const email = member.getEmail();
    const id = member.getId();
    let card = ``;
    if(role === `Manager`) {
        const office = member.getOfficeNumber();
        card = `<div class="card col-4 my-3 mx-3" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title border-bottom border-dark">${name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">ID: ${id}</h6>
            <p class="card-text">${role}</p>
            <p class="card-text">Office Number: 
            <a href="#" class="card-text">${office}</a>
            </p>
            <p class="card-text"> Email:
            <a href="mailto:${email}" class="card-link">${email}</a>
            </p>
        </div>
    </div>`;
    } else if (role === `Engineer`) {
        const github = member.getGitHub();
        card = `<div class="card col-4 my-3 mx-3" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title border-bottom border-dark">${name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">ID: ${id}</h6>
            <p class="card-text">${role}</p>
            <p class="card-text">GitHub: 
            <a href="https://github.com/${github}/" class="card-link">${github}</a>
            </p>
            <p class="card-text">Email: 
            <a href="mailto:${email}" class="card-link">${email}</a>
            </p>
        </div>
    </div>`
    } else {
        const school = member.getSchool();
        card = `<div class="card col-4 my-3 mx-3" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title border-bottom border-dark">${name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">ID: ${id}</h6>
            <p class="card-text">${role}</p>
            <p class="card-text">School: ${school}</p>
            <p class="card-text"> Email:
            <a href="mailto:${email}" class="card-link">${email}</a>
            </p>
        </div>
    </div>`
    }
    fs.appendFile(`./dist/myteam.html`, card, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("Member Added");
}

function endHTML() {
    const finishHTML = `</div>
    </main>
</body>
</html>`;
fs.appendFile(`./dist/myteam.html`, finishHTML, function(err) {
    if (err) {
        console.log(err);
    }
});
console.log(`Finished`);
}

module.exports = { startHTML, generateCard, endHTML};