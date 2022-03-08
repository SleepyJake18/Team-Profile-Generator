const fs = require(`fs`);
const { resolve } = require("path");

function startHTML () {
    const HTML = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="stylesheet.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
        <title>Team Members</title>
    </head>
    <body>
        <header>
            <nav class="navbar navbar-light bg-light">
                <span class="navbar-brand mb-0 h1">Navbar</span>
            </nav>
        </header>
        <main class = "container">
            <div class = "row">`;
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
        card = `<div class="card col-6" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">ID: ${id}</h6>
            <p class="card-text">${role}</p>
            <a href="#" class="card-text">Office Number: ${office}</a><p class="card-text"> Email:
            <a href="mailto:${email}" class="card-link">${email}</a>
        </div>
    </div>`;
    } else if (role === `Engineer`) {
        const github = member.getGitHub();
        card = `<div class="card col-6" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">ID: ${id}</h6>
            <p class="card-text">${role}</p>
            <a href="https://github.com/${github}/" class="card-link">Office Number: ${github}</a><p class="card-text"> Email:
            <a href="mailto:${email}" class="card-link">${email}</a>
        </div>
    </div>`
    } else {
        const school = member.getSchool();
        card = `<div class="card col-6" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">ID: ${id}</h6>
            <p class="card-text">${role}</p>
            <a href="#" class="card-text">${school}</a><p class="card-text"> Email:
            <a href="mailto:${email}" class="card-link">${email}</a>
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