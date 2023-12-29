// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string | string[];

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: 'Max',
  age: 32,
};

// person = {
//   isEmployee: true
// };

let people: Person[];

// Type inference

let course: string | number = 'React - The Complete Guide';

course = 12341;

// Functions & types

function addNumbers(a: number, b: number) {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

function insertAtEnd(array: any[], value: any) {
  const newArray = [...array, value];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

const anyArray = insertAtEnd(demoArray, -1); // [1, 2, 3, -1]
/* I might wanna do things with that array which I can do with an array full of numbers.
But the problem is that the anyArray, if I hover over it, is inferred to be of type any array, 
so an array full of any kind of values.
TypeScript here doesn't pick up that it's an array full of numbers. Why? Because here I have any as a type.*/
const anyArray2 = insertAtEnd(['a', 'b', 'c'], 'd');

// updatedArray[0].split('');

class Student {
  // firstName: string;
  // lastName: string;
  // age: number;
  // private courses: string[];

  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    private courses: string[]
  ) {}

  enrol(courseName: string) {
    this.courses.push(courseName);
  }

  listCourses() {
    return this.courses.slice();
  }
}

const student = new Student('Max', 'Schwarz', 32, ['Angular']);
student.enrol('React');
// student.listCourses(); => Angular, React

// student.courses => Angular, React

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

class Instructor implements Human {
  firstName!: string;
  age!: number;
  greet() {
    console.log('Hello!!!!');
  }
}

const antti = new Instructor();
console.log(antti);