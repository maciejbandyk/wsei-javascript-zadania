//Zadanie 3
Hello();

function Hello() {
    console.log("Cześć");
}

//Następuje tutaj znawisko hoistingu. Interpreter najpierw przegląda cały kod w poszukiwaniu zmiennych i funkcji, w przypadku funkcji
// zapisuje je w pamięci, w przypadku zmiennych również, lecz najpierw ustawia dla nich wartość undefined. Zmienne swoją wartość przyjmują dopiero później.

hello();

var hello = function() {
    console.log('Witaj');
}

//Jak wyżej, jest to zmienna, czyli najpierw dostanie "Undefined", a później, dopiero w linijce 13 dostaje właściwą wartość