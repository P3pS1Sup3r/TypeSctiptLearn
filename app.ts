class User {
  name: string;

  constructor(_name) {
    this.name = _name;
  }
}

function add(a: number, b: number): number {
  return a + b;
}

const a1 = add(25, 10);
const a2 = add(25, 15);

// console.log(a1,a2);
function defaultLastName() {
  return 'Иванов';
}

function getName(
    fistName: string,
    lastName: string = defaultLastName(),
): string {
  return fistName + ' ' + lastName;
}

// console.log(getName("Иван", "Игоревич"));
// console.log(getName("Иван"));

let person: { name: string; age?: number } = {name: 'Tom', age: 23};
console.log(person);
person = {name: 'Bob'};
console.log(person);
console.log(person['age']);

function printUser(user: { name: string, age: number }) {
  console.log(` name: ${user.name} age: ${user.age}`);
}

const tomy = {age: 36, name: 'Tom', isMarried: true};

printUser(tomy);

// let tom: { name: string; age?: number } = {name: "Tom", age: 23};
// let bob: { name: string; age?: number } = {name: "Bob"};

function printUser2(user: { name: string, age?: number }) {
  if ('age' in user) {
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
userId = 'qwerty';
console.log(`Id: ${userId}`);

const printId = (inputId: id) => {
  console.log(`Id: ${inputId}`);
};

const getId = (isNumber: boolean): id => {
  if (isNumber) {
    return 1;
  } else {
    return '1';
  }
};

printId(123456);
printId('кверти');
console.log(getId(true));

type Person = { name: string; age: number };
// type Employee = {name: string; age: number; company: string};
type Employee = Person & { company: string };

const tom: Person = {name: 'Tom', age: 36};
const bob: Employee = {name: 'Bob', age: 41, company: 'MicroSoft'};

function printPerson(user: Person) {
  console.log(`Name: ${user.name} Age: ${user.age}`);
}

printPerson(tom);
printPerson(bob);

/** Type assertion. Преобразование к типу */

// Компилятор должен выдасть ошибку, т.к. header представляет собой тип HTMLElement|null
const header1 = document.getElementById('header');
header1.innerText = 'Привет мир';
// debugger;
/** Приведение к типу при помощи <> */

const header2 = <HTMLElement>document.getElementById('header');
header2.innerText = 'Hello word';
// debugger;

/** Приведение типов при помощи as */

const header3 = document.getElementById('header') as HTMLElement;
header3.innerText = 'Коничива';

/** Массивы */

const list: number[] = [10, 12, 23];
const colors: string[] = ['green', 'blue', 'white'];
console.log(list[0]);
console.log(colors[1]);

const names: Array<string> = ['Tom', 'ezi', 'Bob'];
console.log(names);

/** ReadonlyArray */
const people: ReadonlyArray<string> = ['Спанчь боб', 'Патрик', 'Сквидвард (кальмар тип)'];
// Альтернативная запись
const people2: readonly string[] = ['Красти краб', 'Мистер крабс', 'Планктон'];
// people[1] = 'Не патрик'; Ошибка: нельзя изменять значение
// people.push('Патрик 2'); Ошибка: нет такого метода
// people.pop(); Ошибка: нет такоего метода

// Операции чтения разрешенны
function printUsers(users: readonly string[]) {
  for (const user in users) {
    if (users.hasOwnProperty(user)) {
      console.log(user);
    }
  }
}

function usersToString(users: ReadonlyArray<string>) {
  return users.join(', ');
}

printUsers(people2);
console.log(usersToString(people2));

// Декомпозиция массива
const [first, second, third, forth] = people2;
console.log(first);
console.log(second);
console.log(third);
console.log(forth);

// После ...остаток будет разлоен в массив
const [one, ...others] = people;
console.log(one);
console.log(others);

// Можно проскипать элемент при декомпозици при помощи ,
const people3: string[] = ['Tom', 'Bob', 'Sam', 'Kate'];
const [, , third2, forth2] = people3;
console.log(third2);
console.log(forth2);

/** Кортежи */

const user: [number, string] = [20, 'Tom'];
console.log(user[0]);
console.log(user[1]);
for (const prop of user) {
  console.log(prop);
}

// кортежи как параметры функции
function printUsersTuples(user: [number, string]): void {
  console.log(user[0]);
  console.log(user[1]);
}

function getUsersTuples(name: string, age: number): [number, string] {
  return [age, name];
}


printUsersTuples(user);
console.log(getUsersTuples('Tomi', 22));

const math: [string, ...number[], string | boolean] = ['math', 5, 5, 5, 5, false];
console.log(math);

/** Неопределенный набор и наполнение параметров */

function addNumbers(firsNumber: number, ...numberArray: number[]): number {
  let result = firsNumber;
  for (const cell of numberArray) {
    result += cell;
  }
  return result;
}

console.log(addNumbers(1, 2, 3, 4, 5));
console.log(addNumbers(1, ...[2, 3, 4, 5, 6, 7, 8, 9]));

/** Преречисления */
console.log('Перечисления');

enum Season { Winter = 8, Spring, Summer, Autumn}

let current: Season | string = Season.Winter;
console.log(current);
current = Season[8];
console.log(current);

enum SeasonStr {
  Windter = 'Winter',
  Spring = 'Spring',
  Summer = 'Summer',
  Autumn = 'Autumn',
}

current = SeasonStr.Autumn;
console.log(current);

enum DayTimeMessage {
  Day = 'Доброго деньечка',
  Night = 'Доброй ноченьки'
}

const dayMessage = (message: DayTimeMessage) => {
  console.log(message);
};

dayMessage(DayTimeMessage.Day);
dayMessage(DayTimeMessage.Night);

/** Объектная модель */
/** Классы и наследование */

console.log('Classes');

class Human {
  name: string;

  constructor(userName: string) {
    this.name = userName;
  }

  print() {
    console.log(`name is: ${this.name}`);
  }
}

class HumanEmployee extends Human {
  company: string;

  // Обращаемся к конструктору родителя через супер
  constructor(companyName: string, humanName: string) {
    super(humanName);
    this.company = companyName;
  }

  // Обращаемся к родиельским функциям тоже через супер
  print() {
    super.print();
    console.log(`Work in ${this.company}`);
  }
}

const aboba = new HumanEmployee('Марино', 'Абобус');
aboba.print();

/** Асбстрактные классы */

/** абстратные свойства и методы можно определять только в абстрактных классах
 * все обьявление абстрактые свойства и методы должны быть реализованы в дочерних классах */
abstract class Figure {
  abstract x: number;
  abstract y: number;

  abstract getArea(): void;
}

class Rectangle extends Figure {
  constructor(public x: number, public y: number, public width: number, public height: number) {
    super();
  }

  getArea(): void {
    const square = this.width * this.height;
    console.log('area: ', square);
  }
}

console.log('absract classes');
const someReqtangle = new Rectangle(5, 0, 10, 20);
someReqtangle.getArea();

/** Get & Set */
class Gomuncul {
  private _name: string;
  private _age: number;

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get age(): number {
    return this._age;
  }

  public set age(age: number) {
    this._age = age;
  }
}

console.log('get\'er and set\'er');

const homo = new Gomuncul();
homo.age = 18;
homo.name = 'Борис';
console.log(homo);

/** Статисечкие поля и методы */

class PersonWithStatic {
  // age: number;
  // name: string;
  static pensiyaAge: number = 65;

  public calculateAge() {
    return PersonWithStatic.pensiyaAge - this.age;
  }

  constructor(public age: number = 0, public name: string) {
  }
}

console.log('Статика');

const pensioner = new PersonWithStatic(36, 'Борис');
console.log(pensioner.calculateAge());

/** Интерфейсы */

interface IUser {
  id: number;
  /** Необязательное свойство */
  age?: number;
  sayWords?(word: string): void;
}
/* Расширение интерфейса, если обьявить интерейс с таким же именем, то в него можно расширить */
interface IUser {
  name: string;
}

const employee: IUser = {
  id: 1,
  name: 'Витязь',
};
const employee2: IUser = {
  id: 2,
  name: 'Alice',
  age: 23,
  sayWords(word: string) {
    console.log(`И я этому пидору говорю - ${word}`);
  },
};

class UserV2 implements IUser {
  constructor(public id: number, public name: string, public age: number) {
  }
  sayWords(word: string) {
    console.log(`Юзер: ${this.name} id: ${this.id} says - ${word}`);
  }
}

console.log(employee);

function printIUser(user: IUser) {
  console.log(`ИД: ${user.id}`);
  console.log(`Name: ${user.name}`);
  user?.age ? console.log(`Age: ${user.age}`) : 0;
  user?.sayWords ? user.sayWords('Сначала было слово') : 0;
}

printIUser(employee);
printIUser(employee2);

const personV2 = new UserV2(3, 'Artorias', 33);
personV2.sayWords('Abyss');

/* интерфейсы могут наследовать друг друга (лень кодить) */

interface fullNameBuilder {
  (firstName: string, middleName: string): string;
}

const simpleBuilder: fullNameBuilder = (n1: string, n2: string) => {
  return `Mr. ${n1} ${n2}`;
};

const fullName = simpleBuilder('Борис', 'Витальевич');
console.log(fullName);
