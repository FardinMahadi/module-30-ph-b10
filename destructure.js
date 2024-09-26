const actor = {
  name: "fardin",
  age: 34,
  phone: "0189238998",
  money: 12324234892,
};

// if right side is an object left side of destructuring will be object
// use property name as a variable that contains the property value
const { phone, age: boyos } = actor;

// const phone = actor.phone;
const name = actor.name;
// const age = actor.age;

console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(boyos);
console.log(boyos);
console.log(boyos);

// array destructuring
const numbers = [45, 99];
const [first, second] = numbers;
const [x, y] = [12, 66];

// advanced
function doubleThem(a, b) {
  return [a * 2, b * 2];
}

const [prothom, ditiyo] = doubleThem(8, 9);
console.log(prothom, ditiyo);
