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

class ItemsSubject extends Subject {
  constructor() {
    super();
    this.data = [];
  }

  add(item) {
    this.data.push(item);
    this.notify(this.data);
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

class HtmlElementObserver {
  constructor(element) {
    this.element = element;
  }

  refresh(data) {
    this.element.innerHTML = data.reduce((acum, e) => {
      return acum + `<p>${e}</p>`;
    }, '');
  }
}

const items = new ItemsSubject();
const div1Observer = new HtmlElementObserver(div1);
const div2Observer = new HtmlElementObserver(div2);
const observer1 = new Observer((data) => {
  div3.innerHTML = data.length;
});

items.subscribe(div1Observer);
items.subscribe(div2Observer);
items.subscribe(observer1);

function add() {
  const name = txtName.value;
  items.add(name);
}
