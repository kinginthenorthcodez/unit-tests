class Calculator {
  constructor(a,b){
    this.x = a;
    this.y = b;
  }

  add = () => {
    return this.x + this.y;
  }

  sub = () => {
    return this.x - this.y;
  }
  mult = () => {
    return this.x * this.y;
  }
  div = () => {
    return this.x / this.y;
  }

};

module.exports = Calculator;