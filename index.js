const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const genOutput = require('./src/html');
const orgStructure = [];


init = () => {
 function teamGen() { inquirer.prompt([
    { type: 'list', name: 'role', message: 'choose worker role', choices: ["Engineer","Manager", "Intern", "Exit"]},
  ]).then((answers) => {
    switch (answers.role) {
      case "Manager": genManager(answers); break;
      case "Intern": genIntern(); break;
      case "Engineer": genEngineer(); break;
      case "Exit": genMembers(); 
      default: 
      genMembers();
    } 
  }); 
  }

  const genManager = () => { inquirer.prompt([
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
        name: 'email',
      },
      {
      type: 'input',
        message: 'Enter manager Office Number:',
        name: 'office',
      }      
  ]).then(answers => {const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
    orgStructure.push(manager) 
    console.log(answers.name, answers.id, answers.email, answers.office)
    teamGen();
  });
}

  const genEngineer = () => { inquirer.prompt([
    {
      type: 'input',
      message: 'Enter Engineer Name:',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Enter Engineer ID:',
      name: 'id',
    },
    {
      type: 'input',
      message: 'Enter Engineer Email:',
      name: 'email',
    },
    {
      type: 'input',
      message: 'Enter Engineer Github:',
      name: 'github',
    }
  ]).then(answers => {const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    orgStructure.push(engineer) 
    console.log(answers.name, answers.id, answers.email, answers.github)
    teamGen();
  });
}
  
  const genIntern = () => { inquirer.prompt([
    {
      type: 'input',
      message: 'Enter Intern Name:',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Enter Intern ID:',
      name: 'id',
    },
    {
      type: 'input',
      message: 'Enter Intern Email:',
      name: 'email',
    },
    {
      type: 'input',
      message: 'Enter Intern School:',
      name: 'school',
    }
  ]).then(answers => {const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    orgStructure.push(intern) 
    console.log(answers.name, answers.id, answers.email, answers.school)
    teamGen();
  });
  }
  
  function genMembers() {let HTMLContent = genOutput(orgStructure)
    const filePath = "./dist/index.html";
    fs.writeFileSync(filePath, HTMLContent, "utf-8")
  }
  
  teamGen();
  
}
init();


