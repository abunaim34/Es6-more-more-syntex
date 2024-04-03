/*
  TRUTHY
  1. true.
  2. any number (+ve, -ve) will be truthy other than 0.
  3. any string truthy other than empty sting.
  4. '0', 'false'.
  5. {} (empty object).
  6. [] (empty array).


  FALSE
  1. false,
  2. if 0 will be falsy.
  3. '' (empty string).
  5. undefind.
  6. null
*/

// truthy

// number
const y = -4;

// if(y){
//     console.log('value of x is truthy')
// }
// else{
//     console.log('value of x is falsy')
// }

// string
const c = 'string';

// if(c){
//     console.log('value of x is truthy')
// }
// else{
//     console.log('value of x is falsy')
// }


// object
let b = {};

// if(c){
//     console.log('value of x is truthy')
// }
// else{
//     console.log('value of x is falsy')
// }


// array
let k = {};

// if(k){
//     console.log('value of x is truthy')
// }
// else{
//     console.log('value of x is falsy')
// }

// ------------FALSE-----------
const x = false;

// if(x){
//     console.log('value of x is truthy')
// }
// else{
//     console.log('value of x is falsy')
// }

// empty string
const d = '';

// if(d){
//     console.log('value of x is truthy')
// }
// else{
//     console.log('value of x is falsy')
// }


// undefind
let a ;

// if(a){
//     console.log('value of x is truthy')
// }
// else{
//     console.log('value of x is falsy')
// }


// null
let v ;

// if(v){
//     console.log('value of x is truthy')
// }
// else{
//     console.log('value of x is falsy')
// }



// -----------CHACK FALSY----------
const t = false;

// if(!t){
//     console.log('value is falsy')
// }


// --------------CHACK TRUTHY------------
const z = 20;

// if(!!z){
//     console.log('value is truthy')
// }