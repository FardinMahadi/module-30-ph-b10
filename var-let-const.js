// var: no reason to use var
// let: allow it to reassign
// const: do not allow it to reassign

const money = 34;
// money = 43;
const rich = money + 32;
console.log(rich);

let count = 0;
count = count + 10;
console.log(count);

const numbers = [32, 43, 54, 65, 76];
// numbers = [3, 4, 5, 6];
console.log(numbers);
numbers[1] = 55;
numbers.push(4, 9, 10);
console.log(numbers);

// loop
let sum = 0;
for (let i = 0; i < 10; i++) {
  sum += i;
}
console.log(sum);
