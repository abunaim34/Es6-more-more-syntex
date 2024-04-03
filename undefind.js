/*
     8 way to get undefind
  1. variable that is not initialixed will give undefind.
  2. funtion with no return.
  3. parameter is not passed will be undefind.
  4. if return has nothing on the right side will return undefind.
  5. property that doesnt exsits on an object will give you undefind.
  6. ccesing array elements outside of index range will give you undefind.
  7. deleting element inside an array.
  8. set a value directly to undefind.
*/

// variable that is not initialixed will give undefind.
let first ;
// console.log(first)


// funtion with no return.
function second(a, b){
  const total = a + b
}
const result = second();
// console.log(result)


// parameter is not passed will be undefind.
function third(a, b, c, d){
  const total = a + b + c + d;
  console.log(a, b, c, d,)
}
// third(4, 5)


// if return has nothing on the right side will return undefind.
function noNagetive(a, b){
  if(a < 0 || b < 0){
    return;
  }
  return a + b;
}
const total = noNagetive(2, 5)
const tota = noNagetive(2, -5)
// console.log(total, tota)


// property that doesnt exisits on an object will give you undefind
const fifth = {id: 2, name: 'chomchom', age: 20}

// console.log(fifth.age, fifth.salary)


// accesing array elements outside of index range will give you undefind.
const array = [55, 22, 44, 11, 77];

// console.log(array[1], array[5], array[88]);


// deleting element inside an array.
const index = [55, 22, 44, 11, 77];
// you should not it. Instead use splice.
delete index[1]

// console.log(index[1], index[5], index[88]);


// set a value directly to undefind.
const eighth = undefined;
// console.log(eighth)


const ningth = null;
// console.log(ningth)

const data = {results: [], update: null}
// console.log(data)

// typeof undefind
console.log(typeof undefined);

// typeof null
console.log(typeof null)