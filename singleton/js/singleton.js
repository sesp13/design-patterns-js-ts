class Singleton {
  static getInstance() {
    return Singleton.instance;
  }

  constructor() {
    this.random = Math.random();
    if (Singleton.instance) {
      return Singleton.instance;
    } else {
      Singleton.instance = this;
    }
  }
}

const singleton = new Singleton();
const othersingle = new Singleton();
const single3 = Singleton.getInstance();
console.log(singleton.random);
console.log(othersingle.random);
console.log(single3.random);
console.log(singleton === othersingle);
console.log(single3 === othersingle);
