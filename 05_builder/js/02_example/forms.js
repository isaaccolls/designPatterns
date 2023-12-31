class Form {
  constructor(controls, action) {
    this.controls = controls;
    this.action = action;
  }

  getContent() {
    return `
      <form method="post" action="${this.action}">
        ${this.controls.reduce((ac, c) => {
          return (
            ac +
            `<div>
            ${this.getLabel(c)}
            ${this.getInput(c)}
          </div>`
          );
        }, "")}
        <button type="submit">Enviar!</button>
      </form>
    `;
  }

  getLabel(control) {
    return `<label>${control.text}</label>`;
  }

  getInput(control) {
    return `
      <input type="${control.type}"
        id="${control.name}"
        name="${control.name}"
      />
    `;
  }
}

class FormBuilder {
  constructor() {
    this.reset();
  }

  reset() {
    this.action = "";
    this.controls = [];
  }

  setAction(action) {
    this.action = action;
    return this;
  }

  setText(name, text) {
    this.controls.push({
      name: name,
      text: text,
      type: "text",
    });
    return this;
  }

  setEmail(name, text) {
    this.controls.push({
      name: name,
      text: text,
      type: "email",
    });
    return this;
  }

  setCheckBox(name, text) {
    this.controls.push({
      name: name,
      text: text,
      type: "checkbox",
    });
    return this;
  }

  setColor(name, text) {
    this.controls.push({
      name: name,
      text: text,
      type: "color",
    });
    return this;
  }

  build() {
    const frm = new Form(this.controls, this.action);
    this.reset();
    return frm;
  }
}

const formBuilder = new FormBuilder();
const formPeople = formBuilder
  .setAction("add.php")
  .setText("firstName", "Nombre")
  .setText("lastName", "Apellido")
  .setCheckBox("drinker", "eres bebedor?")
  .setColor("favoriteColor", "color favorito?")
  .build();
console.log("👉 formPeople:", formPeople);
form1.innerHTML = formPeople.getContent();
//
const formEmail = formBuilder
  .setAction("send.php")
  .setText("name", "Nombre")
  .setEmail("email", "correo electronico")
  .build();
console.log("👉 formEmail:", formEmail);
form2.innerHTML = formEmail.getContent();
