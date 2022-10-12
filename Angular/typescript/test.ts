// console.log('testing "watch"');

var burger: string = 'hamburger'; // String
var calories: number = 300; // Numeric
var tasty: boolean = true; // Boolean

// Alternatively, you can omit the type declaration:
// let burger = 'hamburger';

// The function expects a string and an integer.
// It doesn't return anything so the type of the function itself is void.

// var speak = function (food: string, energy: number): void {
//   console.log('Our ' + food + ' has ' + energy + ' calories.');
// };

// speak(burger, calories);

// // Here we define our Food interface, its properties, and their types.
interface Food {
  name: string;
  calories: number;
}

// We tell our function to expect an object that fulfills the Food interface.
// This way we know that the properties we need will always be available.

var state = {
  speak(food: Food): void {
    console.log('Our ' + food.name + ' has ' + food.calories + ' calories.');
  },
};
// var speak = function (food: Food): void {
//   console.log('Our ' + food.name + ' has ' + food.calories + ' calories.');
// };

// We define an object that has all of the properties the Food interface expects.
// Notice that types will be inferred automatically.
var ice_cream = {
  name: 'ice cream',
  calories: 200,
};

// state.speak(ice_cream);
