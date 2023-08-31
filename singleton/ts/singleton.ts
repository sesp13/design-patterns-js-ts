class SingletonTs {
  private static instance: SingletonTs;
  public numberRandom: number;

  private constructor() {
    this.numberRandom = Math.random();
  }

  public static getInstance(): SingletonTs {
    if (!this.instance) {
      this.instance = new SingletonTs();
    }
    return SingletonTs.instance;
  }
}

const single1 = SingletonTs.getInstance();
const single2 = SingletonTs.getInstance();
console.log(single1.numberRandom);
console.log(single2.numberRandom);

single1.numberRandom = 7;
console.log(single1.numberRandom);
console.log(single2.numberRandom);