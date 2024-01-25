class Shape {
  constructor(characters, shapeColor, textColor) {
    this.characters = characters;
    this.shapeColor = shapeColor;
    this.textColor = textColor;
  }
}

// This is the Triangle
class Triangle extends Shape {
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
      <text x="150" y="145" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>
    </svg>`;
  }
}

// This is the... you guessed it the circle!
class Circle extends Shape {
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>
    </svg>`;
  }
}

// This is the Square!!! YippEE!!
class Square extends Shape {
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="${this.shapeColor}"/>
      <text x="100" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>
    </svg>`;
  }
}


// Allows the moduel to be exported
module.exports = { Triangle, Square, Circle };
