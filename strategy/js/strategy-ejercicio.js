const data = [
  {
    name: 'Erdinger pinkantus',
    country: 'Alemania',
    info: 'Erdinger es una cerverza de alemania',
    img: 'https://erginger.com',
  },
  {
    name: 'Corona',
    country: 'Mexico',
    info: 'Corona es una cerverza de Mexico',
    img: 'https://corona-beer.com',
  },
  {
    name: 'Aguila',
    country: 'Colombia',
    info: 'Erdinger es una cerverza de Colombia',
    img: 'https://cerveza-aguila.com',
  },
];

class InfoContext {
  constructor(strategy, data, element) {
    this.setStrategy(strategy);
    this.data = data;
    this.element = element;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  show() {
    this.strategy.show(this.data, this.element);
  }
}

class ListStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((acumulator, beer) => {
      return (
        acumulator +
        `
        <div>
          <h2>${beer.name}</h2>
          <p>${beer.country}</p>
        </div>
        <hr />
      `
      );
    }, '');
  }
}

class DetailedListStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((acumulator, beer) => {
      return (
        acumulator +
        `
        <div>
          <h2>${beer.name}</h2>
          <p>${beer.country}</p>
          <p>${beer.info}</p>
        </div>
        <hr />
      `
      );
    }, '');
  }
}

class OnlyNameStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((acumulator, beer) => {
      return (
        acumulator +
        `
        <div>
          <h2>${beer.name}</h2>
        </div>
        <hr />
      `
      );
    }, '');
  }
}


const strategies = [new ListStrategy(), new DetailedListStrategy(), new OnlyNameStrategy()];

// Content viene del html por id content
const info = new InfoContext(strategies[0], data, content);
info.show();

// Y con esto cambiamos la información de forma dinámica
slcOptions.addEventListener('change', (event) => {
  const option = event.target.value;
  info.setStrategy(strategies[option]);
  info.show();
});
