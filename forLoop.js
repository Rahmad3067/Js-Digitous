var total = 0
for (var i = 5 ; i <= 10 ; i++) {
    total = total + i*i
    
}
console.log(total);

// ex2
var total = 0;
for (var i = 100; i <= 1000; i++) {
   if(i % 7 === 0){
       total += +1;
   }

}

console.log(total);

// ex3
let dice = 0
let dice5orAbove = 0
let result = 0
let sumOfDice = 0
function launchDice(numberOfDice) {
    for (let i = 0; i <= numberOfDice ; i++ ) {
        dice = Math.floor(Math.random()*6)+1
        if (dice >= 5) {
            dice5orAbove = dice
        } else {
            dice5orAbove = 0
        }
        console.log(dice, "= 5 or above ?", dice5orAbove)
        sumOfDice = sumOfDice + dice5orAbove
    }
    console.log(sumOfDice)
    sumOfDice = 0
}
launchDice(20)

// ex4
// (10, 34, 17, 30, 14)

// ex 5 
// (12, 24, 33, 39, 42, 0)


// ex6

// (0, 3, -3, 2, -2, 5, -4)
