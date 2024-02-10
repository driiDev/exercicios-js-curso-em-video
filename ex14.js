let num = [5,8,4]
console.log(`Nosso vetor é o ${num}`)

num.sort()
num.push(7) // adiciona um valor



pos = num.indexOf(9)
if(pos == -1){
    console.log('O valor não foi encontrado.')
}
console.log(`O valor 8 está na posição ${pos}`)

/*
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
*/