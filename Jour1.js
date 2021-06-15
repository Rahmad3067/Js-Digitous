console.log("Hello world");
// Ex2
var test = "My name is Rahmad";
console.log(test);
// Ex3
var name = "Rahmad";
console.log("Nice to meet you " + name);
// Ex4
var testLength = "I'm very long !";
console.log(testLength.length);
// Ex5
var food = "croissant is meh";
food = food.replace("meh", "so good");
console.log(food);
// Ex6
var basic = "This is Cool";
var basicUp = basic.toUpperCase();
var basicDown = basic.toLocaleLowerCase();
console.log(basicUp);
console.log(basicDown);
// Ex7
var word = "banana";
var letters = word.split("");
console.log(letters);

// Ex8
var age = 20;
var template = (`i'm ${age} years old`);
console.log(template);

// Bonus

var string01 = 'hello world ' + 
"how are you!?";

console.log(string01);

var firstName = "Rahmad ";
var lastName = 'Abuzar';
var fullName = firstName + lastName;
console.log(fullName);