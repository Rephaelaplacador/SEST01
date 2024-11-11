// Objects - Group of related properties and/or methods.

const person = {
  firstName: "Bruno",
  lastName: "Mars",
  age: 30,
  isMarried: true,
  talent: ["Singer", "Songwriter", "Dancer"],
};

console.log("Person:", person);

//  Access objects properties
// Using the Bracket Notation
console.log("Firstname:", person["firstName"]);
console.log("Lastname:", person["lastName"]);
// Using the Dot Notation
console.log("Age:", person.age);
console.log("Talent:", person.talent);

// Modify the onjects Properties
person.age = 31;
console.log("Age:", person.age);

person.greet = function () {
  console.log("Hello! Welcome to the world of objects.");
};
console.log("Person:", person);

// Calling a method
person.greet();
person.greet();
person.greet();

person.introduce = function () {
  // console.log("I am" + " "+ this.firstName + " " + this.lastName + "!");
  console.log(`I am ${this.firstName} ${this.lastName}!`);
};

person.introduce();
person.introduce();

// Nested/Nesting Objects
const address = {
  street: "123 Example Street",
  city: "Example City",
  country: "Example Country",
};
console.log("Address:", address);

person.address = address;
console.log("Person:", person);
console.log("Person Country:", person.address.country);

// Destructuring
// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;
const { firstName, lastName, age } = person;
console.log("FirstName:", firstName);
console.log("LastName:", lastName);
console.log("Age:", age);

//  Spread Operator - pass the key: value from an object to another object.
const grades = {
  math: 94,
  english: 90,
  science: 89,
  pe: 98,
};

const gradesWithEC = {
  ...grades,
  extraCurricular: 88,
};

console.log("Grades with Extra Curricular:", gradesWithEC);

//  Object.keys(object) - return the keys inside of an object.
const keys = Object.keys(person);
console.log("Keys:", keys);

// Object.values(object) - return the values inside of an object.
const values = Object.values(person);
console.log("Values:", values);

// Object.assign(object/s) - copy the key and value from multiple of an object.
const keyValuePair = Object.entries(person);
console.log("Key and Value:", keyValuePair);

// Object.entries(object) - return the key and value pair inside of an object.
const information = {
  firstName: "Alice",
  lastName: "Jackson",
};

const information2 = {
  age: 30,
  city: "Example City",
};

const combinedInformation = Object.assign(information, information2);
console.log("Combined Information:", combinedInformation);

// Object.freeze(object) - prevent modification to an object.
Object.freeze(combinedInformation);
combinedInformation.age = 32;
console.log("Combined Information:", combinedInformation.age);

// JSON.stringify - convert object to a string.
let personString = JSON.stringify(person);
console.log("Person String:", personString);

// for in loop- iterate through the properties of an object.
for (let key in person) {
  console.log(`Key: ${key}, Value: ${person[key]}`);
}

// for of - iterate over all the lements of an array.
for (let element of keys) {
  console.log("Element of keys Array:", element);
}

// for of - iterate over all the lements of an array.
for (let value of values) {
  console.log("Element of Values Array:", element);
}
