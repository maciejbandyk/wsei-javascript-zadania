document.addEventListener("DOMContentLoaded", function () {
    let homeElement = document.getElementById("home");
    let childElements = document.querySelector(".oferts").children;
    let banner = document.querySelector(".ban");
    let blocks = document.querySelectorAll(".block");
    let links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */
    //Zadanie 0
    function getDataInfo(elements) {
        let newArray = [];
        for(let i=0; i<elements.length; i++) {
           newArray.push(elements[i].getAttribute(elements[i].getAttributeNames('data')));
        }
       return newArray;     
    }
    console.log(getDataInfo(links));

    //Zadanie 1
    let items = [];
    let childItems = [];
    items.push(homeElement, childElements, banner, blocks, links);

    for(let i=0; i<items.length; i++) {
        if(items[i].length !== undefined) {
            for(let j=0; j<items[i].length; j++) {
                childItems.push(items[i][j]);
                console.log("Item: " + items[i][j] + " has class: " + items[i][j].className + " and tag: " + items[i][j].tagName);
            }
        }
        else {
            childItems.push(items[i]);
            console.log("Item: " + items[i] + " has class: " + items[i].className + " and tag: " + items[i].tagName);
        }
    }
    console.log(childItems);

    //Zadanie 2
    for(let item of blocks){
        console.log(item.innerHTML);
        console.log(item.outerHTML);
       }
    //InnerHTML zwraca zawartość wewnątrz tego diva
    //OuterHTML zwraca zawartość wewnątrz tego diva wraz z zewnętrzną jego częścią

    //Zadanie 4
    function  getTags(elements){
        const tagsNames = [];
        for(let item of elements){
             tagsNames.push(item.tagName);
        }
        return tagsNames;
    }
    console.log(getTags(childElements));

    //Zadanie 5
    function getClassInfo(element) {
        let classes = [];
        classes = element.classList;
        return classes;
    }
    console.log(getClassInfo(banner));

    //Zadanie 6
    let liItems = document.querySelectorAll('nav li');
    function setDataDirection(elements){
        for(let item of elements){
            if(!item.getAttribute('data-direction')){
                 item.setAttribute('data-direction','top');
            }
        }
    }
    console.log(setDataDirection(liItems));
});
