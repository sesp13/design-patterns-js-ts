interface IObserver<T> {
  refresh(value: T): void;
}

interface ISubject<T> {
  observers: IObserver<T>[];
  subscribe(observer: IObserver<T>): void;
  unsubscribe(observer: IObserver<T>): void;
  notify(value: T): void;
}

class Subject<T> implements ISubject<T> {
  observers: IObserver<T>[];

  constructor() {
    this.observers = [];
  }

  subscribe(observer: IObserver<T>): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: IObserver<T>): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(value: T): void {
    this.observers.forEach((obs) => obs.refresh(value));
  }
}

class Observer<T> implements IObserver<T> {
  private fn: (value: T) => void;

  constructor(fn: (value: T) => void) {
    this.fn = fn;
  }

  refresh(value: T): void {
    this.fn(value);
  }
}

const subject = new Subject<number>();
const obs1 = new Observer((n) => {
  console.log(`Hello ${n}`);
});
const obs2 = new Observer((n) => {
  console.log(`Hi obs2 ${n}`);
});

subject.subscribe(obs1);
subject.subscribe(obs2);
subject.notify(1.2);
subject.notify(30);

const subjectString = new Subject<string>();
const obs1str = new Observer((s: string) => {
  console.log(s.toUpperCase());
})
const obs2str = new Observer((s: string) => {
  console.log(s.toLowerCase());
})

subjectString.subscribe(obs1str)
subjectString.subscribe(obs2str)
subjectString.notify("Hoeroifh");
subjectString.notify("ioejfie");