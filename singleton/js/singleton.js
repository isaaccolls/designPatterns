class Singleton {
  static getInstance() {
    return Singleton.instance;
  }

  constructor() {
    console.log("👉️ constructor");
    this.random = Math.random();
    if (Singleton.instance) {
      console.log("👉️ ya existe");
      return Singleton.instance;
    }
    console.log("👉️ no existe, vamo a crearlo 🐢");
    Singleton.instance = this;
  }
}

const singleton = new Singleton();
const singleton1 = new Singleton();
const singleton3 = Singleton.getInstance();
console.log("👉️ singleton.random:", singleton.random);
console.log("👉️ singleton1.random:", singleton1.random);
console.log("👉️ singleton3.random:", singleton3.random);
console.log(singleton === singleton1);
