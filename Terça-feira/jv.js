//getAttribute - obter o valor do atributo/elemento (valor da linha).

//setAttribute - Definir ou modificar o valor.

function changeImage() {
    const img = document.getElementById("myImage");
    //Aqui Conseguimos armazenar o conteúdo da imagem.
    
    
    const observerImage = img.getAttribute("src");
    // Aqui pegamos o atributo SRC da imagem que basicamente diz o caminho da origem da imagem.

    if (observerImage === "dragão1.jpg") {
        //se a origem atual da imagem for igual a "lobão.jpg"


        img.setAttribute("src", "gavião1.avif"); // Usando o SetAtt
        img.setAttribute("alt", "imagem gavião1.avif");
    } else {  //Caso contrario fazer o processo inverso.
        img.setAttribute("src", "dragão1.jpg");
        img.setAttribute("alt", "imagem dragão1");
     }
    
}