var hor = 22
console.log(`São ${hor} horas.`)

if(hor > 1 && hor < 12) {
    console.log('Bom dia')
} else if (hor >= 13 && hor < 19) {
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
}