// component
class ClientComponent {
  constructor(url) {
    this.url = url;
  }

  async getData() {
    const res = await fetch(this.url);
    const data = await res.json();
    return data;
  }
}

// decorator (actua como envoltorio)
class ClientDecorator {
  constructor(clientComponent) {
    this.clientComponent = clientComponent;
  }
  async getData() {
    return await this.clientComponent.getData();
  }
}

// decorator 1
class UpperCaseClientDecorator extends ClientDecorator {
  async getData() {
    const data = await super.getData();
    const newData = data.map((e) => {
      e.title = e.title.toUpperCase();
      return e;
    });
    return newData;
  }
}

// decorator 2
class HtmlClientDecorator extends ClientDecorator {
  async getData() {
    const data = await super.getData();
    const newData = data.map((e) => {
      e.title = `<h1>${e.title}</h1>`;
      e.thumbnailUrl = `<img src='${e.thumbnailUrl}'>`;
      return e;
    });
    return newData;
  }
}

// IIFE: Immediately invoked function expression
(async () => {
  const url = "https://jsonplaceholder.typicode.com/photos";
  // implement decorator
  const client = new ClientComponent(url);
  const data = await client.getData();
  console.log("👉️ data: ", data);
  // implement decorator1
  const upperClient = new UpperCaseClientDecorator(client);
  const data1 = await upperClient.getData();
  console.log("👉️ data1: ", data1);
  // implement decorator 2
  const htmlClient = new HtmlClientDecorator(upperClient);
  const data2 = await htmlClient.getData();
  console.log("👉️ data2: ", data2);
  divContent1.innerHTML = data2.reduce((ac, e) => {
    return ac + e.title + e.thumbnailUrl;
  }, "");
  // implement decorator 2 (another example)
  const htmlClient1 = new HtmlClientDecorator(client);
  const data3 = await htmlClient1.getData();
  divContent2.innerHTML = data3.reduce((ac, e) => {
    return ac + e.title + e.thumbnailUrl;
  }, "");
})();
