const { slice } = require("lodash");

// ex 1 
// function formateDate (today) {
//     today = new Date(today);
//     var year = today.getFullYear();
//     var month = today.getMonth() +1 ;
//     let day = today.getDate();
    
//     console.log(`${day}/${month}/${year}`);


// }

// formateDate("2021-03-11");

// ex 2 




// function calculate_age(birthdayOne) { 
//     var born = Date.now() - birthdayOne.getTime();
//     var age = new Date(born); 


  
//     return Math.abs(age.getUTCFullYear() - 1970);
// }


// console.log(calculate_age(new Date(2021)));



// function calculate_age(birthdayOne) { 
//     var born = birthdayOne.getTime();

    
// }
// calculate_age(1970)

// console.log();



function calculateAge (string) {
    var string = new Date(string);
    var timeNow = new Date(2021)
    var calone = timeNow - string
    console.log(timeNow - string);

}

calculateAge("1970")







// swapp 





