//Одинак (Singleton) — це породжувальний патерн проектування, який гарантує, що клас має лише один екземпляр, та надає глобальну точку доступу до нього
// ми його використовуємо коли має бути створений тільки 1 інстанс обєкти і багато точок доступу
// Наприклад: корзина інтернет магазину, карта клієнта


class Singleton {
    // перемінна в якій знаходиться інстанс класу
    private static instance: Singleton = null;
    // перемінна яка виконує якусь бізнес логіку
    private count: number = 0;

    //Конструктор  завжди повинен бути приватним, щоб запобігти прямих викликів з оператором `new`
    private constructor() { }

    // перевіряєм чи створений інстанс чи ні, створюєм
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    public someBusinessLogic() {
        this.count++;
    }

    public getCount(): number {
        return this.count;
    }
}

const singOne = Singleton.getInstance();
const singTwo = Singleton.getInstance();

console.log(singOne === singTwo); // получим один і той самиє обєкт

singOne.someBusinessLogic();
console.log(singTwo.getCount()) // получим 1 хоча і виклик із singTwo(але вони зсилаються на 1 обєкт)

