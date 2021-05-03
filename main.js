let pessoas = []
let form = document.getElementById("registro")
let registroPessoas = document.querySelector(".registroPessoas")
let tabela = document.getElementById("listaPessoas")

form.addEventListener("submit", function (evento) {
    evento.preventDefault()

    registroPessoas.classList.add("on")

    let dados = new FormData(form)
    let registrado = registrar(dados)
   
    pessoas.push(registrado)
    alert("registrada!")
    console.log(pessoas)
    limpiar()
    
    tabela.innerHTML += `<tbody><td>${registrado.nome}</td><td>${registrado.idade}</td></tbody>`;

    PessoaMaior(pessoas)

})

function limpiar(){
    document.getElementById("nome").value=""
    document.getElementById("idade").value=""
}

function registrar(formData) {
    let nome = formData.get("nome")
    let idade = Number(formData.get("idade"))
    
    let registro = {
        nome: nome,
        idade
    }
    
    return registro
}

function ordenar(pessoas){
    pessoas.sort((a,b)=>{

        if(a.idade < b.idade){
            return 1
        }else if(a.idade > b.idade){
            return -1
        }else{
            return 0
        }

    })

    console.log(pessoas)
}

function PessoaMaior(pessoas){
    ordenar(pessoas)
    document.getElementById('pessoaMaior').innerHTML = (`Pessoa com maior idade é ${pessoas[0].nome} e tem ${pessoas[0].idade} anos`);
}