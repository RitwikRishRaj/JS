const name = "Ritwik"
const repoCount = 50

console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Ritwik')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));


const gameNames = new String('Ritwik-Rish')
const new1string = gameNames.substring(0,5) //last one not printed
console.log(new1string);

const anotherString = gameNames.slice(-8, 4)
console.log(anotherString);

const newStringsOne = "       Ritwik        "
console.log(newStringsOne);
console.log(newStringsOne.trim());


const url = "https://ritwik.com/ritwik%20rishraj"

console.log (url.replace('%20', '-'))
console.log(url.includes('rish'));

const gemu = new String('Ritwik-Rish')

console.log(gemu.split('-'));
