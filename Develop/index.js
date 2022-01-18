// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "name",
    message: "Enter Your Name:",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub username:",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "input",
    name: "title",
    message: "Enter Project Title:",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Project must have a title!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Enter Project Description:",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "Enter the instructions for installation:",
    validate: (installationInput) => {
      if (installationInput) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Enter the Instructions for usage:",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
const writeToFile = (data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./README.md", data, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: console.log("Success!"),
      });
    });
  });
};

const init = () => {
  return inquirer.prompt(questions);
};

init()
  .then((userInput) => {
    return generateMarkdown(userInput);
  })
  .then((readmeInfo) => {
    return writeToFile(readmeInfo);
  })
  .catch((err) => {
    console.log(err);
  });
