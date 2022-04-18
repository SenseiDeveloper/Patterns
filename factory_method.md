# Factory Method(Фабричний метод)
породжувальний патерн проектування, який визначає загальний інтерфейс для створення об’єктів у суперкласі, дозволяючи підкласам змінювати тип створюваних об’єктів.

Він вирішує проблему створення різних продуктів, без прив’язки коду до конкретних класів продуктів.

```
interface Product {
    operation(): string;
}
```

* Клас Creator оголошує factory method, який повинен повертати об’єкт класу Product. 
Підкласи Creator зазвичай забезпечують реалізацію цього методу.

```
abstract class Creator {
    public abstract factoryMethod(): Product;
    public someOperation(): string {
        const product = this.factoryMethod();
        return 'Creator: The same creator's code has just worked with ${product.operation()}';
    }
}
```

 * Concrete Creators замінюють заводський метод, щоб змінити тип отриманого продукту.

```
class ConcreteCreator1 extends Creator {
     // В методі ми все ще використовується абстрактний тип продукту, 
     // навіть якщо конкретний продукт фактично повертається з методу. 
     // Таким чином Creator може залишатися незалежним від конкретних класів продуктів
    public factoryMethod(): Product {
        return new ConcreteProduct1();
    }
}
```
```
class ConcreteCreator2 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct2();
    }
}
```


 * Concrete Products забезпечують різні реалізації інтерфейсу продукту.
 ```
class ConcreteProduct1 implements Product {
    public operation(): string {
        return '{Result of the ConcreteProduct1}';
    }
}
```
```
class ConcreteProduct2 implements Product {
    public operation(): string {
        return '{Result of the ConcreteProduct2}';
    }
}
```

 * Клієнтський код працює з екземпляром конкретного творця і ми можемо передати йому будь-який підклас творця
 ```
function clientCode(creator: Creator) {
    // ...
    console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
    console.log(creator.someOperation());
    // ...
}
```
```
clientCode(new ConcreteCreator1());
clientCode(new ConcreteCreator2());
```
