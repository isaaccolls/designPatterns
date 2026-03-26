// Interface State
interface DoorState {
  open(door: Door): string;
  close(door: Door): string;
  lock(door: Door): string;
}

// ConcretStateA
class ClosedState implements DoorState {
  open(door: Door): string {
    door.setState(new OpenState());
    return "Abriendo la puerta.";
  }

  close(door: Door): string {
    return "La puerta ya esta cerrada.";
  }

  lock(door: Door): string {
    door.setState(new LockedState());
    return "Bloqueando la puerta.";
  }
}

// ConcretStateB
class OpenState implements DoorState {
  open(door: Door): string {
    return "La puerta ya esta abierta.";
  }

  close(door: Door): string {
    door.setState(new ClosedState());
    return "Cerrando la puerta.";
  }

  lock(door: Door): string {
    return "No se puede bloquear una puerta con la puerta abierta.";
  }
}

// ConcretStateC
class LockedState implements DoorState {
  open(door: Door): string {
    return "No se puede abrir una puerta bloqueada.";
  }

  close(door: Door): string {
    door.setState(new LockedState());
    return "La puerta ya esta cerrada y bloqueada.";
  }

  lock(door: Door): string {
    door.setState(new LockedState());
    return "La puerta ya esta bloqueada.";
  }
}

// Context
class Door {
  private state: DoorState;

  constructor() {
    this.state = new ClosedState();
  }

  setState(state: DoorState) {
    this.state = state;
  }

  open(): string {
    return this.state.open(this);
  }

  close(): string {
    return this.state.close(this);
  }

  lock(): string {
    return this.state.lock(this);
  }
}

// Example
const door = new Door();
console.log("-> al intentar abrir:", door.open());
console.log("-> al intentar bloquear:", door.lock());
console.log("-> al intentar cerrar:", door.close());
console.log("-> al intentar bloquear:", door.lock());
console.log("-> al intentar abrir:", door.open());
console.log("-> al intentar bloquear:", door.lock());
console.log("-> al intentar cerrar:", door.close());
console.log("-> al intentar bloquear:", door.lock());
console.log("-> al intentar abrir:", door.open());
console.log("-> al intentar bloquear:", door.lock());
