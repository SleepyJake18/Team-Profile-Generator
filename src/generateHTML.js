const fs = require(`fs`);

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
        };
