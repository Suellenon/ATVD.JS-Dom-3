let slideIndex = 1;                         // representa a variável em que slide começa e está atualmente, no caso é o 1 slide
showSlides(slideIndex);                     // aqui pede pra mostrar o slide, no caso o slide da variável criada o slide 1

function plusSlides(n) {                          // função dos botões anterior e próximo
                                                  // função já declarada nos botões no html, com o onclick.Quando clicar irá fazer essa função
    showSlides(slideIndex += n);                  // No clique dos botões de anterior e proximo ele vai mostrar slides, o slideindex(1) adicionado ao próximo
}

function currentSlide(n) {                         // função dos pontos de navegação também ja declarada com o onclick                                  
    showSlides(slideIndex = n);                      // O parâmetro é n e mostra o slide atual como sendo o que será clicado, o slideindex=n
}

function showSlides(n) {                                                    //função para a passagem dos slides
    let i;                                                                  // variável i criada
    let slides = document.getElementsByClassName("mySlides");               // Criando variável slides, chamando pela class do html, para poder acessá-la
    let pontos = document.getElementsByClassName("ponto");                  //Criando variável pontos pela class do html, para mexer nela

    if (n > slides.length) {                                                //As condiçoes para a passagem das imagens
        slideIndex = 1                                                         // Se n o parametro dado para os slides for maior que o tamanho do array de slides o slide atual será o 1
    }                                                                          // ou seja sempre irá voltar para a 1
    


    if (n < 1) { 
        slideIndex = slides.length                                         // se n for menor que 1, o slide atual vai para o último
    }                                                                      // do 1 slide vaipara o último
    
    for (i = 0; i < slides.length; i++) {                   // Um loop for, se i for 0 (inicio) i menor que o tamanho dos slides, irá somar mais um 
        slides[i].style.display = "none";                                // um estilo de display pra ocultar todos os slides que tem e deixar so o visivel clicado
    }
    
    for (i = 0; i < pontos.length; i++) {
        pontos[i].className = pontos[i].className.replace(" active", "");      // Um loop para os pontos de navegação 
    }                                                                          //se i for 0, i menor que o tamanho total dos pontos irá somar mais um e adiciona aos pontos 
                                                                               // tira a class active dos elementos que não estão visível
    slides[slideIndex - 1].style.display = "block";                           //O slide atual com um estilo display block
                                                                             
    pontos[slideIndex - 1].className += " active";                            // O ponto atual adicionado à uma class active 
}




/*  
Começa chamando a variável atual do slide, e indicando para  ser mostrado na página uma função para os anterior e próximo no clique , a funçao é chamada fazendo os slides serem adicionado ao próximo. Uma função aos pontos de navegação para estar sicronizado com os slides no atual.Função para a passagem das imagens chamando pelo classname do html, dando condicões onde o slide sempre volta ao 1, e acho que os pontos de navegação é adicionado a uma nova classe active e quando for seu tamanho menor que a quantidade que possui ele retira a class adicionada e permanece no slide atual. 

*/ 