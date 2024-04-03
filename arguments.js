function sum(a, b, c,){
    // console.log(arguments[4])
    const args = [...arguments]
    // console.log(args)
    const result = a + b + c;
    return result;
}

const total = sum(54, 88, 44, 55, 88, 11);
const total2 = sum(54, 88, 44, 55);
// console.log(total, total2)
console.log(sum.length)