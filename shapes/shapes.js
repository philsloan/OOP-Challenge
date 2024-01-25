class Triangle {
  constructor(characters, shapeColor, textColor) {
      this.characters = characters;
      this.shapeColor = shapeColor;
      this.textColor = textColor;
  }

  render() {
      // Implement SVG rendering logic for a triangle using this.characters, this.shapeColor, this.textColor
      return `<svg><!-- Triangle SVG content here --></svg>`;
  }
}

class Circle {
  constructor(characters, shapeColor, textColor) {
      this.characters = characters;
      this.shapeColor = shapeColor;
      this.textColor = textColor;
  }

  render() {
      // Implement SVG rendering logic for a circle using this.characters, this.shapeColor, this.textColor
      return `<svg><!-- Circle SVG content here --></svg>`;
  }
}

class Square {
  constructor(characters, shapeColor, textColor) {
      this.characters = characters;
      this.shapeColor = shapeColor;
      this.textColor = textColor;
  }

  render() {
      // Implement SVG rendering logic for a square using this.characters, this.shapeColor, this.textColor
      return `<svg><!-- Square SVG content here --></svg>`;
  }
}

// Example usage:
const triangle = new Triangle('ABC', 'red', 'white');
const circle = new Circle('123', 'blue', 'black');
const square = new Square('XYZ', 'green', 'yellow');

console.log(triangle.render());
console.log(circle.render());
console.log(square.render());














// class Triangle extends Shape {
//   constructor(data) {
//     super(data);
//   }
//   render() {
//     return `<polygon points="100 0, 0 ,0 50, 100" fill="${this.logoColor}" />`;
//   }
// }

// module.exports = Triangle;