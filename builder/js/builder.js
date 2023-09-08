class Person {
  constructor(name, lastname, age, country, city, hobbies) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.country = country;
    this.city = city;
    this.hobbies = hobbies;
  }

  getFullName() {
    return `${this.name} ${this.lastname}`;
  }
}

class PersonBuilder {
  constructor() {
    this.reset();
  }

  reset() {
    this.name = '';
    this.lastname = '';
    this.age = 0;
    this.country = '';
    this.city = '';
    this.hobbies = [];
  }

  setName(name) {
    this.name = name;
    return this;
  }

  setLastName(lastname) {
    this.lastname = lastname;
    return this;
  }

  setAge(age) {
    this.age = age;
    return this;
  }

  setCountry(country) {
    this.country = country;
    return this;
  }

  setCity(city) {
    this.city = city;
    return this;
  }

  addHobby(hobby) {
    this.hobbies.push(hobby);
    return this;
  }

  build() {
    const person = new Person(
      this.name,
      this.lastname,
      this.age,
      this.country,
      this.city,
      this.hobbies
    );
    this.reset();
    return person;
  }
}

const personBuilder = new PersonBuilder();
const santiago = personBuilder
  .setName('Santiago')
  .setLastName('Espinosa')
  .addHobby('Running')
  .addHobby('Sleep')
  .build();
console.log(santiago);

const juan = personBuilder.setName('John').setCountry('Thailand').build();
console.log(juan);
