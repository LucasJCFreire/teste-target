
inverterPalavra('jones')

function inverterPalavra(palavra) {
    arrayPalavra = palavra.split('')
    let i = palavra.length - 1
    let novoArrayPalavra = []
    console.log(i)

    while(i>=0){
        novoArrayPalavra.push(arrayPalavra[i])
        i--
    }
        let novaPalavra = novoArrayPalavra.join('')
        console.log(novaPalavra)
}