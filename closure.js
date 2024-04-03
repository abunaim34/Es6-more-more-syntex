function stopWath(){
    let count = 0;
    return function(){
        count++;
        return count
    }
}
const wath1 = stopWath()
console.log(wath1())
console.log(wath1())
console.log(wath1())

const watch2 = stopWath()
console.log('wathc2', watch2())
console.log('wathc2', watch2())
console.log('wathc2', watch2())