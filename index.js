const fs = require('fs')

const studentName = process.argv[2]
console.log(studentName)

fs.appendFile('./students.txt', '\n' + studentName, (err) => {
    if (err) {
        return console.log(err)
    }
    console.log('Student has been added')
})

// fs.readFile('./students.txt', 'utf8', (err, data) => {
//     if (err) {
//         return console.log(err)
//     }

//     const names = data.split('\n')

//     for (let name of names) {
//         console.log(name)
//     }
// })