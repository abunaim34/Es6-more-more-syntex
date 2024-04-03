print5()
print10()
console.log(print10)

for(let i = 0; i < 5; i++){
    // console.log(i)
}

function print5(){
    console.log('hoisting')
}

const print10 = function(){
    console.log('thi is invalid')
}