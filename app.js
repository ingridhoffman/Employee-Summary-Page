const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// WHY?
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
// Temporary team
const tempManager = new Manager("Iryna", 1, "iryna@email.com", 100);
const tempEngineer = new Engineer("Tim", 2, "tim@email.com", "timUser");
const tempIntern = new Intern("Forrest", 3, "forrest@email.com", "UofO");
const team = [tempManager, tempEngineer, tempIntern];

// Render HTML
const html = render(team);

// Hint: you may need to check if the `output` folder exists and create it if it
// does not. WHY? If we setup the folder system?

fs.writeFile(outputPath, html, err => {
	if (err) throw err;
	console.log(`File ${path.basename(outputPath)} has been saved!`);
});
