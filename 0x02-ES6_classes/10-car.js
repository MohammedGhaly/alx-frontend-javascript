export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._color = color;
    this._motor = motor;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}
