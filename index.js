const myWildInfo = require('./information');
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello, I'm ${myWildInfo.firstname} ${myWildInfo.name} from ${myWildInfo.campus} Campus`,
    e : "oO",
    T : "U "
}));