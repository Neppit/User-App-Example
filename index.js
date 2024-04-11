
class Phone {
    screen = true

    constructor(number, size, model, color) {
        this.number = number
        this.size = size
        this.model = model
        this.color = color
    }
}

class iPhone extends Phone {
    facetime = true

    constructor(number, size, model, color, appleID) {
        super(number, size, model, color)
        this.appleID = appleID
    }
}

class Samsung extends Phone{
    foldable = true

    constructor(number, size, model, color, repairID) {
        super(number, size, model, color)
        this.repairID = repairID
    }
}

const alicePhone = new iPhone('555-555-5555', 'standard', '15', 'slate grey', 'sdajdjsadjsad')
const benPhone = new Samsung('555-555-5555', 'standard', '15', 'slate grey', 'sdajdjsadjsad')

console.log(alicePhone)
console.log(benPhone)

// class Person {
//     species = 'homosapien'

//     constructor(name, age, hobbies) {
//         this.name = name
//         this.age = age
//         this.hobbies = hobbies
//     }

//     haveBirthday() {
//         this.age++
//         console.log('Happy Birthday', this.name)
//     }

//     printBirthday() {
//         console.log(`${this.name} is ${this.age} years old.`)
//     }
//     printHobbies() {
//         console.log('\nHobbies\n--------')

//         this.hobbies.forEach(hobby => {
//             console.log(hobby)
//         })
//     }
// }

// const alice = new Person('Alice', '23', ['writing', 'sleep'])

// console.log(alice)

// function Person(name, age, hobbies) {
//     this.name = name
//     this.age = age
//     this.hobbies = hobbies
//     }

//     Person.prototype.haveBirthday = function() {
//         this.age++
//         console.log('Happy Birthday')
//     }

//     Person.prototype.printBirthday = function() {
//         console.log(`You are ${this.age} years old.`)
//     }

//     Person.prototype.species = 'homosapien'

// const alice = new Person('Alice', '23', ['writing', 'sleeping'])
// const bob = new Person('Bob', '40', ['Bingo', 'Sitting'])

// alice.haveBirthday()
// alice.printBirthday()
// console.log(alice)