var fruits = ["mango", "lemon", "bluberry"]
console.table(fruits);

// ex2
var ingredients = ["eggs", "milk", "butter"]
console.log(ingredients[1])
console.log(ingredients.indexOf("butter"));

// ex3
var objects = ["pen", "book", "lamp"]
objects.unshift("chair")
objects.pop();
console.log(objects);
objects.push("laptop");
console.log(objects);
objects.shift();
console.log(objects);

// ex4
var numbers = [4, 10, 8, 12, 6]
console.log(numbers.reverse());
console.log(numbers.sort((a, b) => a - b));

// ex5
var total = 0;
var limit = 10;
// for(var i = 0; i < limit; i++) {
//     console.log(i);
// }

for (var i = 0; i < limit + 1 ; i++) {
    total =  total+i
    console.log(total)
}

// ex6
var sentence = "Hello Konexio !"
for(var i = sentence.length - 1; i >=0; i-- ){
    console.log(sentence[i]);

}



// Bonus
for(var i = 1; i <= 100; i++){
    if ( i % 3 === 0){
        console.log("fizz")
    }else if (i % 5 === 0){
        console.log("buzz")
    }else if(i % 3 === 0 && i % 5 === 0){
        console.log("fizzbuzz")
    }else{
        console.log(i)
    }
}

// Bonus 2
var total = 0
var limit = 10
var i = 0
while (i < limit) {
    i++
    total =  total+i
    console.log(total)
}

// Bonus 3
var noms = ["Amar", "Andy", "Ange", "Anthony", "Artha", "Barry", "Baydir", "Eliot", "Elodie", "Julien", "Kevin", "Laura", "Mridha", "Mohamed", "Rahmad", "Victor"," Yangchen"]
console.log(noms.sort());

// Bonus 4

var empyTab = [];
for (var i = 0; i < 20; i++){
    empyTab.push(Math.floor(Math.random()*100));
    
    

}
console.log(empyTab);

empyTab;
var largest = 0;
for ( i=0; i<=largest; i++ ){

    if ( empyTab[i] > largest ) {

        var largest = empyTab[i];
    }
}







// var tab = [1, 0, 5, 20, 10, 95, 48, 34, 61, 87]
// console.log(tab);
// var a = 0;
// for (i = 0 ; i <= a ; i++){
//     if ( tab[i] <= 1 ) {
//         a = tab[2];
//     } else
//     if ( tab[i] > a ) {
//         a = tab[i];
//     }
// }
// console.log(a)

console.log(largest);









