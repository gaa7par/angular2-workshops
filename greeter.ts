"use strict";

class Human {
    fullName: string;
    constructor(public firstName, public lastName) {
        this.fullName = "" + firstName + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return `Hello, ${person.firstName}${person.lastName}!`;
}

let person = new Human("Jane", "Austen");

console.log(greeter(person));