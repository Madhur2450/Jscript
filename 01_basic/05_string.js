// console.log(`Hello my name is ${name} & my repo count is ${repoCount}`);

const gameName = new String('madhur-sr-i')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('h'));
console.log(gameName.slice());

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Madhur    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://madhur.com/hitesh%20chaudhary"
console.log(url.replace('%20', '-'));

console.log(url.includes('madhur'))
console.log(url.includes('madhr'))

console.log(gameName.split('-'));