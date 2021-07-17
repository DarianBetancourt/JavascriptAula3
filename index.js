let nome=""; 
let sobrenome=""; 
let idade;
const pattern = new RegExp('^[A-Z]+$', 'i'); 

//obtendo dados da pessoa
do{
    nome=pedirDado(nome,"nome");
    sobrenome=pedirDado(sobrenome,"sobrenome");
    idade = parseInt(prompt("insere sua idade"));
}while(isNaN(idade));

//construindo o objeto pessoa
let pessoa = { 
    nome        : nome,
    sobrenome   : sobrenome,
    idade       : idade,
}
console.table(pessoa);

// função para mostrar alerta se o campo inserido contiver apenas letras
function mensagemInvalido(string){ 
    if(!pattern.test(string)){
        alert("el dado inserido esta vacio o contiene numeros o espacios");
    }
}

//função que da variável e seu nome pede ao usuário seu valor e o retorna
function pedirDado(variavel,nome){
    while (variavel.length === 0 || !pattern.test(variavel)){
        mensagemInvalido(variavel = prompt(`insere su `+ nome));  
    } 
    return variavel;
}
