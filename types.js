// javascript is a dynamic type language

// primitive type
const a = 5;
const b = 'abu naimer premaspod';
const d = true;

// non-primitive type
const ages = [45, 74, 55,];
const student = {id: 23, class: 9};


let x = 5;
let y = x;
// console.log(x, y);
// y = 7;
// // console.log(x, y);

let p = {job: 'web developer'}
let q = p;
// q = {job: 'backend developer'};
q.job = 'front end developer'
console.log(p, q)