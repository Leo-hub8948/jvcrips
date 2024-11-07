// $(document).ready: Função que garante que o código dentro dela execute
       // somente após o html completo da página estar carregado.
       $(document).ready(function() {

        //seleciona o conteiner .carousel e aplica função slick()
        // que ativa o carrossel com as configuração abaixo
        $('.flexbox').slick({
            
            // slidesToShow: número de cards exibidos ao mesmo tempo no carrossel
            slidesToShow: 3, // Exibe 3 cards ao mesmo tempo
            
            // slidesToScroll: define quantos cards serão deslizados ao mover o carrossel
            slidesToScroll: 2, // Move 1 card por vez ao deslizar

            // infite. Quando true, o carrosel retorna ao inicio automaticamente 
            infinite: true, // mantém o carrosel em rotação continua
            
            // dots: quando true, ativa os pontos de navegação abaixo do carrossel
            dots: true, // Adiciona pontos de navegação para os usuários

            // arrows: exibe setas de navegação nas laterais do carrossel
            arrows: true, // Ativa as setas para navegar entre os cards
        });
       });
