const fs = require("fs");
const inquirer = require("inquirer");
const { Triangle, Circle, Square, Logo } = require("./lib/logo.js");

async function main() {
  try {
    const answers = await inquirer.prompt([
      // Prompt for text input
      {
        type: "input",
        name: "text",
        message: "Enter up to three characters for the text: ",
      },
      // Prompt for text color input
      {
        type: "input",
        name: "textColor",
        message: "Enter the text color (keyword or hexadecimal): ",
      },
      // Prompt for shape selection
      {
        type: "list",
        name: "shapeSelection",
        message: "Select a shape (Triangle, Square, Circle):",
        choices: ["Triangle", "Circle", "Square"],
      },
      // Prompt for shape color input
      {
        type: "input",
        name: "shapeColor",
        message: "Enter the shape color (keyword or hexadecimal): ",
      },
    ]);

    // Create an instance of the selected shape class
    let shape;
    switch (answers.shapeSelection) {
      case "Triangle":
        shape = new Triangle();
        break;
      case "Circle":
        shape = new Circle();
        break;
      case "Square":
        shape = new Square();
        break;
      default:
        console.log("Invalid shape selection");
        return;
    }

    const newLogo = new Logo();
    newLogo.setText(answers.text);
    newLogo.setTextColor(answers.textColor);
    newLogo.setShape(answers.shapeSelection);
    newLogo.setShapeColor(answers.shapeColor);

    // Do something with the shape instance
    console.log(shape);

    // Generate the SVG content
    // const svgContent = newLogo.generateSVG();
     const svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shape.render()}</svg>`;

    // Write the SVG content to the file
    fs.writeFileSync("logo.svg", svgContent);

    // Print the output message
    console.log("Generated logo.svg");
  } catch (error) {
    console.error(error);
  }
}

main();
