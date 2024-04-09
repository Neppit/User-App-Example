const inquirer = require('inquirer')

inquirer.prompt([{
    type: 'input',
    name: 'color',
    message: 'Please type your favorite color'
},

{
    type: 'confirm',
    name: 'likesNode',
    message: 'Do you like Node JS?'
},

{
    type: 'list',
    name: 'answer',
    message: 'What do we use to import a package into a JS file in Node?',
    choices: ['return', 'require', 'function'],
},
{
    type: 'checkbox',
    name: 'food',
    message: 'What is your favorite food genre?',
    choices: ['Korean', 'Turkish'],
}]
)
    .then((answerObj) => {
        console.log(answerObj)
    })
    .catch((err) => {
        console.log(err)
    })
