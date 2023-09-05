class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(
      (currentOb) => currentOb !== observer
    );
  }

  notify(data) {
    this.observers.forEach((observer) => {
      observer.refresh(data);
    });
  }
}

class Observer {
  constructor(fn) {
    this.fn = fn;
  }

  refresh(data) {
    this.fn(data);
  }
}

const subject = new Subject();
const observer1 = new Observer((data) =>
  console.log(`Hola soy el obs 1 ${data}`)
);
const observer2 = new Observer((data) => {
  div1.innerHTML = data;
});
const observer3 = new Observer((data) => {
  div2.innerHTML = data.split('').reverse().join('');
});

subject.subscribe(observer1);
subject.subscribe(observer2);
subject.subscribe(observer3);

subject.unsubscribe(observer1)

function change() {
  subject.notify(myText.value);
}
