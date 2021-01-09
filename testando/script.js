    function adicionar(){
        var numero = document.getElementById('num1')
        var sell = document.getElementById("sel1")

        if (numero.value.length == 0){
            alert('Você precisa digitar um número')
            
        }else if(numero.value < 1 ){
            alert("O número está abaixo que o solcitado!")
        }else if(numero.value > 100){
            alert("O número está acima que o solcitado!")
        }else{
            var num1 = Number(numero.value)
            var sel = Number(sell.value)
            let vet = []
            vet.push(num1)
            
            let cont = vet.length

            let achou = vet.indexOf(num1)
            if (achou != 0){
                alert("numero repetido")
            }

                for (let i = 0; i < cont; i++  ){
                    let item = document.createElement('option')
                    item.text = `${vet[i]}`
                    sel1.appendChild(item)
                }
        }
    }