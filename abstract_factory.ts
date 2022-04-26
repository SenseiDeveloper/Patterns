//Abstract Factory(Абстрактна фабрика)
//породжувальний патерн проектування, що дає змогу створювати сімейства пов’язаних об’єктів, 
//не прив’язуючись до конкретних класів створюваних об’єктів.

//Він вирішує проблему створення цілих сімейств пов’язаних продуктів, без прив’язки коду до конкретних класів продуктів.

// Абстрактний інтерфейс фабрики
interface AbstractFactory {
    createProductA() : AbstractProductA;
    createProductB() : AbstractProductB;
}

 // Абстрактній інтерфейс продукта A
interface AbstractProductA {}

 // Абстрактній інтерфейс продукта B
interface AbstractProductB {}

 // фабрика 1
class ConcreteFactory1 implements AbstractFactory {
    constructor() {}
    public createProductA() : AbstractProductA {
        return new ConcreteProductA1();
    }
    public createProductB() : AbstractProductB {
        return new ConcreteProductB1();
    }
}

 //фабрика 2
class ConcreteFactory2 implements AbstractFactory {
    constructor() {}
    public createProductA() : AbstractProductA {
        return new ConcreteProductA2();
    }
    public createProductB() : AbstractProductB {
        return new ConcreteProductB2();
    }
}

 // Конкретный продукт A1
class ConcreteProductA1 implements AbstractProductA {}
 // Конкретный продукт A2
class ConcreteProductA2 implements AbstractProductA {}
 // Конкретный продукт B1
class ConcreteProductB1 implements AbstractProductB {}
 // Конкретный продукт B2
class ConcreteProductB2 implements AbstractProductA {}

 // использовать
const factory1 : AbstractFactory = new ConcreteFactory1();
const factory2 : AbstractFactory = new ConcreteFactory2();
const productA1 : AbstractProductA = factory1.createProductA();
const productA2 : AbstractProductA = factory2.createProductA();
const productB1 : AbstractProductB = factory1.createProductB();
const productB2 : AbstractProductB = factory2.createProductB();