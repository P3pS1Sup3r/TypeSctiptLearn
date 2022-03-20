var User = /** @class */ (function () {
    function User(_name) {
        this.name = _name;
    }
    return User;
}());
function add(a, b) {
    return a + b;
}
var a1 = add(25, 10);
var a2 = add(25, 15);
// console.log(a1,a2);
function defaultLastName() {
    return "Иванов";
}
function getName(fistName, lastName) {
    if (lastName === void 0) { lastName = defaultLastName(); }
    return fistName + " " + lastName;
}
console.log(getName("Иван", "Игоревич"));
console.log(getName("Иван"));
