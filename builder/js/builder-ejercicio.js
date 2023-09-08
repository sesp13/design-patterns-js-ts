class Form {
  constructor(controls, action) {
    this.controls = controls;
    this.action = action;
  }

  getContent() {
    return `<form method="post" action="${this.action}"> 
      ${this.controls.reduce(
        (acum, element) =>
          acum +
          `<div>
            ${this.getLabel(element)}
            ${this.getInput(element)}
        </div>
        `,
        ''
      )}
      <input type="submit" value="Enviar" />
    </form>
    `;
  }

  getLabel(control) {
    return `<label>${control.text}</label>`;
  }

  getInput(control) {
    return `<input 
      type="${control.type}" 
      id="${control.name}" 
      name="${control.name}"
    />`;
  }
}

class FormBuilder {
  constructor() {
    this.reset();
  }

  reset() {
    this.controls = [];
    this.action = '';
  }

  setAction(action) {
    this.action = action;
    return this;
  }

  setText(name, text) {
    this.controls.push({ name, text, type: 'text' });
    return this;
  }

  setEmail(name, text) {
    this.controls.push({ name, text, type: 'email' });
    return this;
  }

  setCheckbox(name, text) {
    this.controls.push({ name, text, type: 'checkbox' });
    return this;
  }

  setColor(name, text) {
    this.controls.push({ name, text, type: 'color' });
    return this;
  }

  build() {
    const form = new Form(this.controls, this.action);
    this.reset();
    return form;
  }
}

class FormDirector {
  constructor(formBuilder) {
    this.setBuilder(formBuilder);
  }

  setBuilder(formBuilder) {
    this.formBuilder = formBuilder;
  }

  createPeopleForm() {
    this.formBuilder.reset();
    this.formBuilder
      .setText('firstName', 'Name')
      .setText('lastName', 'Last Name');
  }

  createContactForm() {
    this.formBuilder.reset();
    this.formBuilder
      .setText('name', 'Nombre del interesado')
      .setEmail('email', 'Tu correo')
      .setText('message', 'Tu mensaje');
  }
}

const fb = new FormBuilder();

const personForm = fb
  .setAction('add.php')
  .setText('firstName', 'Name')
  .setText('lastName', 'Last Name')
  .setEmail('email', 'Email')
  .setCheckbox('drinker', 'Eres bebedor')
  .setColor('color', 'Color')
  .build();

console.log(personForm);

form1.innerHTML = personForm.getContent();

const contactForm = fb
  .setAction('contact.php')
  .setText('name', 'Name')
  .setEmail('email', 'Your Email')
  .build();

form2.innerHTML = contactForm.getContent();

const director = new FormDirector(fb);
director.createPeopleForm();
form3.innerHTML = fb.build().getContent();

// Replica facilmente la misma receta
director.createPeopleForm();
form4.innerHTML = fb.build().getContent();

director.createContactForm();
form5.innerHTML = fb.build().getContent();
