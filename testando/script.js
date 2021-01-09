    function adicionar(){
        var numero = document.getElementById('num1')
        var sell = document.getElementById("sel1")

        if (numero.value.length == 0){
            alert('Digite algo')
            
        }else{
            var num1 = Number(numero.value)
            var sel = Number(sell.value)
            let vet = []
            var c = 0
            vet.push(num1)
            
            let cont = vet.length

            //sell.innerHTML =''
            while(c <= cont){
                let item = document.createElement('option')
                item.text = `${vet[c]} e ${cont}`
                //sel1.appendChild(item)
                c++
            }
        }
    }