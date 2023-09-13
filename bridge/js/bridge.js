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

class Base64EncoderImplementor {
  encode(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
  }

  decode(str) {
    return decodeURIComponent(escape(window.atob(str)));
  }
}

class HtmlEncoderImplementor {
  encode(str) {
    return str
      .split('.')
      .reduce((ac, element) => ac + `<p>${element.trim()}</p>`, '');
  }

  decode(str) {
    return str
      .split('</p>')
      .reduce(
        (ac, element) =>
          element !== '' ? ac + element.replace('<p>', '') + '. ' : ac + '',
        ''
      );
  }
}

const encoder1 = new EncoderTextAbstraction(new Base64EncoderImplementor());
console.log(encoder1.encode('puto'));
console.log(encoder1.decode('cHV0bw=='));

const encoder2 = new EncoderTextAbstraction(new HtmlEncoderImplementor());
console.log(
  encoder2.encode('Esto es un texto. Y aqui comienza otro. y uno más')
);
console.log(
  encoder2.decode(
    '<p>Esto es un texto</p><p>Y aqui comienza otro</p><p>y uno más</p>'
  )
);
