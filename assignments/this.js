/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. If a function is contained in the global scope, the value of 'this' is the window object
* 2. The object before the preceding dot is 'this'
* 3. If using a constructor function, the specific instance of the created object is 'this'
* 4. If you use 'Call' or 'Apply', then 'this' is Explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1
'use strict'
console.log(this.document);
// code example for Window Binding

// Principle 2
const pets = {
    species: "lion",
    speak: (sound) => {
        console.log(`The ${this.species} makes a(n) ${sound} sound`);
    }
}
pets.speak('RAWR');

// code example for Implicit Binding

// Principle 3
function PetsConstructor(species, noise) {
    this.noise = noise;
    this.species = species;
    this.sound = () => {
        console.log(`The ${this.species} makes a ${this.noise} sound`);
    }
}

const lion = new PetsConstructor('Lion', 'RAWR');
const dog = new PetsConstructor('Dog', 'WOOF');

// code example for New Binding

// Principle 4

//continued from above example
lion.sound.call(dog);
dog.sound.apply(lion);

lion.sound();
dog.sound();

// code example for Explicit Binding