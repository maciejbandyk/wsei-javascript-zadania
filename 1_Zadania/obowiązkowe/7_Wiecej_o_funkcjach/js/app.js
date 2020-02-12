/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//Zdefiniowanie funkcji "jeden"
function jeden() {

    //Zdefiniowanie zmiennej "zmienna1"
    var zmienna1 = 1;

    //Zdefiniowanie funkcji "dwa"
    function dwa() {

        //Wyświetlenie zmiennej "zmienna1"
        console.log(zmienna1);

        //Zadeklarowanie zmiennej "zmienna2" wewnątrz "scope'u" funkcji dwa
        var zmienna2 = 3;
    }

    //Wywołanie funkcji "dwa"
    dwa();

    //Próba wyświetlenia zmiennej "zmienna2", gdzie nie ma możliwości dostania się do wewnętrznego "scope'u" funkcji "dwa"
    console.log(zmienna2)
}

//Wywołanie funkcji "jeden"
jeden()