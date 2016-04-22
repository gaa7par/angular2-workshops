"use strict";
var Human = (function () {
    function Human(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = "" + firstName + lastName;
    }
    return Human;
}());
function greeter(person) {
    return "Hello, " + person.firstName + person.lastName + "!";
}
var person = new Human("Jane", "Austen");
console.log(greeter(person));
