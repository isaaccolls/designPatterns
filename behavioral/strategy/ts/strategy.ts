// contrato
interface Strategy {
  login(user: string, password: string): boolean;
}

// contexto
class LoginContext {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
    // this.setStrategy(strategy);
  }

  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  login(user: string, password: string): boolean {
    return this.strategy.login(user, password);
  }
}

// estrategia
class LoginDbStrategy implements Strategy {
  login(user: string, password: string): boolean {
    console.log("vamo a la db 🐢");
    if (user === "admin" && password === "1234") {
      return true;
    }
    return false;
  }
}

// estrategia_1
class LoginServiceStrategy implements Strategy {
  login(user: string, password: string): boolean {
    console.log("vamo a un servicio de 3ero 🐢");
    if (user === "admin" && password === "1234") {
      return true;
    }
    return false;
  }
}

// estrategia_2
class LoginGoogleStrategy implements Strategy {
  login(user: string, password: string): boolean {
    console.log("vamo a gugol 🐢");
    if (user === "admin" && password === "1234") {
      return true;
    }
    return false;
  }
}

// implementacion
const auth = new LoginContext(new LoginDbStrategy());
const resLoginDbStrategyLogin = auth.login("admin", "1234");
console.log("resLoginDbStrategyLogin:", resLoginDbStrategyLogin);
// switch strategy
auth.setStrategy(new LoginServiceStrategy());
const resLoginServiceStrategyLogin = auth.login("admin", "1234");
console.log("resLoginServiceStrategyLogin:", resLoginServiceStrategyLogin);
// switch strategy
auth.setStrategy(new LoginGoogleStrategy());
const resLoginGoogleStrategyLogin = auth.login("admin", "12345");
console.log("resLoginGoogleStrategyLogin:", resLoginGoogleStrategyLogin);
