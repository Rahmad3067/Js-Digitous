

// using promt to Properties, validation and default values
var prompt = require("prompt");

 var properties = [{
    name: "username",
    // Validation Regex: letters maj / min, spaces and dashes
    validator: /^[a-zA-Z\s\-]+$/,
    warning: "The username must contain only letters, spaces and dashes"
 },
 {
    name: "password",
    hiden: true,
 }
 ];

  prompt.start();

 function onErr(err) {
    console.log(err)
    return 1;
 }

 prompt.get (properties, function(err, res){
     if (err) {
        return onErr(err);
    }
    console.log("Données reçues :");
    console.log("=> Username : " + res.username);
    console.log("=> Password : " + res.password);
 });


