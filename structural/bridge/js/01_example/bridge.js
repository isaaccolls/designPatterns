// RefinedAbstraction
class EncoderTextAbstraction {
  constructor(encoder) {
    this.encoder = encoder;
  }

  encode(str) {
    return this.encoder.encode(str);
  }

  decode(str) {
    return this.encoder.decode(str);
  }
}

// ConcreteImplementor
class Base64EncoderImplementor {
  encode(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
  }

  decode(str) {
    return decodeURIComponent(escape(window.atob(str)));
  }
}

// ConcreteImplementor
class HTMLEncoderImplementor {
  encode(str) {
    return str.split(".").reduce((ac, e) => {
      return ac + `<p>${e.trim()}</p>`;
    }, "");
  }

  decode(str) {
    return str.split("</p>").reduce((ac, e) => {
      return e !== "" ? ac + e.replace("<p>", "") + ". " : ac + "";
    }, "");
  }
}

// test
const encoder1 = new EncoderTextAbstraction(new Base64EncoderImplementor());
console.log("🐢 encode duck", encoder1.encode("duck"));
console.log("🐢 decode ZHVjaw==", encoder1.decode("ZHVjaw=="));
//
const encoder2 = new EncoderTextAbstraction(new HTMLEncoderImplementor());
const testText =
  "Esto es un texto de prueba. Otro parrafo de prueba. Y de final uno mas";
console.log("👉 test html", encoder2.encode(testText));
const testHtmlText =
  "<p>Esto es un texto de prueba</p><p>Otro parrafo de prueba</p><p>Y de final uno mas</p>";
console.log("👉 to regular text", encoder2.decode(testHtmlText));
