// types
// Primitives: no, str, boo,
// other: arr, obj,
// function types, params

let age: number;
age = 12.1;

let userName: string;
userName = 'Max';

let isInstructor: boolean = true;

// other: arr, obj,
// arr

let hobbies: string[];

hobbies = ['sports', 'cooking'];

let person: { name: string; age: number };

person = {
  name: 'Max',
  age: 32,
};

let people: { name: string; age: number }[];
people = [{ name: 'Max', age: 32 }];

let course: string | number = 'React - The Complete Guide';

course = 1234;

function add(a: string, b: number): any {
  console.log(a + b);
}

add('2', 3);

// Pentru functii care nu returneaza
function printOutput(value: any): void {
  console.log();
}

// Generics
function insertAtBeginning<type>(array: type[], value: type) {
  const newArray = [value, ...array];
  return newArray;
  // returneaza o val. de tip any
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

// updatedArray[0].split(''); // runtime error -> pentru ca 'any', ts lasa sa apelezi split pe nr.
stringArray[0].split('');
// solutie -> <identifyer(type)> dupa numele functiei
// <type> - ii spune la TS ca valoarea returnata sa fie de aceleasi tipuri ca si params

class Student {
  firstName: string;
  lastName: string;
  age: number;
  courses: string[];

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    courses: string[]
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.courses = courses;
  }
  enrol(courseName: string) {
    this.courses.push(courseName);
  }
}

const firstStudent = new Student('Max', 'Maxi', 24, ['etc', 'etc']);

interface Human {
  firstName: string;
  age: number;
  greet: () => void;
}

let max: Human;
max = {
  firstName: 'Max',
  age: 32,
  greet() {
    console.log('Hello!');
  },
};
