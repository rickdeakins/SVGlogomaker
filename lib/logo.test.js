class Shape {
    constructor(shapeType) {
      this.shapeType = shapeType;
      this.color = "black"; // Set default color to black
    }
  
    setColor(colorType) {
      this.color = colorType;
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super('circle');
      this.radius = radius;
    }
  
    logoShape() {
      return this.shapeType;
    }
  
    logoColor() {
      return this.color;
    }
  }
  
  class Square extends Shape {
    constructor(sideLength) {
      super('square');
      this.sideLength = sideLength;
    }
  
    logoShape() {
      return this.shapeType;
    }
  
    logoColor() {
      return this.color;
    }
  }
  
  class Triangle extends Shape {
    constructor(base, height) {
      super('triangle');
      this.base = base;
      this.height = height;
    }
  
    logoShape() {
      return this.shapeType;
    }
  
    logoColor() {
      return this.color;
    }
  }
  
  describe("logoShape", function () {
    it("selects the logo shape", function () {
      const shape = new Circle(10);
      const color = "blue";
      shape.setColor(color);
      expect(shape.logoShape()).toBe('circle');
      expect(shape.logoColor()).toBe(color);
    });
  });