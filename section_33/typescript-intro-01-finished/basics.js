// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Primitives
var age;
age = 12;
var userName;
userName = 'Max';
var isInstructor;
isInstructor = true;
// More complex types
var hobbies;
hobbies = ['Sports', 'Cooking'];
var person;
person = {
    name: 'Max',
    age: 32
};
// person = {
//   isEmployee: true
// };
var people;
// Type inference
var course = 'React - The Complete Guide';
course = 12341;
// Functions & types
function addNumbers(a, b) {
    return a + b;
}
function printOutput(value) {
    console.log(value);
}
// Generics
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
function insertAtEnd(array, value) {
    var newArray = __spreadArray(__spreadArray([], array, true), [value], false);
    return newArray;
}
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
var stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');
// updatedArray[0].split('');
var Student = /** @class */ (function () {
    // firstName: string;
    // lastName: string;
    // age: number;
    // private courses: string[];
    function Student(firstName, lastName, age, courses) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.courses = courses;
    }
    Student.prototype.enrol = function (courseName) {
        this.courses.push(courseName);
    };
    Student.prototype.listCourses = function () {
        return this.courses.slice();
    };
    return Student;
}());
var student = new Student('Max', 'Schwarz', 32, ['Angular']);
student.enrol('React');
var max;
max = {
    firstName: 'Max',
    age: 32,
    greet: function () {
        console.log('Hello!');
    }
};
var Instructor = /** @class */ (function () {
    function Instructor() {
    }
    Instructor.prototype.greet = function () {
        console.log('Hello!!!!');
    };
    return Instructor;
}());
var antti = new Instructor();
antti.greet();
console.log(antti);
