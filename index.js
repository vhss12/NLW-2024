// arrays, objetos
let meta ={
    value: 'ler um livro por mês',
    address:2,
    checked: false,
    isChecked : (info) => {
        console.log(info)
    }
}

let metas = [
    meta,
    {
        value:"caminhar 20 minutos todos os dias",
        checked: false
    }
]

console.log(metas[1].value)