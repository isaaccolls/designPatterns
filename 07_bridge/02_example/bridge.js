// RefinedAbstraction
class Editor {
  constructor(implementor) {
    this.implementor = implementor;
  }

  print(width, height, color) {
    this.implementor.setWidth(width);
    this.implementor.setHeight(height);
    this.implementor.setColor(color);
    this.implementor.print();
  }
}

// RefinedAbstraction extended from Editor with a clear plus
class EditorWithClear extends Editor {
  constructor(implementor) {
    super(implementor);
  }

  clear() {
    this.implementor.setWidth(0);
    this.implementor.setHeight(0);
    this.implementor.print();
  }
}

// ConcreteImplementor
class HtmlPainter {
  constructor(container) {
    this.container = container;
    this.width = "1px";
    this.height = "1px";
    this.color = "#000";
  }

  setWidth(width) {
    this.width = `${width}px`;
  }

  setHeight(height) {
    this.height = `${height}px`;
  }

  setColor(color) {
    this.color = color;
  }

  print() {
    this.container.innerHTML = `<div
      style="width: ${this.width}; height: ${this.height}; background: ${this.color}">
    </div>`;
  }
}

// ConcreteImplementor
class CanvasPainter {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.width = 1;
    this.height = 1;
    this.color = "#000";
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  setColor(color) {
    this.color = color;
  }

  print() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(0, 0, this.width, this.height);
  }
}

// test
//
// concreteImplementor1 👇
// const editor = new Editor(new HtmlPainter(content));
//
// concreteImplementor2 👇
// const editor = new Editor(new CanvasPainter(canvas));
//
// concreteImplementor1 extended from HtmlPainter with a clear plus 👇
// const editor = new EditorWithClear(new HtmlPainter(content));
//
// concreteImplementor2 extended from CanvasPainter with a clear plus 👇
const editor = new EditorWithClear(new CanvasPainter(canvas));

range.addEventListener("input", (e) => {
  const width = e.target.value;
  const height = e.target.value;
  const color = editorColor.value;
  editor.print(width, height, color);
});

editorColor.addEventListener("input", (e) => {
  const width = range.value;
  const height = range.value;
  const color = e.target.value;
  editor.print(width, height, color);
});

btn.addEventListener("click", () => {
  editor.clear();
});
