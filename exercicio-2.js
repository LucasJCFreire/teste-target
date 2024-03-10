arrayFibonacci()

function arrayFibonacci(){
    let numero = parseInt(prompt("Insira um número:"))
    let a = 0
    let b = 1
    arrayTemp = [a,b]
    
    while(numero > b){
        a = a + b
        b = b + a
        arrayTemp.push(a,b)
    }

    if(arrayTemp.includes(numero)){
        console.log('positivo')
    } else{
        console.log('negativo')
    }
}

