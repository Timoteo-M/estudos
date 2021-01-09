function clickey(){
    var inic = document.getElementById('inicio')
    var fin = document.getElementById('fim')
    var pas = document.getElementById('passo')

    if (inic.value.length == 0 || fin.value.length == 0 || pas.value.length == 0){
        alert('Precisa preencher todos os dados!!')
    }else{
        var inicio = Number(inic.value)
        var fim = Number(fin.value)
        var passo = Number(pas.value)

        if(inicio < fim){
            for (var i = inicio; i <= fim; i += passo){
                res.innerHTML += (i + "<br>")
            }
        }else{
            for (var i = inicio; i >= fim; i -= passo){
                res.innerHTML += (i + "<br>")
            }
        }
    }

}