// console.log('testing "watch"');
var burger = 'hamburger'; // String
var calories = 300; // Numeric
var tasty = true; // Boolean
// We tell our function to expect an object that fulfills the Food interface.
// This way we know that the properties we need will always be available.
var state = {
    speak: function (food) {
        console.log('Our ' + food.name + ' has ' + food.calories + ' calories.');
    }
};
// var speak = function (food: Food): void {
//   console.log('Our ' + food.name + ' has ' + food.calories + ' calories.');
// };
// We define an object that has all of the properties the Food interface expects.
// Notice that types will be inferred automatically.
var ice_cream = {
    name: 'ice cream',
    calories: 200
};
// state.speak(ice_cream);
