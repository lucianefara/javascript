function gerar() {
    var n = window.document.getElementById('num')
    var l = window.document.getElementById('listtab')

    if(n.value.length == 0){
        window.alert('Não é possível realizar este cálculo, insira um número acima.')
    } else{

        var nume = Number(n.value)
        var c = 1

        while(c <= 10){
            
            var item = document.createElement('option')
            item.text = `${nume} x ${c} = ${nume*c}`

            item.value = `l${c}`
            l.appendChild(item)
            c++

        }
    }
}