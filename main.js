
// ------------------------------------------------------------
// task 1 - function constructor


// function Human(name, sname, weig, color){
//     this.name =name
//     this.sname = sname
//     this.weig = weig
//     this.color = color
// }

// Human.prototype.talking = function() {
//     console.log(`${this.name} can speak`);
// }

// Human.prototype.walking = function() {
//     console.log(`${this.name} ${this.sname} can walk`);
// }

// Human.prototype.skinColor = function() {
//     console.log(`${this.name} skin color ${this.color}`);
// }

// Human.prototype.weight = function(){
//     console.log(`${this.name} weight ${this.weig} kg`);
// }

// let men1 = new Human(`stepan`, `petrov`, `70`, `white`) 
// let men2 = new Human('ivan', 'stepanov', '55', 'black') 

// console.log(men1);
// men1.skinColor();
// men1.walking();
// men1.weight()
// men1.talking();
// console.log(men2);

// function Woman(firstName, secondName, weight, skinColor){
//     Human.call(this, firstName, secondName, weight, skinColor)
// }

// Woman.prototype = Object.create(Human.prototype)
// Woman.prototype.constructor = Woman

// let wom = new Woman(`ira`, `bila`, `45`, `white`)
// console.log(wom);
// wom.walking();


// function Librarian(fName, lName, weig, color, sortBooks){
//  Woman.call(this, fName, lName, weig, color)
//  this.sortBooks = sortBooks
// }

// Librarian.prototype = Object.create(Woman.prototype)
// Librarian.prototype.constructor = Librarian
// Librarian.prototype.tasks = function(){
//     console.log(`${this.name} sort book and watching the silence`);
// }

// let lib = new Librarian(`sara`, `ivanova`, `50`, `white`, `yes`)

// console.log(lib);
// lib.tasks()

// function Nurse(fName, lName, weig, color, treats){
//     Woman.call(this, fName, lName, weig, color)
//     this.treats = treats
// }

// Nurse.prototype = Object.create(Woman.prototype)
// Nurse.prototype.constructor = Nurse
// Nurse.prototype.task = function(){
//     console.log(`${this.name} treats people`);
// }

// let nurs = new Nurse(`ivanka`, `stepova`, `60`, `white`, true)

// console.log(nurs);
// nurs.task()


// function Man(firstName, secondName, weight, skinColor){
//     Human.call(this, firstName, secondName, weight, skinColor)
// }

// Man.prototype = Object.create(Human.prototype)
// Man.prototype.constructor = Man


// function Hunter(name, sname, weight, color, weapon){
//     Man.call(this, name, sname, weight, color)
//     this.weapon = weapon
// }

// Hunter.prototype = Object.create(Man.prototype)
// Hunter.prototype.constructor = Hunter
// Hunter.prototype.task = function(){
//     console.log(`${this.name} hanting animal`);
// }

// let hunt = new Hunter(`oleg`, `dronov`, `90`,`white`, `drob`)

// console.log(hunt);
// hunt.task()


// function Worker(name, sname, weight, color, weapon){
//     Man.call(this, name, sname, weight, color)
//     this.weapon = weapon
// }

// Worker.prototype = Object.create(Man.prototype)
// Worker.prototype.constructor = Worker
// Worker.prototype.task = function(){
//     console.log(`${this.name} works on the construction site`);
// }

// let work = new Worker(`orest`, `slivak`, `80`,`white`, `structure`)

// console.log(work);
// work.task()


// ----------------------------------------------------------------------------------
// task2 --- function constructor


// function Animal(walk, run, haveWool){
//     this.walk = walk
//     this.run = run
//     this.wool = haveWool
// }


// function Predator(name, walk, run, haveWool, hunting, tamed){
//     Animal.call(this, walk, run, haveWool)
//     this.hunting = hunting
//     this.tamed = tamed
//     this.name = name
// }

// Predator.prototype = Object.create(Animal.prototype)
// Predator.prototype.constructor = Predator
// Predator.prototype.tam = function(){
//     console.log(`${this.name} can be tamed: ${this.tamed}`);
// }

// let wolf = new Predator(`wolf`, true, true, true, true, true,)
// let snake = new Predator(`snake`, false, false, false, true, false)

// console.log(wolf);

// wolf.tam()

// console.log(snake);
// snake.tam()


// function Herbivorous(name, walk, run, haveWool, tamed, herbivorous){
//     Animal.call(this, walk, run, haveWool)
//     this.tamed = tamed
//     this.name = name
//     this.herbivorous = herbivorous
// }

// Herbivorous.prototype = Object.create(Animal.prototype)
// Herbivorous.prototype.constructor = Herbivorous
// Herbivorous.prototype.tam = function(){
//     console.log(`${this.name} can be tamed: ${this.tamed}`);
// }

// let horse = new Herbivorous(`horse`, true, true, true, true, true,)
// let deer = new Herbivorous(`deer`, true, true, true, false, true,)

// console.log(horse);
// console.log(deer);

// deer.tam()
// horse.tam()


// -----------------------------------------------------------------------------
// task1--Class


// class Human {
//     constructor(name, sname, weig, color) {
//         this.name = name
//         this.sname = sname
//         this.weig = weig
//         this.color = color
//     }
//     talking() {
//         console.log(`${this.name} can speak`)
//     }
//     walking() {
//         console.log(`${this.name} ${this.sname} can walk`)
//     }
//     skinColor() {
//         console.log(`${this.name} skin color ${this.color}`)
//     }
//     weight() {
//         console.log(`${this.name} weight ${this.weig} kg`)
//     }
// }

// let men1 = new Human(`stepan`, `petrov`, `70`, `white`) 
// let men2 = new Human('ivan', 'stepanov', '55', 'black') 

// console.log(men1);
// men1.skinColor();
// men1.walking();
// men1.weight()
// men1.talking();
// console.log(men2);


// class Woman extends Human {
//     constructor(firstName, secondName, weight, skinColor) {
//         super(firstName, secondName, weight, skinColor)
//     }
// }

// let wom = new Woman(`ira`, `bila`, `45`, `white`)
// console.log(wom);
// wom.walking();


// class Librarian extends Woman {
//     constructor(fName, lName, weig, color, sortBooks) {
//         super(fName, lName, weig, color)
//         this.sortBooks = sortBooks
//     }
//     tasks() {
//         console.log(`${this.name} sort book and watching the silence`)
//     }
// }

// let lib = new Librarian(`sara`, `ivanova`, `50`, `white`, `yes`)

// console.log(lib);
// lib.tasks()

// class Nurse extends Woman{
//     constructor(fName, lName, weig, color, treats) {
//         super(fName, lName, weig, color)
//         this.treats = treats
//     }
//     task() {
//         console.log(`${this.name} treats people`)
//     }
// }

// let nurs = new Nurse(`ivanka`, `stepova`, `60`, `white`, true)

// console.log(nurs);
// nurs.task()


// class Man extends Human{
//     constructor(firstName, secondName, weight, skinColor) {
//         super(firstName, secondName, weight, skinColor)
//     }
// }

// class Hunter extends Man{
//     constructor(name, sname, weight, color, weapon) {
//         super(name, sname, weight, color)
//         this.weapon = weapon
//     }
//     task() {
//         console.log(`${this.name} hanting animal`)
//     }
// }

// let hunt = new Hunter(`oleg`, `dronov`, `90`,`white`, `drob`)

// console.log(hunt);
// hunt.task()



// class Worker extends Man{
//     constructor(name, sname, weight, color, weapon) {
//         super(name, sname, weight, color)
//         this.weapon = weapon
//     }
//     task() {
//         console.log(`${this.name} works on the construction site`)
//     }
// }

// let work = new Worker(`orest`, `slivak`, `80`,`white`, `structure`)

// console.log(work);
// work.task()


// -----------------------------------------------------------------------------------
// task2 Class



class Animal {
    constructor(walk, run, haveWool) {
        this.walk = walk
        this.run = run
        this.wool = haveWool
    }
}

class Predator extends Animal{
    constructor(name, walk, run, haveWool, hunting, tamed) {
        super(walk, run, haveWool)
        this.hunting = hunting
        this.tamed = tamed
        this.name = name
    }
    tam() {
        console.log(`${this.name} can be tamed: ${this.tamed}`)
    }
}

let wolf = new Predator(`wolf`, true, true, true, true, true,)
let snake = new Predator(`snake`, false, false, false, true, false)

console.log(wolf);
wolf.tam()

console.log(snake);
snake.tam()


class Herbivorous extends Animal{
    constructor(name, walk, run, haveWool, tamed, herbivorous) {
        super(walk, run, haveWool)
        this.tamed = tamed
        this.name = name
        this.herbivorous = herbivorous
    }
    tam() {
        console.log(`${this.name} can be tamed: ${this.tamed}`)
    }
}

let horse = new Herbivorous(`horse`, true, true, true, true, true,)
let deer = new Herbivorous(`deer`, true, true, true, false, true,)

console.log(deer);
deer.tam()

console.log(horse);
horse.tam()


// ---------------------------------------------------------------------------