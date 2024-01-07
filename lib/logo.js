//Shape class - implemented within Logo class
class Shape {

    constructor() {
        this.color = "";
      }
    
      setColor(c) {
        this.color = c;
      }
}
   
//Individual shape classes extended in the Shape class
class Triangle extends Shape {
render() {return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;}
} 

class Square extends Shape {
render() {return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;}
}

class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }  
  }
  
class Logo {
    constructor() {
      this.text = "";
      this.textColor = "";
      this.shape = "";
      this.shapeColor = "";
    }
  
    setText(text) {
      this.text = text;
    }
  
    setTextColor(color) {
      this.textColor = color;
    }
  
    setShape(shape) {
      switch (shape) {
        case "Triangle":
          this.shape = new Triangle();
          break;
        case "Square":
          this.shape = new Square();
          break;
        case "Circle":
          this.shape = new Circle();
          break;
        default:
          throw new Error("Invalid shape");
      }
    }
  
    setShapeColor(color) {
      this.shapeColor = color;
    }

    generateSVG() {
        if (!this.text || !this.textColor || !this.shape || !this.shapeColor) {
          throw new Error("Missing required logo information");
        }
      
        // Set the colors for both text and shape before rendering
        this.shape.setTextColor(this.textColor);
        this.shape.setColor(this.shapeColor);
      
        const shapeSVG = this.shape.render();
        const textSVG = `<text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
      
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${shapeSVG}${textSVG}</svg>`;
      }}

  
  module.exports = {
    Triangle,
    Circle,
    Square,
    Logo
  };