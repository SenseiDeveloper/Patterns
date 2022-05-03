//Посередник — це поведінковий патерн проектування, що дає змогу зменшити зв’язаність великої кількості класів між собою, 
//завдяки переміщенню цих зв’язків до одного класу-посередника.

//найпопулярнішим застосуванням Посередника в TypeScript-коді є зв’язок кількох компонентів GUI однієї програми.

/*
 Інтерфейс посередника оголошує метод, який використовується компонентами 
 для сповіщення посередника про різні події. 
*/
interface Mediator {
    notify(sender: object, event: string): void;
}

// Клас посередник який реалізує поведінку і взаємодію кількох класів
class MediatorsCreator implements Mediator {
    private component1: ComponentOne;
    private component2: ComponentTwo;

    constructor(cm1: ComponentOne, cm2: ComponentTwo){
        this.component1 = cm1;
        this.component1.setMediator(this);
        this.component2 = cm2;
        this.component2.setMediator(this);
    }

    notify(sender: any, event: any): void {
        if(event === 'action'){
            this.component2.methodOne();
        }

        if(event === 'create') {
            this.component1.methodOne();
        }
    }
}

//Базовий компонент забезпечує базову функціональність зберігання екземпляра посередника всередині об'єктів компонента.
class BaseComponent {
    protected mediator: Mediator;

    constructor(mediator?: Mediator) {
        this.mediator = mediator!;
    }

    public setMediator(mediator: Mediator): void {
        this.mediator = mediator;
    }
}

// звичайний клас з набором різних методів
class ComponentOne extends BaseComponent {
    public methodOne(): void {
        console.log('Виконуємо якусь роботу в methodOne(ComponentOne)');
        this.mediator.notify(this,'action');
    }
}

// звичайний клас з набором різних методів
class ComponentTwo extends BaseComponent {
    public methodOne(): void {
        console.log('Виконуємо якусь роботу в methodOne(ComponentTwo)');
    }

    public methodTwo(): void {
        console.log('Виконуємо якусь роботу в methodTwo(ComponentTwo)');
        this.mediator.notify(this,'create');
    }
}

const work1 = new ComponentOne();
const work2 = new ComponentTwo();
const med = new MediatorsCreator(work1, work2);

//work1.methodOne();
work2.methodTwo();

//Виконуємо якусь роботу в methodTwo(ComponentTwo)
//Виконуємо якусь роботу в methodOne(ComponentOne)
// Виконуємо якусь роботу в methodOne(ComponentTwo)