var cat = {
    name:"Garfield",
    age :  3,
    isCute : true,


}

console.log(cat);
console.log(cat.age);
var cute = cat.isCute;

if ( cute === true ) {
    console.log("So cute !");
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
console.log(cats[0].isCute);

// ex3
function checkIfEven (num) {
    if( num % 2 === 0) {
        console.log("even")
    } else{
        console.log("odd")
    }
}
checkIfEven(2);

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

   return ('0' + hours)+ ":" + ('0' + minutes)+ ":" +('0' + seconds).slice(-2);

}
console.log(format(4700));


// 

