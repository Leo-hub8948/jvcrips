// selecione o elemento que contém todas as imagens do carrosel
const track = document.getElementByid('carouselTrack');

// Obtém o número de imagens no carrosel
const items = document.querySelectorAll('.carousel-item');
let index = 0; // índice que rastreia a imagem atual

// função que move o carrosel para a próxima imagem
function moveCarousel() {
    //incrementa o ídice para avançar uma imagem
    index++;

    // Verifica se o índice chegou á ultima imagem clonada
    if (index >= items.length - 1){
        // Pequeno atraso para permitir que a transição termine
        setTimeout(() => {
            track.syle.transition = 'none'; // Remove a animação
            index = 0; // volta ao início (primeiro imagem)
            track.style.transform = `translateX(0)`; // Move para a primeira imagem 
        }, 500); // tempo suficiente para completar a transição vísivel
    } else {
        //Move o carrossel para a próxima imagem
        track.style.transition = 'transform 0.5s ease'; // Adiciona a animação
        track.syle.transform = `translateX(-${index * 100}%)`; // Desloca o carrosel
    }
}

setInterval(moveCarousel, 1000);