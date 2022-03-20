class User {
    name : string;
    constructor(_name) {
        this.name = _name;
    }
}

function add(a: number, b:number): number {
    return a + b;

}

let a1 = add(25,10);
let a2 = add(25,15);
// console.log(a1,a2);
function defaultLastName() {
    return "Иванов";
}

function getName(fistName:string, lastName:string=defaultLastName()):string {
    return fistName + " " + lastName;
}

console.log(getName("Иван", "Игоревич"));
console.log(getName("Иван"));