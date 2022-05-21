//Inside mercurySedan.js, import vehicle.js.
//module.exports = {
 //   Vehicle}

//this includes the vehicle class as a module
const VehicleModule = require("./vehicle").Vehicle

//this shows how to call from this module...
//let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
//console.log(v.make)
//Create a Car class that extends the Vehicle class (located in the vehicle.js).
//Add a constructor.
//Add the super keyword to call the parent class constructor.
//Add the properties listed in the Properties chart above.
class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxiumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxiumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
    //Add the methods with psuedo logic listed in the Methods chart above
    loadPassenger(num) {
        if (this.passenger < this.maxiumPassengers) {
            console.log("Vehicle has room available");
            return
        } else {
            console.log("Vehicle has exceeded the maximum");

        }
    }
    start() {
        if (this.fuel > 0) {
            console.log("Vehicle has started.");
            return this.started == true;
        } else {
            console.log("Vehicle has not started, no fuel");
            return this.started = false;
        }
    }
    scheduleService(mileage) {
        if (this.mileage > 30000) {
            this.scheduleService == true;
            return this.scheduleService;
        }
    }
}

let myNewCar = new Car(Mercury, A28, 2022, Red, 212)
myNewCar.loadPassenger(2)
myNewCar.start()
myNewCar.scheduleService()

console.log(myNewCar)
