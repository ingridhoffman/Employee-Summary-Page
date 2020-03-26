// Required external modules
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// Required internal modules
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require("./lib/htmlRenderer");

// WHY?
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Variable to hold team members
const team = [];

// USER PROMPTS
// general Employee questions
const employeeQuestions = [
	{
		type: "employeeInfo",
		name: "name",
		message: "Name:"
	},
	{
		type: "employeeInfo",
		name: "id",
		message: "ID:"
	},
	{
		type: "employeeInfo",
		name: "email",
		message: "Email:"
	}
];
// Manager questions
const managerQuestions = [
	{
		type: "employeeInfo",
		name: "officeNumber",
		message: "Office number:"
	}
];
// Engineer questions
const engineerQuestions = [
	{
		type: "employeeInfo",
		name: "github",
		message: "GitHub username:"
	}
];
// Intern questions
const internQuestions = [
	{
		type: "employeeInfo",
		name: "school",
		message: "School attending:"
	}
];
// Next team member to be added
const nextTeamMember = [
	{
		type: "list",
		message: "What team member would you like to add next?",
		name: "next",
		choices: ["Engineer", "Intern", "No more team members"]
	}
];

// MAIN FUNCTION
// Async wrapper function to await prompts
async function createTeam() {
	// Start with Manager
	let role = "Manager";
	// Until user indicates there are no more team members
	while (role != "No more team members") {
		// Prompt user for information about employee
		const employeeInfo = await inquirer.prompt(employeeQuestions);
		// Prompt for role specific information and create team member
		let specialInfo;
		let newTeamMember;
		switch (role) {
			case "Manager":
				specialInfo = await inquirer.prompt(managerQuestions);
				newTeamMember = new Manager(employeeInfo.name, employeeInfo.id, employeeInfo.email, specialInfo.officeNumber);
				break;
			case "Engineer":
				specialInfo = await inquirer.prompt(engineerQuestions);
				newTeamMember = new Engineer(employeeInfo.name, employeeInfo.id, employeeInfo.email, specialInfo.github);
				break;
			case "Intern":
				specialInfo = await inquirer.prompt(internQuestions);
				newTeamMember = new Intern(employeeInfo.name, employeeInfo.id, employeeInfo.email, specialInfo.school);
				break;
			default:
				console.log("Oops! Something went wrong");
		}
		// Add new team member to team
		team.push(newTeamMember);
		// Get and set next team member role
		const answer = await inquirer.prompt(nextTeamMember);
		role = answer.next;
	}
	// Render HTML
	const html = render(team);

	// Hint: you may need to check if the `output` folder exists and create it if it
	// does not. WHY? If we setup the folder system?

	// Create HTML file
	fs.writeFile(outputPath, html, err => {
		if (err) throw err;
		console.log(`File ${path.basename(outputPath)} has been saved!`);
	});
}
createTeam();
