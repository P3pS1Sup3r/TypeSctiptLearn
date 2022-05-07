class User {
    name: string;

    constructor(_name) {
        this.name = _name;
    }
}

function add(a: number, b: number): number {
    return a + b;

}

let a1 = add(25, 10);
let a2 = add(25, 15);

// console.log(a1,a2);
function defaultLastName() {
    return "Иванов";
}

function getName(fistName: string, lastName: string = defaultLastName()): string {
    return fistName + " " + lastName;
}

// console.log(getName("Иван", "Игоревич"));
// console.log(getName("Иван"));

let person: { name: string; age?: number } = {name: "Tom", age: 23};
console.log(person);
person = {name: "Bob"};
console.log(person);
console.log(person["age"]);

function printUser(user: { name: string, age: number }) {
    console.log(` name: ${user.name} age: ${user.age}`);
}

const tomy = {age: 36, name: "Tom", isMarried: true};

printUser(tomy);

// let tom: { name: string; age?: number } = {name: "Tom", age: 23};
// let bob: { name: string; age?: number } = {name: "Bob"};

function printUser2(user: { name: string, age?: number }) {
    if ("age" in user) {
        console.log(`Name: ${user.name} Age: ${user.age}`);
    } else {
        console.log(`Name: ${user.name}`);
    }
}

// printUser2(tom);
// printUser2(bob);

function printUser3({name, age = 25}: { name: string, age?: number }) {
    if (age !== undefined) {
        console.log(`name: ${name}  age: ${age}`);
    } else {
        console.log(`My name is: ${name}`);
    }
}

// printUser3(tomy);
// printUser3(bob);

/** Псевдонимы типов */

type id = number | string;

let userId: id = 2;
console.log(`Id: ${userId}`);
userId = "qwerty";
console.log(`Id: ${userId}`);

const printId = (inputId: id) => {
    console.log(`Id: ${inputId}`);
}

const getId = (isNumber: boolean): id => {
    if (isNumber) {
        return 1
    } else {
        return "1"
    }
}

printId(123456);
printId("кверти");
console.log(getId(true));

type Person = { name: string; age: number };
// type Employee = {name: string; age: number; company: string};
type Employee = Person & {company: string};

let tom: Person = {name: "Tom", age: 36};
let bob: Employee = {name: "Bob", age: 41, company: "MicroSoft"};

function printPerson(user: Person) {
    console.log(`Name: ${user.name} Age: ${user.age}`);
}

printPerson(tom);
printPerson(bob);


