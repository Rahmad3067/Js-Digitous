var cat = {
    name:"Garfield",
    age :  3,
    isCute : true,
}

console.log(cat);
console.log(cat.age);
var cute = cat.isCute;
var cute2 = "isCute"

if ( cute === true ) {
    console.log("So cute !");
}else{
    console.log("You're cat is not cute");
}

// ex2

var cat2 = {
    name:"ben",
    age :  5,
    isCute : false,
}

var cats = [cat2, cat];
console.log(cats);
console.log(cats[1].age);
console.log(cats[1]["age"]);
console.log(cats[0].isCute);
console.log(cats[0]["isCute"]);

// ex3
function checkIfEven (num) {
    if( num % 2 === 0) {
        console.log("even")
    } else{
        console.log("odd")
    }
}
checkIfEven(99);

// ex4

function compare (num1, num2) {
    if ( num1 > num2){
        console.log("num1 is bigger");

    }else if ( num2 > num1 ) {
        console.log("num2 is bigger");

    }else{
        console.log("both are the same");
    }

}
compare(25, 25);

// ex 5 
var total = 0;
function addUp (num) {
    for (var i = 0; i<= num; i++) {
        total = total+i
        
    }
}
addUp(12);
console.log(total);

// ex6 
function format (num){
   
      var hours   = Math.floor(num / 3600);
      var minutes = Math.floor(num % 3600 / 60);
      var seconds = Math.floor(num % 3600 % 60);

   return ('0' + hours)+ ":" + ('0' + minutes).slice(-2)+ ":" +('0' + seconds).slice(-2);
      

}
console.log(format(7400));


// Bonus"

// format-1
// var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
// var result = '';

// function generatePasszord(num) {
//     if ( num < 6 || num > 15) {
//         return "error";
//     }
//     for ( var i = 0; i < num; i++ ) {
//         result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
//     }
//     return result.toLocaleUpperCase();}
    
    
    
    


// console.log(generatePasszord(22));

// format-2


function generatePassword (num){
    if (num < 6 || num > 15) {
        return "error";
    }
    letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    password = "";
    for (let i = 0; i <= num; i++ ){
        let index = Math.floor(Math.random() * letters.length);
        password+= letters[index];
    }
    return password;
}

console.log('');
console.log(generatePassword(8));