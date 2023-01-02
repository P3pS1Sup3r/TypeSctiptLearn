var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
    return 'Иванов';
}
function getName(fistName, lastName) {
    if (lastName === void 0) { lastName = defaultLastName(); }
    return fistName + ' ' + lastName;
}
// console.log(getName("Иван", "Игоревич"));
// console.log(getName("Иван"));
var person = { name: 'Tom', age: 23 };
console.log(person);
person = { name: 'Bob' };
console.log(person);
console.log(person['age']);
function printUser(user) {
    console.log(" name: ".concat(user.name, " age: ").concat(user.age));
}
var tomy = { age: 36, name: 'Tom', isMarried: true };
printUser(tomy);
// let tom: { name: string; age?: number } = {name: "Tom", age: 23};
// let bob: { name: string; age?: number } = {name: "Bob"};
function printUser2(user) {
    if ('age' in user) {
        console.log("Name: ".concat(user.name, " Age: ").concat(user.age));
    }
    else {
        console.log("Name: ".concat(user.name));
    }
}
// printUser2(tom);
// printUser2(bob);
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
userId = 'qwerty';
console.log("Id: ".concat(userId));
var printId = function (inputId) {
    console.log("Id: ".concat(inputId));
};
var getId = function (isNumber) {
    if (isNumber) {
        return 1;
    }
    else {
        return '1';
    }
};
printId(123456);
printId('кверти');
console.log(getId(true));
var tom = { name: 'Tom', age: 36 };
var bob = { name: 'Bob', age: 41, company: 'MicroSoft' };
function printPerson(user) {
    console.log("Name: ".concat(user.name, " Age: ").concat(user.age));
}
printPerson(tom);
printPerson(bob);
/** Type assertion. Преобразование к типу */
// Компилятор должен выдасть ошибку, т.к. header представляет собой тип HTMLElement|null
var header1 = document.getElementById('header');
header1.innerText = 'Привет мир';
// debugger;
/** Приведение к типу при помощи <> */
var header2 = document.getElementById('header');
header2.innerText = 'Hello word';
// debugger;
/** Приведение типов при помощи as */
var header3 = document.getElementById('header');
header3.innerText = 'Коничива';
/** Массивы */
var list = [10, 12, 23];
var colors = ['green', 'blue', 'white'];
console.log(list[0]);
console.log(colors[1]);
var names = ['Tom', 'ezi', 'Bob'];
console.log(names);
/** ReadonlyArray */
var people = ['Спанчь боб', 'Патрик', 'Сквидвард (кальмар тип)'];
// Альтернативная запись
var people2 = ['Красти краб', 'Мистер крабс', 'Планктон'];
// people[1] = 'Не патрик'; Ошибка: нельзя изменять значение
// people.push('Патрик 2'); Ошибка: нет такого метода
// people.pop(); Ошибка: нет такоего метода
// Операции чтения разрешенны
function printUsers(users) {
    for (var user_2 in users) {
        if (users.hasOwnProperty(user_2)) {
            console.log(user_2);
        }
    }
}
function usersToString(users) {
    return users.join(', ');
}
printUsers(people2);
console.log(usersToString(people2));
// Декомпозиция массива
var first = people2[0], second = people2[1], third = people2[2], forth = people2[3];
console.log(first);
console.log(second);
console.log(third);
console.log(forth);
// После ...остаток будет разлоен в массив
var one = people[0], others = people.slice(1);
console.log(one);
console.log(others);
// Можно проскипать элемент при декомпозици при помощи ,
var people3 = ['Tom', 'Bob', 'Sam', 'Kate'];
var third2 = people3[2], forth2 = people3[3];
console.log(third2);
console.log(forth2);
/** Кортежи */
var user = [20, 'Tom'];
console.log(user[0]);
console.log(user[1]);
for (var _i = 0, user_1 = user; _i < user_1.length; _i++) {
    var prop = user_1[_i];
    console.log(prop);
}
// кортежи как параметры функции
function printUsersTuples(user) {
    console.log(user[0]);
    console.log(user[1]);
}
function getUsersTuples(name, age) {
    return [age, name];
}
printUsersTuples(user);
console.log(getUsersTuples('Tomi', 22));
var math = ['math', 5, 5, 5, 5, false];
console.log(math);
/** Неопределенный набор и наполнение параметров */
function addNumbers(firsNumber) {
    var numberArray = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numberArray[_i - 1] = arguments[_i];
    }
    var result = firsNumber;
    for (var _a = 0, numberArray_1 = numberArray; _a < numberArray_1.length; _a++) {
        var cell = numberArray_1[_a];
        result += cell;
    }
    return result;
}
console.log(addNumbers(1, 2, 3, 4, 5));
console.log(addNumbers.apply(void 0, __spreadArray([1], [2, 3, 4, 5, 6, 7, 8, 9], false)));
/** Преречисления */
console.log('Перечисления');
var Season;
(function (Season) {
    Season[Season["Winter"] = 8] = "Winter";
    Season[Season["Spring"] = 9] = "Spring";
    Season[Season["Summer"] = 10] = "Summer";
    Season[Season["Autumn"] = 11] = "Autumn";
})(Season || (Season = {}));
var current = Season.Winter;
console.log(current);
current = Season[8];
console.log(current);
var SeasonStr;
(function (SeasonStr) {
    SeasonStr["Windter"] = "Winter";
    SeasonStr["Spring"] = "Spring";
    SeasonStr["Summer"] = "Summer";
    SeasonStr["Autumn"] = "Autumn";
})(SeasonStr || (SeasonStr = {}));
current = SeasonStr.Autumn;
console.log(current);
var DayTimeMessage;
(function (DayTimeMessage) {
    DayTimeMessage["Day"] = "\u0414\u043E\u0431\u0440\u043E\u0433\u043E \u0434\u0435\u043D\u044C\u0435\u0447\u043A\u0430";
    DayTimeMessage["Night"] = "\u0414\u043E\u0431\u0440\u043E\u0439 \u043D\u043E\u0447\u0435\u043D\u044C\u043A\u0438";
})(DayTimeMessage || (DayTimeMessage = {}));
var dayMessage = function (message) {
    console.log(message);
};
dayMessage(DayTimeMessage.Day);
dayMessage(DayTimeMessage.Night);
/** Объектная модель */
/** Классы и наследование */
console.log('Classes');
var Human = /** @class */ (function () {
    function Human(userName) {
        this.name = userName;
    }
    Human.prototype.print = function () {
        console.log("name is: ".concat(this.name));
    };
    return Human;
}());
var HumanEmployee = /** @class */ (function (_super) {
    __extends(HumanEmployee, _super);
    // Обращаемся к конструктору родителя через супер
    function HumanEmployee(companyName, humanName) {
        var _this = _super.call(this, humanName) || this;
        _this.company = companyName;
        return _this;
    }
    // Обращаемся к родиельским функциям тоже через супер
    HumanEmployee.prototype.print = function () {
        _super.prototype.print.call(this);
        console.log("Work in ".concat(this.company));
    };
    return HumanEmployee;
}(Human));
var aboba = new HumanEmployee('Марино', 'Абобус');
aboba.print();
/** Асбстрактные классы */
/** абстратные свойства и методы можно определять только в абстрактных классах
 * все обьявление абстрактые свойства и методы должны быть реализованы в дочерних классах */
var Figure = /** @class */ (function () {
    function Figure() {
    }
    return Figure;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(x, y, width, height) {
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.getArea = function () {
        var square = this.width * this.height;
        console.log('area: ', square);
    };
    return Rectangle;
}(Figure));
console.log('absract classes');
var someReqtangle = new Rectangle(5, 0, 10, 20);
someReqtangle.getArea();
/** Get & Set */
var Gomuncul = /** @class */ (function () {
    function Gomuncul() {
    }
    Object.defineProperty(Gomuncul.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Gomuncul.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            this._age = age;
        },
        enumerable: false,
        configurable: true
    });
    return Gomuncul;
}());
console.log('get\'er and set\'er');
var homo = new Gomuncul();
homo.age = 18;
homo.name = 'Борис';
console.log(homo);
/** Статисечкие поля и методы */
var PersonWithStatic = /** @class */ (function () {
    function PersonWithStatic(age, name) {
        if (age === void 0) { age = 0; }
        this.age = age;
        this.name = name;
    }
    PersonWithStatic.prototype.calculateAge = function () {
        return PersonWithStatic.pensiyaAge - this.age;
    };
    // age: number;
    // name: string;
    PersonWithStatic.pensiyaAge = 65;
    return PersonWithStatic;
}());
console.log('Статика');
var pensioner = new PersonWithStatic(36, 'Борис');
console.log(pensioner.calculateAge());
var employee = {
    id: 1,
    name: 'Витязь'
};
var employee2 = {
    id: 2,
    name: 'Alice',
    age: 23,
    sayWords: function (word) {
        console.log("\u0418 \u044F \u044D\u0442\u043E\u043C\u0443 \u043F\u0438\u0434\u043E\u0440\u0443 \u0433\u043E\u0432\u043E\u0440\u044E - ".concat(word));
    }
};
var UserV2 = /** @class */ (function () {
    function UserV2(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    UserV2.prototype.sayWords = function (word) {
        console.log("\u042E\u0437\u0435\u0440: ".concat(this.name, " id: ").concat(this.id, " says - ").concat(word));
    };
    return UserV2;
}());
console.log(employee);
function printIUser(user) {
    console.log("\u0418\u0414: ".concat(user.id));
    console.log("Name: ".concat(user.name));
    (user === null || user === void 0 ? void 0 : user.age) ? console.log("Age: ".concat(user.age)) : 0;
    (user === null || user === void 0 ? void 0 : user.sayWords) ? user.sayWords('Сначала было слово') : 0;
}
printIUser(employee);
printIUser(employee2);
var personV2 = new UserV2(3, 'Artorias', 33);
personV2.sayWords('Abyss');
var simpleBuilder = function (n1, n2) {
    return "Mr. ".concat(n1, " ").concat(n2);
};
var fullName = simpleBuilder('Борис', 'Витальевич');
console.log(fullName);
