function contar() {
var inicio = window.document.getElementById('inicio')
var fim = window.document.getElementById('fim')
var passo = window.document.getElementById('passo')
var res = document.getElementById('res')

if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
    window.alert('[ERRO] Faltam dados!')
} else {

    res.innerHTML = 'Contando'
    
    
}
}

