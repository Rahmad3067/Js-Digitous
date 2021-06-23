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