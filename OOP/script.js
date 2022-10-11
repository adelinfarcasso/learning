function UserOne(email, name) {
  this.email = email;
  this.name = name;
}

UserOne.prototype.login = function () {
  console.log(`Welcome, ${this.name}!`);
};

let jake = new UserOne('jake@email.com', 'Jake');
jake.login();

function UserTwo(email, name) {
  UserOne.call(this, email, name);
}

UserTwo.prototype = Object.create(UserOne.prototype);
console.log(UserTwo.prototype);

// UserTwo acum are ca si prototip un obiect cu UserOne ca si prototip -> linked

UserTwo.prototype.logout = function () {
  console.log(`Bye bye, ${this.name}!`);
};

console.log(UserTwo.prototype);

let sam = new UserTwo('sam@email.com', 'Sam');

sam.login();
sam.logout();
// jake.logout();

(function setName() {
  console.log(`setName`);
  setAge(12);
  function setAge(age) {
    console.log(age);
  }
})();

// What is displayed by the console logs?
const genericObject = {
  bar: 'Hello World',
  get_bar: function () {
    return this.bar;
  },
};

let customObject = {};
customObject.prototype = Object.create(genericObject);
customObject.bar = 'Aloha folks!';
genericObject.setBar = function () {
  console.log('set');
};
// console.log(customObject.get_bar());

// customObject.setBar();
// genericObject.setBar();
delete customObject.bar;

// console.log(customObject.get_bar());
