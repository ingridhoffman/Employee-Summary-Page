# Employee Summary Page

## Homework 10: Node CLI

You will build a software engineering team generator command line application. The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns. This assignment must also pass all unit tests. When the user has completed building the team, the application will create an HTML file that displays a nicely formatted team roster based on the information provided by the user.

### User Story

```
As a manager
I want to generate a webpage that displays my team's basic info
so that I have quick access to emails and GitHub profiles
```

### Acceptance Criteria

```
WHEN I open the Node terminal
THEN I am provided prompts to build my engineering team which consists of a manager, and any number of engineers or interns
WHEN I follow the prompts for information for my role as Manager
THEN I am asked for my name, ID, email, and office number
WHEN I complete my information
THEN I am asked to select the role of my next team member
WHEN I select the role of Engineer
THEN I am asked for name, ID, email, and GitHub username
WHEN I select the role of Intern
THEN I am asked for name, ID, email, and school
WHEN I no longer have team members to add
THEN I can choose to end prompts and I am provided an html page for the team
```

### Bonus

```
WHEN I provide information at the prompts
THEN the input is validated for proper expected format
```

## Developer Notes

### Workflow

1. Run tests provided to understand required code functionality
2. Create code for each class to pass all tests

### Priorities

1. Make methods as pure and simple as possible to ensure ease of testing and adaptability for future use of code

### Credits

Files/code provided for this assignment:

- code tests
- html templates
- html renderer script

### Tests

Test files are included with this application in the test folder. Currently, only Employee tests pass.
