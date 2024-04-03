// primitive
// primitive types are pass by value
let num1 = 5;
let num2 = 7;

function multiply(a, b){
    a = 27
    const result = a * b;
    return result;
}

const output = multiply(num1, num2);
// console.log(output)


// none-primitive
// object and array pass by reference
let student = {name: 'ashik', pertner: 'ashika'};
let student2 = {name: 'rofiq', pertner: 'rofiqa'};

function makeGame(group, group1){
    group.name = 'rofiqa';
    group1.pertner = 'ashik'
}
// console.log(student, student2);
// makeGame(student, student2);
// console.log(student, student2)


if ("2" === 2) {
    console.log("Inside if");
} else {
    console.log("Inside else");
}