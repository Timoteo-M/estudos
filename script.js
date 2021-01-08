function clickei(){
    var inic = document.getElementById('inicio')
    var fin = document.getElementById('fim')
    var pas = document.getElementById('passo')

    if( inic.value.length ==0 || fin.value.length == 0 || pas.value.length == 0){
        alert("Vc precisa digitar para funcionar!!")
    }
    else{
        var inicio = Number(inic.value)
        var fim = Number(fin.value)
        var passo = Number(pas.value)
        if(passo == 0){
            alert('No minimo 1')
            passo = 1
            
        }
    }
    if(inicio < fim){
        do{
            inicio += passo
            res.innerHTML += `${inicio} <br>`
        }while(inicio <= fim)
    }else{
        do{
            inicio -= passo
            res.innerHTML += `${inicio} <br>`
        }while(inicio >= fim)
    }
}