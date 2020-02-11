// Zadanie 0
function checkArray(array)
{
    let checked = [];
    for(let i=0; i<array.length;i++)
    {
        let check = true;
        for(let j=0; j<array[i].length; j++)
        {
            if(array[i][j]%2 !=0)
            {
                check=false;
                break;
            }
        }
        checked.push(check);
    }
    return checked;
}

checkArray([
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34],
]);

//Zadanie 1
var Arr = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];

console.log(Arr[3][2]);
console.log(Arr[1].length);
console.log(Arr[4][2]);

//Zadanie 2
var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

function secondTask(){
    for(let i = 0;i<task2Array[0].length;i++){
        console.log(task2Array[0][i]);
    }
    for(let i = 0; i< task2Array.length;i++){
        console.log(task2Array[i].length);
    }
    for(let i = 0; i< task2Array.length;i++){
        for(let l = 0; l < task2Array[i].length;l++){
            console.log(task2Array[i][l]);
        }
    }
}
secondTask();

//Zadanie 3
function print2DArray(arr) {
    for(let i=0; i<arr.length; i++) {
        for(let j=0; yj<arr[i].length; j++)
            console.log(arr[i][j]);
    }
}
print2DArray([[1,2], [3,4]]);

//Zadanie 4
const task4Array = [
    [1, 2, 3, 4],
    ['pięc', 'sześć', 'siedem', 'osiem'],
    ['jablko', 'kiwi']
];
console.log(print2DArray(task4Array));

//Zadanie 5
function create2DArray(rows, columns) {
    var newArray = [];
    var temporaryArray = [];
    var counter = 1;

    for(var i=0; i<rows; i++) {
        for(var y=0; y<columns; y++) {
            temporaryArray.push(counter);
            counter++;
        }
        newArray.push(temporaryArray);
        temporaryArray = [];
    }
    return newArray;
}

console.log(create2DArray(4, 4));