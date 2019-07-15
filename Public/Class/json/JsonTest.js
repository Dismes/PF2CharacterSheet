var json = require('./Alchemist.json'); //with path

console.log(json);

var array = json.Weapons.Trained;
var thisarray = array.split(" ")
console.log (thisarray);