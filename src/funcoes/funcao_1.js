let a = 4
console.log(a)

//function declaration
function bomDia() {
    console.log('Bom dia!')
}

bomDia();

//function expression
const boaTarde = function() {
    console.log('Boa tarde!')
}

boaTarde();

//manipulando funções e seus paramentros
let x = boaTarde()
console.log(x) //undefined

function somar(a, b = 1) {
    return a + b
}

//flexibilidade de paramentros
let resultado = somar(2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(resultado);

resultado = somar(3) 
console.log(resultado); //NaN