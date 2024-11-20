// Seleciona o elemento que contém todas as imagens do carrossel
const track = document.getElementById('carouselTrack');

// Obtém o número de imagens no carrossel
const items = document.querySelectorAll('.carousel-item');
let index = 0; // índice que rastreia a imagem atual

// Função que move o carrossel para a próxima imagem
function moveCarousel() {
    // Incrementa o índice para avançar uma imagem
    index++;

    // Verifica se o índice chegou à última imagem
    if (index >= items.length) {
        // Pequeno atraso para permitir que a transição termine
        setTimeout(() => {
            track.style.transition = 'none'; // Remove a animação
            index = 0; // Volta ao início (primeira imagem)
            track.style.transform = `translateX(0)`; // Move para a primeira imagem
        }, 500); // Tempo suficiente para completar a transição visível

        // Após o atraso, reinicia a animação
        setTimeout(() => {
            track.style.transition = 'transform 0.5s ease'; // Reaplica a animação
        }, 600); // Tempo suficiente para esperar o delay
    } else {
        // Move o carrossel para a próxima imagem
        track.style.transition = 'transform 0.5s ease'; // Adiciona a animação
        track.style.transform = `translateX(-${index * 100}%)`; // Desloca o carrossel
    }
}

// Chama a função de transição a cada 3 segundos (ajuste o intervalo conforme necessário)
setInterval(moveCarousel, 3000);