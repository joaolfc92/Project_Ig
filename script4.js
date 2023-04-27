import alunos from './dados/alunos.json';

function validarGenero(Genero){
    if(Genero === 'woman' ){
        return true
    }else{
        return false;
    }
}

console.log(validarGenero('woman'));