//Shape class - implemented within Logo class
class Shape {
    render() {throw new Error("Shape not rendered");}
  }
   
//Individual shape classes extended in the Shape class
class Triangle extends Shape {
render() {return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;}
} 

class Square extends Shape {
render() {return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;}
}

class Circle extends Shape {
render() {return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;}
}
  
//Logo class  
class Logo {
constructor() {
    this.text = "";
    this.textColor = "";
    this.shape = null;
    this.shapeColor = "";
}

//Logo Attributes
setText(text) {this.text = text;}

setTextColor(color) {this.textColor = color;}

setShape(shape) {
    switch (shape) {
        case "triangle":
        this.shape = new Triangle();
        break;
        case "square":
        this.shape = new Square();
        break;
        case "circle":
        this.shape = new Circle();
        break;
        default:
        throw new Error("Invalid shape");
    }}

setShapeColor(color) {this.shapeColor = color;}

generateSVG() {
    if (!this.text || !this.textColor || !this.shape || !this.shapeColor) {
    throw new Error("Missing required logo information");}

    const shapeSVG = this.shape.render(this.shapeColor);
    const textSVG = `<text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;

    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${shapeSVG}${textSVG}</svg>`;
}}

module.exports = Logo;