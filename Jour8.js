const axios= require('axios');



axios.get("https://restcountries.eu/rest/v2/all").then(function(res){
    var getCountries = res.data;
    const countriesName = getCountries.map(getCountries => getCountries.name);
     console.log(countriesName);
});

// Ex 2 
axios.get("https://api.chucknorris.io/jokes/random").then(function (res) {
    const getFacts = res.data; //is an object
    console.log('chuck norris fact : ' , getFacts.value);
});

// Ex 3 







// axios.get("https://api.chucknorris.io/jokes/random").then(function (res) {
//     const jokes = res.data;
//     console.log(jokes);
// });

