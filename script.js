let num = document.querySelector('input#num1')
let valores = []

function adicionar (){
    if(xNumero(num.value) && !xlista(num.value, valores)){
        valores.push(Number(num.value))

        let item = document.createElement('option')
        item.text = ` ${num.value}`
        valores.appendChild(item)

}else{
    alert("Valores jah add ou incorreto")
}
}