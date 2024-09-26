const glass = {
  name: "glass",
  color: "golden",
  price: 12,
  isCleaned: true,
};

console.log(glass);
// all propertie name
const keys = Object.keys(glass);
// [ 'name', 'color', 'price', 'isCleaned' ]

console.log(keys);
// all propertie values
const values = Object.values(glass);
console.log(values);

const entries = Object.entries(glass);
console.log(entries);
// array of array, two dimentional array
// [
//     [ 'name', 'glass' ],
//     [ 'color', 'golden' ],
//     [ 'price', 12 ],
//     [ 'isCleaned', true ]
//   ]

// console.log(glass);
// delete glass.isCleaned;
// console.log(glass);

console.log(glass);
const { isCleaned, ...shortGlass } = glass;
console.log(shortGlass);

// freeze
// Object.freeze(glass);
Object.seal(glass);
glass.source = "Bangladesh";
glass.price = 5000;
delete glass.name;
console.log(glass);
