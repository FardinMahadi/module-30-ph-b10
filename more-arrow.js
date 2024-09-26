const difference = (x, y) => x - y;

const multiply = (first, second, third) => first * second * third;

// single parameter
const getAge = (person) => person.age;

const student = { name: "farin", age: 45 };
const age = getAge(student);
console.log(age);

const getThird = (numbers) => numbers[2];
const third = getThird([4, 5, 2, 6, 9]);
console.log(third);

const doubleIt = (num) => num * 2;
console.log(doubleIt(8));

// no parameter
const getPi = () => Math.PI;
console.log(getPi());

// large arrow function. if you want to get anything returned from this function. then you have to use the return keyword
const doMath = (x, y, z) => {
  const sum = x + y + z;
  const mult = x * y * z;
  const result = sum + mult;
  return result;
};
