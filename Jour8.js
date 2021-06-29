const axios= require('axios');



// axios.get("https://restcountries.eu/rest/v2/all").then(function(res){
//     var getCountries = res.data;
//     const countriesName = getCountries.map(getCountries => getCountries.name);
//      console.log(countriesName);
// });

// Ex 2 
// axios.get("https://api.chucknorris.io/jokes/random").then(function (res) {
//     const getFacts = res.data; //is an object
//     console.log('chuck norris fact : ' , getFacts.value);
// });

// Ex 3 

axios.get("https://pokeapi.co/api/v2/pokemon/").then(function (res) {
    const pokemonData = res.data; 
    const pokemonList = pokemonData.results
    const pokemonName = pokemonList.map(pokemon => pokemon.name); 
    function catchPokemon(num1) {
        console.log("id :", num1+1);
        console.log("name :", pokemonName[num1]);
    }
    catchPokemon (15)
}); 









// axios.get("https://api.chucknorris.io/jokes/random").then(function (res) {
//     const jokes = res.data;
//     console.log(jokes);
// });

