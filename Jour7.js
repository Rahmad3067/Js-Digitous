// Ex 01
var fs = require('fs');

fs.readFile('./Jour07.txt', function (err, data) {
    if (err) {
        console.log(err);
        return;
    } 
    console.log("Table : " + data.toString());
    
})

// Ex 02
var array = [1, 2, 3, 4, 5];
var double = array.map(function (num) {
    return num * 2;
    
});

console.log(double);

// Ex 03
var longNames = [
    {
        firstName: "Jane",
        lastName: "Doe",
    },
    {
        firstName: "John",
        lastName: "Smith",
    }
]
var shortNames = longNames.map(function(person) {
    
    return  { name : person.firstName +  person.lastName};
    


})
console.log(shortNames);

// EX04
var array = [1, "toto", 34, "javascript", 8];
var numbers = array.filter(function (num) {
    if ( typeof(num) === 'number' ) {
        return num

    }
    
})
console.log(numbers);

// EX05
var cakes = [
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
];

var cholate = cakes.filter(function (cake) {
    return (cake.flavor === "chocolate")
    
});
console.log(cholate);

var noChoclate = cholate.map(function (num1) {
    num1.status = "sold out !"
    return (num1)
})
console.log(noChoclate)
