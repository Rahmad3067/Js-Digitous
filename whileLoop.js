var firsNumber= 50;
var secondNumber = 200;

while (firsNumber < secondNumber) {
      firsNumber++;
    if (firsNumber % 2 === 0) {
        console.log(firsNumber)
       
    }
}

// ex2
var dice= null,
    count= 0;
function random(){
    return Math.floor(Math.random() *6);
}    
while (dice !==6){
    count= random() + 1;
    dice++;
}
console.log(count);

// ex 3
var ussainBolt = 0;
var tyonGay = 0;
var random = Math.floor(Math.random()*10);
while(ussainBolt <= 100 ||tyonGay <= 100 ) {
    tyonGay+= random;
    ussainBolt+= random;
    if(tyonGay > 100 ) {
        console.log('Tyson is the winner');
    } else (ussainBolt > 100 ) 
        console.log('Bolt is the winner'); 
        tyonGay++;
        ussainBolt++;
    }
