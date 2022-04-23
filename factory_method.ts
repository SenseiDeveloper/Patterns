//Factory Method(Фабричний метод)
//породжувальний патерн проектування, який визначає загальний інтерфейс для створення об’єктів у суперкласі,
// дозволяючи підкласам змінювати тип створюваних об’єктів.

//Він вирішує проблему створення різних продуктів, без прив’язки коду до конкретних класів продуктів.

interface Product {
    getProducts(): Array<{name: string}>;
}

//створимо інтерфейс для фабричного метода
abstract class Factory {
    public abstract createProducts(type: number): Product;
 }


 //будь який продук
class ProductOne implements Product {
    getProducts() {
        return [
            {
                name: 'one'
            }
        ]
    }
}

//будь який продук
class ProductTwo implements Product {
    getProducts() {
        return [
            {
                name: 'two'
            }
        ]
    }
}

//фабрика яка дає зможу в залежності від умов повертати
// продукти різних типів не змінюючи базовий інтерфейс
class ProductFactory extends Factory {

    public createProducts(type: number): Product {
        if(type === 1) {
            return new ProductOne();
        } else {
            return new ProductTwo();
        }
    }
}

const creator : Factory = new ProductFactory();
const myProduct : Product = creator.createProducts(1);

console.log(myProduct.getProducts()); // [{name: 'one'}]
