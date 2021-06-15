var integer = 102;
var float = 13.9;
console.log(integer);
console.log(float);

// ex2
var basic = 34;
var stringfied = "34";
console.log(stringfied);

// ex3
var num = 1.5;
var rounded = Math.round(num);
console.log(rounded);

// ex4
var test = 12;
var bis = 5;
console.log(test + bis);

// ex5
var test = 143;
var bis = 219;
console.log(test > bis);

// ex6
var limit = 50;
var score = 64;
if(score >= limit){
    console.log("ok");
 }else {
        console.log("Oh nooo...")
    }



// ex7
var password = "azerty";
if(password.length > 5){
    console.log("The password is secure")
}

// ex8
if ((password.length > 5) && (score >= limit) ){
    console.log("Everything is good");
}else if(password.length > 5 || (score >= limit) ){
        console.log("Something is good")
} else { 
        console.log("Nothing is good")
}

// Bonus 
var random = Math.floor(Math.random() *6) +1;
console.log(random);
if (random === 6){
    console.log("Yes i win")
}else{
    console.log("So close")
}


// Bonus 2
var month = "January";
switch (month) {
    case "Winter":
      console.log("winter is the right one");
       break;
    case "Spring":
      console.log("Spring is the right one");
       break;
    case "Summer":
    console.log("Summer is the right one");
    break;
    case "Fall":
    console.log("Fall is the right one");
    break;
    default:
        console.log("that's not the month");


}

// bonus3
