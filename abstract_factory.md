# Abstract Factory(Абстрактна фабрика)
породжувальний патерн проектування, що дає змогу створювати сімейства пов’язаних об’єктів, не прив’язуючись до конкретних класів створюваних об’єктів.

Він вирішує проблему створення цілих сімейств пов’язаних продуктів, без прив’язки коду до конкретних класів продуктів.

* Інтерфейс Abstract Factory оголошує набір методів, які повертають різні абстрактні вироби. Ці продукти називаються сім’єю і пов’язані між собою високою темою чи концепцією. Продукти однієї сім'ї зазвичай можуть взаємодіяти між собою. Сімейство продуктів може мати кілька варіантів, але вироби одного варіанту несумісні з продуктами іншого.

```
interface AbstractFactory {
    createProductA(): AbstractProductA;
    createProductB(): AbstractProductB;
}
```

 * Concrete Factories створюють сімейства, які належать до одного варіанту. Factorie гарантує сумісність отриманих продуктів. Зауважте, що сигнатури методів Concrete Factories повертають абстрактний продукт, тоді як всередині методу створюється конкретний продукт.
 
 ```
class ConcreteFactory1 implements AbstractFactory {
    public createProductA(): AbstractProductA {
        return new ConcreteProductA1();
    }

    public createProductB(): AbstractProductB {
        return new ConcreteProductB1();
    }
}

class ConcreteFactory2 implements AbstractFactory {
    public createProductA(): AbstractProductA {
        return new ConcreteProductA2();
    }

    public createProductB(): AbstractProductB {
        return new ConcreteProductB2();
    }
}
```

* Кожен окремий продукт сімейства продуктів повинен мати базовий інтерфейс. Усі варіанти продукту мають реалізувати цей інтерфейс.

```
interface AbstractProductA {
    usefulFunctionA(): string;
}
```
```
class ConcreteProductA1 implements AbstractProductA {
    public usefulFunctionA(): string {
        return 'The result of the product A1.';
    }
}

class ConcreteProductA2 implements AbstractProductA {
    public usefulFunctionA(): string {
        return 'The result of the product A2.';
    }
}
```

* Це базовий інтерфейс іншого продукту. Всі вироби можуть взаємодіяти один з одним, але правильна взаємодія можлива лише між виробами одного конкретного варіанту.

```
interface AbstractProductB {
    usefulFunctionB(): string;
    anotherUsefulFunctionB(collaborator: AbstractProductA): string;
}
```
```
class ConcreteProductB1 implements AbstractProductB {

    public usefulFunctionB(): string {
        return 'The result of the product B1.';
    }

    public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
        const result = collaborator.usefulFunctionA();
        return `The result of the B1 collaborating with the (${result})`;
    }
}

class ConcreteProductB2 implements AbstractProductB {

    public usefulFunctionB(): string {
        return 'The result of the product B2.';
    }

    public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
        const result = collaborator.usefulFunctionA();
        return `The result of the B2 collaborating with the (${result})`;
    }
}
```

* Клієнтський код працює з фабриками та продуктами лише через абстрактні типи: AbstractFactory та AbstractProduct. Це дозволяє передати будь-який підклас фабрики або продукту в код клієнта, не порушуючи його.

```
function clientCode(factory: AbstractFactory) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();

    console.log(productB.usefulFunctionB());
    console.log(productB.anotherUsefulFunctionB(productA));
}
```