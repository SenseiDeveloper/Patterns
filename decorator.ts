//Декоратор — це структурний патерн проектування,
// що дає змогу динамічно додавати об’єктам нову функціональність, загортаючи їх у корисні «обгортки».

// абстрактний клас який реалізую машину і ми наслідуємось
abstract class Car {
    public description: string;

    public getDescription(): string {
        return this.description;
    }

    public abstract cost(): number;
}

//абстрактний клас який реалізую додаткові опції
abstract class CarOptions extends Car{
    decoratedCar: Car;
    public abstract getDescription(): string;
}

//Реалізація юазового автомобіля тесла
class Tesla extends Car{
    public description = 'Model X';

    public cost(): number {
        return 100000;
    }
}

//добавляєм необхідні опції для автомобіля
class AutoPilot extends CarOptions {
    constructor(car: Car) {
        super();
        this.decoratedCar = car;
    }

    public getDescription(): string {
        return this.decoratedCar.getDescription() + ',Autopilot';
    }

    public cost(): number {
        return this.decoratedCar.cost() + 5000;
    }
}

let myCar = new Tesla();
myCar = new AutoPilot(myCar);

console.log(myCar.cost()); //105000
console.log(myCar.getDescription()); //Model X,Autopilot