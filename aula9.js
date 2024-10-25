const usuario = {
    nome: 'Igor',
    idade: 25,
    time: 'Corinthians'
};

const mensagemDeBoasVindas1 = 'Bem vindo, torcedor Timão!';
const mensagemDeBoasVindas2 = 'bem vindo, torcedor Rubro-Negro';

if (usuario.time == 'São Paulo') {
    console.log(mensagemDeBoasVindas1);

} else { // Caso contrario irá aparecer a mensagem2
    console.log(mensagemDeBoasVindas2);
}