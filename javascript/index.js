function sayHello(name) {
  console.log(`Hello ${name}!`);
}

const names = ["John", "Jane", "Marc", "Allison"];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

setInterval(() => {
  sayHello(names[getRandomInt(0, names.length)]);
}, 2000);
