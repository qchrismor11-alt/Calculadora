'use strict'

const num1 = document.getElementById('number1')
const num2 = document.getElementById('number2')
const response = document.getElementById('resultado')

console.log (num1)
function addnum() {
    const addition = parseFloat(numero1.value) + parseFloat(numero2.value)
    response.textContent = addition
}

function subnum() {
    const subtraction = parseFloat(numero1.value) - parseFloat(numero2.value)
    response.textContent = subtraction
}

function multnum() {
    const multiply = parseFloat(numero1.value) * parseFloat(numero2.value)
    response.textContent = multiply
}

function divnum() {
    const divide = parseFloat(numero1.value) / parseFloat(numero2.value)
    response.textContent = divide
}

function clearresult() {
    const clear= ("resultado")
    response.textContent = clear
}

adicionar.onclick = addnum
subtrair.onclick = subnum 
multiplicar.onclick = multnum
dividir.onclick = divnum
clear.onclick = clearres