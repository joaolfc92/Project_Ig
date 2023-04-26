// Operadores de comparação

const idadeAluno = 17;

if(idadeAluno >= 18){
    console.log('aluno maior de 18 anos')
}else{
    console.log('Aluno menor de idade')
};

// === valida considerando mesmo tipo de dado
// !== diferente
// > maior
// >= maior ou igual
// < menor
// <= menor ou igual 

const salarioAluno = 3000;

if(salarioAluno >= 2000 && salarioAluno <= 3000){
    console.log("Salario abaixo")
}

if(salarioAluno === 3000){
    console.log("Salario igual a "+salarioAluno);
}

if(salarioAluno > 1000 && salarioAluno <=3000 || salarioAluno === 3000){
    console.log("Salario exato")
}