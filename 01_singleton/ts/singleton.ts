// recordar:
// valores estaticos: pertenecen a la clase
// valores no estaticos: pertenecen a instancia del objeto
class SingletonTs {
  private static instance: SingletonTs;
  public random: number;

  private constructor() {
    this.random = Math.random();
  }

  public static getInstance(): SingletonTs {
    if (!this.instance) {
      this.instance = new SingletonTs();
    }
    return this.instance;
  }
}

// no se puede instanciar de la siguente manera
// porq el constructor es privado 👇️
// const singleton = new SingletonTs();
const singleton = SingletonTs.getInstance();
const singleton1 = SingletonTs.getInstance();
console.log("singleton:", singleton.random);
console.log("singleton1:", singleton1.random);
singleton.random = 420;
console.log("singleton:", singleton.random);
console.log("singleton1:", singleton1.random);
