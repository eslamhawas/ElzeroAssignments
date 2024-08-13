// Prototype
function Animal() {}
Animal.prototype.eat = function() {
    console.log('Eating');
};

function Dog() {}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.bark = function() {
    console.log('Barking');
};

const dog = new Dog();
dog.eat();  // Eating
dog.bark(); // Barking

//Object

const person = {
    name: 'Alice',
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

console.log(person.name); // Alice
person.greet(); // Hello, my name is Alice

// Spread operator

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 }


// Rest Operators

const { a, ...rest } = { a: 1, b: 2, c: 3 };
console.log(a); // 1
console.log(rest); // { b: 2, c: 3 }


// Anonymous Functions

const greet = function() {
    console.log('Hello, world!');
};

greet(); // Hello, world!

// Arrow Functions

const sum = (a, b) => a + b;

console.log(sum(2, 3)); // 5

const square = x => x * x;
console.log(square(4)); // 16
