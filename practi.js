var prompt = require("prompt");

prompt.start();  // démarre le prompt

function onErr(err) { // permet de gérer les erreurs
  console.log(err);
  return;
}

 var username = Math.floor(Math.random() * 100);

prompt.get(["username"], function (err, res) {  // demande à obtenir les propriétés "username" et "email"
  if (err) {
		return onErr(err);
	}
    var username = Math.floor(Math.random() * 100);

  console.log("Quel est le nombre mystère ?");
  console.log("=> MysteryNum : " + res.username); // affiche le résultat pour la propriété "username"
//   console.log("=> Email : " + res.email); // affiche le résultat pour la propriété "email"
});