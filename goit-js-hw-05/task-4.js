console.log('task-4.js');
alert('task-4.js, Смотрим в консоль');

class StringBuilder {
  constructor(str) {
    this._value = str;
  }
  get value() {
    return this._value;
  }
  append(str) {
    this._value += str;
  }
  prepend(str) {
    const preStr = str + this._value;
    this._value = preStr;
  }
  pad(str) {
    const preStr = str + this._value;
    this._value = preStr + str;
  }
}

const builder = new StringBuilder('.');
console.log(builder.value);

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
