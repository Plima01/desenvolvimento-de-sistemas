const nota1 = 5.8;
const nota2 = 1.1
const nota3 = 7.0

function minima (n1, n2){
    return  n1 <= n2 ? n1 : n2;

}
function media (n1, n2, n3){
    const menorNota = minima(n1, minima (n2, n3));
if (menorNota === n1){
        return (n2 + n3) / 2;

    }else if (menorNota === n2){
        return (n1 + n3) / 2;
}return (n1 + n2) / 2;
}
function mediaparaStatus(media) {
    if (media >= 7) {
        return "Aprovado";
    }else if (media >= 4) {
        return "de recuperação";
    }else{
        return "Reprovado";
    }
}

const mediaFinal = media(nota1, nota2, nota3);
const status = mediaparaStatus(mediaFinal);  

console.log(`A média final é ${mediaFinal} e o aluno está ${status}`);