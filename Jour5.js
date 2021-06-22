// comprendre le Node
// console.log(process.argv);
// var args = process.argv.slice(2);
// console.log("arguments : ", args);
// console.log(process.argv[2] + process.argv[2]);
// console.log(parseInt(process.argv[2]) + parseInt(process.argv[2]));

// comprendre le npm
// var lodash = require("lodash")

// var output = lodash.without([1, 2, 3], 1);
// console.log(output);

// comprendre le prompt



// excercice 01

function calculate (num1, operator, num2) {
    if( operator === '*') {
        console.log( num1 * num2 );
    } else if ( operator === '/' ) {
        console.log( num1 / num2 );
    } else if ( operator === '+' ) {
        console.log( num1 + num2 );
    }

}
if (process.argv.length === 5) {
    calculate(process.argv[2],process.argv[3],process.argv[4]);
}else {
    console.log("error");
}

// excercice 02

function multiply (num) {
    
    for (var i = 1; i <= 10; i++) {
       var mult = i*num ;
       console.log(`${i}* ${num} = ${mult}`);
    }
    // console.log(mult);
}

if (process.argv.length === 3) {
    multiply(process.argv[2]);
}else {
    console.log("error")
}


