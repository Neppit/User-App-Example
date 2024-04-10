// const alice = {
//     name: 'Alice',
//     age: 23
// }

function Person(name, age, hobbies) {
    this.name = name
    this.age = age
    this.hobbies = hobbies
    }

    Person.prototype.haveBirthday = function() {
        this.age++
        console.log('Happy Birthday')
    }

    Person.prototype.printBirthday = function() {
        console.log(`You are ${this.age} years old.`)
    }

    Person.prototype.species = 'homosapien'

const alice = new Person('Alice', '23', ['writing', 'sleeping'])
const bob = new Person('Bob', '40', ['Bingo', 'Sitting'])

alice.haveBirthday()
alice.printBirthday()
console.log(alice)