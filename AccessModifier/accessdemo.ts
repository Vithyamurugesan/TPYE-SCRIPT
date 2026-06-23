class car{
    public brand:string;
    private speed:number;
    protected fuel:string;
    constructor(brand:string,speed:number,fuel:string){
        this.brand=brand;
        this.speed=speed;
        this.fuel=fuel;
    }
    public accelerate(){
        this.speed+=10;
        console.log(`Accelearting to ${this.speed}km/h`);
    }
    private refuel(){
        console.log(`Refueling with ${this.fuel}`);
    }
    protected honk(){
        console.log("Honk,honk!");
    }
    public displayCarInfo(){
        console.log(`Brand:${this.brand}`);
        console.log(`speed:${this.speed}`);
        console.log(`fuel:${this.fuel}`);
        this.refuel;
        this.honk;
    }
}

let myCar=new car("toyoto",60,"gasoline");
console.log(`Brand:${myCar.brand}`);
myCar.accelerate();
myCar.displayCarInfo();
