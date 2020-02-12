//Zadanie 0
let car = {
    brand: "Mercedes",
    color: "Czarny",
    numberOfKilometers: 0,
    printCarinfo() {
        return this.color+" "+this.brand+", "+this.numberOfKilometers+" km";
    },
    drive(distance) {
        this.numberOfKilometers = this.numberOfKilometers + distance;
    }
}

car.printCarinfo();
car.drive(20);
car.printCarinfo();

//Zadanie 1
car.review = [];
car.addReview = function(date){
    this.review.push(date);
}
car.getReviews = function(){
    for(let i=0;i<this.review.length;i++){
        console.log(this.review[i]);
    }
}

//Zadanie 3
let stairs = {
    step: 0,
    up: function(){
        this.step++;
    },
    down: function(){
        this.step--;
    },
    printStep: function(){
        console.log(this.step);
    }
}

stairs.up();
stairs.up();
stairs.up();
stairs.down(); 
stairs.printStep();