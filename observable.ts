//Observer(Спостерігач)
//поведінковий патерн проектування, який створює механізм підписки, 
//що дає змогу одним об’єктам стежити й реагувати на події, які відбуваються в інших об’єктах.

//базовий інтерфейс Observer
interface Observer {
  subscribe(observer: any): void;
  unsubcribe(observer: any): void;
  notify(): void;
}

// інтерфейс від якого ми імплементуємось і слухаєм зміни
interface IObserver {
  update(eventListener: any);
}

//клас який реалізує патерн
class Counter implements Observer {
  count: number = 0;
  observers: IObserver[] = [];

  subscribe(observer: IObserver): void {
      this.observers.push(observer);
  };

  unsubcribe(observer: IObserver): void {
      const observerIndex = this.observers.indexOf(observer);
      if (observerIndex === -1) {
          return console.log('Subject: Nonexistent observer.');
      }

      this.observers.splice(observerIndex, 1);
  };

  notify(): void {
      /* this = {
          state: ...,
          observers: ...
      }*/

      for (const observer of this.observers) {
          observer.update(this)
        }
  };

  public counterPlus(value: number): void {
      this.count = this.count + value;
      this.notify();
  }

  public counterMinus(value: number): void {
      this.count = this.count - value;
      this.notify();
  }
}

//інший клаc який слухає клас Counter і в методі update получає дані
class SomeCounter implements IObserver {
  update(eventListener: any) {
      console.log(eventListener.count, 'Count')
  }
}


const count = new Counter();
const smCounter = new SomeCounter();

count.subscribe(smCounter);
count.counterPlus(2); // 2
count.counterPlus(10); //12

count.unsubcribe(smCounter);
count.counterPlus(10); // ми не получимо дані , так як відписались
