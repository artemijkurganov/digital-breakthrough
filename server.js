const express = require('express');
var fs = require('fs');
const { exec } = require("child_process");

const app = express();

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/send", (req, res) => {
    var jsonData = JSON.stringify(req.query);
    fs.writeFile("data.json", jsonData, (err) => {
        if (err)
            console.log(err);
    });
    const isWin = process.platform === "win32";
    if (isWin)
        exec('python main.py', runScript);
    else exec('python3 main.py', runScript);
    res.sendStatus(200);
})

app.listen(3000);
console.log("Listening on localhost:3000")

const runScript = (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`${stdout}`);
}