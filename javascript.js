let slideIndex = 1;                         // representa em que slide começa e está atualmente, no caso é o 1 slide
showSlides(slideIndex);                     // aqui pede pra mostrar o slide, no caso o slide da variável criada o slide 1

function plusSlides(n) {                          // função dos botões anterior e próximo
    showSlides(slideIndex += n);                  // No clique dos botões de anterior e proximo ele vai mostrar slides, o slideindex(1) adicionado ao próximo
}

function currentSlide(n) {                         // função dos pontos de navegação                                   
    showSlides(slideIndex = n);                      // Oparâmetro é n e mostra o slide atual como sendo o que será clicado, o slideindex=n
}

function showSlides(n) {                                                    //função para a passagem dos slides
    let i;                                                                  // variável i
    let slides = document.getElementsByClassName("mySlides");               // Criando variável slides, chamando pela class do html, para poder acessá-la
    let pontos = document.getElementsByClassName("ponto");                  //Criando variável pontos pela class do html, para mexer nela

    if (n > slides.length) {                                                //As condiçoes para a passagem das imagens
        slideIndex = 1                                                         // Se n o parametro dado para os slides for maior que o tamanho do array de slides o slide atual será o 1
    }
    


    if (n < 1) { 
        slideIndex = slides.length                                         // se n for menor que 1, o slide atual vai para o último
    }
    
    for (i = 0; i < slides.length; i++) {                                // Um loop for, se i for 0 (inicio) i menor que o tamanho dos slides, irá somar mais um
        slides[i].style.display = "none";                                // um estilo de display pra ocultar todos os slides que tem e deixar so o visivel clicado
    }
    
    for (i = 0; i < pontos.length; i++) {
        pontos[i].className = pontos[i].className.replace(" active", "");      // Um loop para os pontos de navegação 
    }                                                                          //se i for 0, i menor que o tamanho total dos pontos irá somar mais um
    
    slides[slideIndex - 1].style.display = "block";                           //O slide atual com um estilo display block
                                                                             
    pontos[slideIndex - 1].className += " active";                            // O ponto atual adicionado á uma class active 
}




/* Javascript trabalha aqui com a função para todos os elemento dando a lógica se maior ou menor que seu tamanho sempre irá voltar para o slide 1. Em todos detalha que apenas um slide seja exibido por vez. Em uma só função se especificou isso de estarem sincronizados, chama os slide e os pontos em uma variável  e põe condição na passagem da imagem  e adicionou uma class nos pontos do slide atual. Os slides podendo ser passados clicando para o próximo ou escolhendo um slide específico deixa o carrossel mais dinâmico e interativo.






*/ 