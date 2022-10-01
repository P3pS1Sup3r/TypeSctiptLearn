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
type Employee = Person & {company: string};

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
const people3: string[]= ['Tom', 'Bob', 'Sam', 'Kate'];
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

const math: [string, ...number[], string|boolean] = ['math', 5, 5, 5, 5, false];
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
