function greeting(greetingHandler, name){
    greetingHandler(name)
}

// funtion callback
// greeting('halim mama')


// string
const name = 'halim mama'
// greeting(name)

// array
const numbers = [55, 44, 71,]
// greeting(numbers)


// object
const laptop = {price: 20000, brand: 'lenovo', memory: '8gb'};
// greeting(laptop)


function greetingHandler(name){
    console.log('good mornig', name)
}

function greetEvening(name){
    console.log('Good evening', name)
}

greeting(greetingHandler, 'tom hanks')
greeting(greetingHandler, 'tom brady')
greeting(greetEvening, 'tom solaiman')


function submitHandler(){
    console.log('submit button clicked')
}
document.getElementById('btn-submit').addEventListener('click', submitHandler)