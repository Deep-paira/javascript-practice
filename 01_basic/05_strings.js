const name = "Deep"
const repoCount = 50

//console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String(`deep-hc-com`)

console.log(gameName[0])
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase())

console.log(gameName.charAt(2));
console.log(gameName.indexOf('p'));

const newString = gameName.substring(0, 3)
console.log(newString)

const anotherString = gameName.slice(-6, 3)
console.log(anotherString)

const newStringOne = "   Deep    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Deep.com/Deep%20paira"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));