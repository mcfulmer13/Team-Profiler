const { fstat } = require('fs');
const inquirer = require('inquirer');
const html = require('./html.js');
const fs = require('fs');


  return inquirer.prompt([
    {
      type: 'input',
      message: 'Enter Manager Name:',
      name: 'name',
    },
     {
        type: 'input',
        message: 'Enter Manager ID:',
        name: 'id',
      },
      {
        type: 'input',
        message: 'Enter Manager Email:',
        name: 'Email',
      },
      {
      type: 'input',
        message: 'Enter Member Office Number:',
        name: 'office',
      },
      {
        type: 'list',
        message: 'Add a Memeber:',
        name: 'positions',
        choices: ["Intern", "Engineer", "NONE!!!"]
      }
  ])
  .then((answers) => {
    // Use user feedback for position!!
    if(answers.positions == "Intern"){
      return inquirer.prompt([
        {
          type: 'input',
          message: 'Enter Intern Name:',
          name: 'iname',
        },
        {
          type: 'input',
          message: 'Enter Intern ID:',
          name: 'iid',
        },
        {
          type: 'input',
          message: 'Enter Intern Email:',
          name: 'iemail',
        },
        {
          type: 'input',
          message: 'Enter Intern School:',
          name: 'ischool',
        },
        {
          type: 'list',
          message: 'Add a Memeber:',
          name: 'positions',
          choices: ["Intern", "Engineer", "NONE!!!"]
        }
      ])   
    }
  }) 
  .then((answers) => {
    // Use user feedback for position!!
    if(answers.positions == "Engineer"){
      return inquirer.prompt([
        {
          type: 'input',
          message: 'Enter Engineer Name:',
          name: 'ename',
        },
        {
          type: 'input',
          message: 'Enter Engineer ID:',
          name: 'eid',
        },
        {
          type: 'input',
          message: 'Enter Engineer Email:',
          name: 'eemail',
        },
        {
          type: 'input',
          message: 'Enter Engineer Github:',
          name: 'egithub',
        },
        {
          type: 'list',
          message: 'Add a Memeber:',
          name: 'positions',
          choices: ["Intern", "Engineer", "NONE!!!"]
        }
      ])   
    } 
  })
  .then((answers) => {
    console.log(answers.name)
    console.log(answers.email)
    console.log(answers.id)
    fs.writeFile("index.html", html(data), (err) => {
      if (err)
        console.log(err);
      else {
        console.log("File written successfully\n");
      }
    });
  })


