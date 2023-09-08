class Person {
  constructor(
    private name: string,
    private lastName: string,
    private age: number,
    private country: string,
    private city: string,
    private hobbies: string[]
  ) {}

  getFullName() {
    return `${this.name} ${this.lastName}`;
  }
}

interface PersonBuilder {
  name: string;
  lastName: string;
  age: number;
  country: string;
  city: string;
  hobbies: string[];
  setName(name: string): PersonBuilder;
  setLastName(lastName: string): PersonBuilder;
  setAge(age: number): PersonBuilder;
  setCountry(country: string): PersonBuilder;
  addHobby(hobby: string): PersonBuilder;
  build(): Person;
}

class NormalPersonBuilder implements PersonBuilder {
  name: string;
  lastName: string;
  age: number;
  country: string;
  city: string;
  hobbies: string[];

  constructor() {
    this.name = '';
    this.lastName = '';
    this.age = 0;
    this.country = '';
    this.city = '';
    this.hobbies = [];
  }

  reset(): void {
    this.name = '';
    this.lastName = '';
    this.age = 0;
    this.country = '';
    this.city = '';
    this.hobbies = [];
  }

  setName(name: string): PersonBuilder {
    this.name = name;
    return this;
  }

  setLastName(lastName: string): PersonBuilder {
    this.lastName = lastName;
    return this;
  }

  setAge(age: number): PersonBuilder {
    this.age = age;
    return this;
  }

  setCountry(country: string): PersonBuilder {
    this.country = country;
    return this;
  }

  addHobby(hobby: string): PersonBuilder {
    this.hobbies.push(hobby);
    return this;
  }

  build(): Person {
    const person = new Person(
      this.name,
      this.lastName,
      this.age,
      this.country,
      this.city,
      this.hobbies
    );
    this.reset();
    return person;
  }
}

class PersonDirector {
  constructor(private personBuilder: PersonBuilder) {}

  setPersonBuilder(builder: PersonBuilder) {
    this.personBuilder = builder;
  }

  createSimplePerson(name: string, lastName: string) {
    this.personBuilder.setName(name).setLastName(lastName);
  }
}

const personBuilder = new NormalPersonBuilder();

const hector = personBuilder
  .setName('Héctor')
  .setLastName('De leon')
  .addHobby('comer')
  .addHobby('Dormir')
  .build();

console.log(hector);

const juan = personBuilder
  .setName('Juan')
  .setCountry('Mexico')
  .addHobby('Cerveza')
  .build();

console.log(juan);

const director = new PersonDirector(personBuilder);
director.createSimplePerson('Ximena', "Perez")
const ximena = personBuilder.build();
console.log(ximena);