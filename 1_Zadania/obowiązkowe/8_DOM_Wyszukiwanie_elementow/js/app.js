document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */
    let title = document.querySelector('.title');

    function getDataAnimation(element){
        let value = element.dataset.animation;
        return value;
    }
    console.log(getDataAnimation(title));

    //Zadanie 1
    let home = document.querySelector('#home');
    let home2 = document.querySelector('home');
    let direction = document.querySelector('li');
    let block = document.querySelector('.block');

    console.log(home, home2);
    console.log(direction);
    console.log(block);

    //Zadanie 2
    let liElement = document.querySelector('nav').querySelector('li');
    let pElement = document.querySelectorAll('div p');
    let divsElement = document.querySelectorAll('article div');
    
    console.log(liElement.length);
    console.log(pElement.length);
    console.log(divsElement.length);

    //Zadanie 3
    let articleTag = document.querySelectorAll('article.first');
    let h1 = articleTag.querySelectorAll('h1').length;
    console.log(h1);
});
