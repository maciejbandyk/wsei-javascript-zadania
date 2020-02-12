//Zadanie 0a
const city = {
    capital: "Miasto",
    population: 2000,
    president: "Marian Paździoch",
    primeMinisters: ["No Name", "No Name Pro"]
}

console.log("capital: " + city.capital + "population: " + city.population + "president: " + city.president + "prime ministers: " + city.primeMinisters);

//Zadanie 0b
const timeMachine = {
    shape:'shapeOfYou',
    model:'model',
    run: function(date,place) {
        console.log("Przenosimy się do: " + date + " w " + place);
    }
}

console.log(timeMachine.shape,timeMachine.model);
timeMachine.run('10.10.1410','Grunwald');

//Zadanie 1
const book = {
    title: 'title',
    author: 'author',
    numberOfPages: 'number'
}
console.log(book);

//Zadanie 2
const person = {
    name: 'name',
    age: 3,
    sayHello: () => console.log('Person says hello!')
}

//Zadanie 3
const recepie = {
    title: 'title',
    servings: 4,
};

recepie.ingredients = ['bread', 'stringnrtwo'];

console.log(recepie);

//Zadanie 6
var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

console.log(spoon.isExist);