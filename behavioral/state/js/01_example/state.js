class DocumentContext {
  constructor() {
    this.content = "";
    this.state = new BlankState();
  }

  setState(state) {
    this.state = state;
  }

  write(text) {
    this.state.write(this, text);
  }
}

class BlankState {
  write(documentContext, text) {
    documentContext.content = text;
    documentContext.setState(new WithContentState());
  }
}

class WithContentState {
  write(documentContext, text) {
    documentContext.content += " " + text;
  }
}

class ApprovedState {
  write(documentContext, text) {
    console.error("🚫 Documento aprobado ya no se modifica");
  }
}

const doc = new DocumentContext();
console.log("🍹 state", doc.state);
console.log("🍹 content", doc.content);
//
console.log("🐢 vamo a escribi");
doc.write("Hello");
console.log("🍹 state", doc.state);
console.log("🍹 content", doc.content);
//
console.log("🐢 vamo a escribi +");
doc.write("World");
doc.write("🤙");
console.log("🍹 state", doc.state);
console.log("🍹 content", doc.content);
//
console.log("🐢 vamo a aproba");
doc.setState(new ApprovedState());
console.log("🍹 state", doc.state);
console.log("🍹 content", doc.content);
//
console.log("🐢 vamo a escribi +");
doc.write("otra cosa que no deberia aparecer");
console.log("🍹 state", doc.state);
console.log("🍹 content", doc.content);
//
console.log("🐢 vamo a desaproba");
doc.setState(new WithContentState());
console.log("🍹 state", doc.state);
console.log("🍹 content", doc.content);
//
console.log("🐢 vamo a escribi +");
doc.write("como que no se puede?! xD");
console.log("🍹 state", doc.state);
console.log("🍹 content", doc.content);
//
console.log("end 🔥");
