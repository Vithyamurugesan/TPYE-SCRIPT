"use strict";
class car {
    brand;
    speed;
    fuel;
    constructor(brand, speed, fuel) {
        this.brand = brand;
        this.speed = speed;
        this.fuel = fuel;
    }
    accelerate() {
        this.speed += 10;
        console.log(`Accelearting to ${this.speed}km/h`);
    }
    refuel() {
        console.log(`Refueling with ${this.fuel}`);
    }
    honk() {
        console.log("Honk,honk!");
    }
    displayCarInfo() {
        console.log(`Brand:${this.brand}`);
        console.log(`speed:${this.speed}`);
        console.log(`fuel:${this.fuel}`);
        this.refuel;
        this.honk;
    }
}
let myCar = new car("toyoto", 60, "gasoline");
console.log(`Brand:${myCar.brand}`);
myCar.accelerate();
myCar.displayCarInfo();
