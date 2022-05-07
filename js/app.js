var User = (function () {
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
function defaultLastName() {
    return "Иванов";
}
function getName(fistName, lastName) {
    if (lastName === void 0) { lastName = defaultLastName(); }
    return fistName + " " + lastName;
}
var person = { name: "Tom", age: 23 };
console.log(person);
person = { name: "Bob" };
console.log(person);
console.log(person["age"]);
function printUser(user) {
    console.log(" name: ".concat(user.name, " age: ").concat(user.age));
}
var tomy = { age: 36, name: "Tom", isMarried: true };
printUser(tomy);
function printUser2(user) {
    if ("age" in user) {
        console.log("Name: ".concat(user.name, " Age: ").concat(user.age));
    }
    else {
        console.log("Name: ".concat(user.name));
    }
}
function printUser3(_a) {
    var name = _a.name, _b = _a.age, age = _b === void 0 ? 25 : _b;
    if (age !== undefined) {
        console.log("name: ".concat(name, "  age: ").concat(age));
    }
    else {
        console.log("My name is: ".concat(name));
    }
}
var userId = 2;
console.log("Id: ".concat(userId));
userId = "qwerty";
console.log("Id: ".concat(userId));
var printId = function (inputId) {
    console.log("Id: ".concat(inputId));
};
var getId = function (isNumber) {
    if (isNumber) {
        return 1;
    }
    else {
        return "1";
    }
};
printId(123456);
printId("кверти");
console.log(getId(true));
var tom = { name: "Tom", age: 36 };
var bob = { name: "Bob", age: 41, company: "MicroSoft" };
function printPerson(user) {
    console.log("Name: ".concat(user.name, " Age: ").concat(user.age));
}
printPerson(tom);
printPerson(bob);
//# sourceMappingURL=app.js.map