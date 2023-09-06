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

// Decorator
class ClientDecorator {
  constructor(clientComponent) {
    this.clientComponent = clientComponent;
  }

  async getData() {
    return await this.clientComponent.getData();
  }
}

// Decorator 1
class UpperCaseClientDecorator extends ClientDecorator {
  constructor(clientComponent) {
    super(clientComponent);
  }

  async getData() {
    const data = await super.getData();
    const newData = data.map((element) => {
      element.title = element.title.toUpperCase();
      return element;
    });

    return newData;
  }
}

class HtmlClientDecorator extends ClientDecorator {
  async getData() {
    const data = await super.getData();
    const newData = data.map((element) => {
      element.title = `<h1>${element.title}</h1>`;
      element.thumbnailUrl = `<img src="${element.thumbnailUrl}" />`;
      return element;
    });

    return newData;
  }
}

(async () => {
  const url = 'https://jsonplaceholder.typicode.com/photos';
  const client = new ClientComponent(url);
  // const data = await client.getData();
  // console.log(data);

  // Envoltorio a una funcionalidad independiente
  const upperClient = new UpperCaseClientDecorator(client);
  const data2 = await upperClient.getData();
  // console.log(data2);

  // Chain decorators functionality!
  const htmlClient = new HtmlClientDecorator(upperClient);
  const data3 = await htmlClient.getData();
  divContent1.innerHTML = data3.reduce((acum, element) => {
    return acum + element.title + element.thumbnailUrl;
  }, '');

  const htmlClient2 = new HtmlClientDecorator(client);
  const data4 = await htmlClient2.getData();
  divContent2.innerHTML = data4.reduce((acum, element) => {
    return acum + element.title + element.thumbnailUrl;
  }, '');


})();
