// calculator.js
const readline = require("readline");
const Calc = require("./calc");

const calc = new Calc();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const menu = `
Choose an operation:
1. Add
2. Subtract
3. Multiply
4. Divide
5. Exit
`;

const performOperation = (choice, num1, num2) => {
  switch (choice) {
    case "1":
      return calc.add(num1, num2);break;
    case "2":
      return calc.subtract(num1, num2);break;
    case "3":
      return calc.multiply(num1, num2);break;
    case "4":
      return calc.divide(num1, num2);break;
    default:
      throw new Error("Invalid operation.");break;
  }
};

const startCalculator = () => {
  console.log(menu);
  rl.question("Enter your choice: ", (choice) => {
    if (choice === "5") {
      console.log("Exiting calculator. Goodbye!");
      rl.close();
      return;
    }

    rl.question("Enter the first number: ", (firstInput) => {
      const num1 = parseFloat(firstInput);

      rl.question("Enter the second number: ", (secondInput) => {
        const num2 = parseFloat(secondInput);

        try {
          const result = performOperation(choice, num1, num2);
          console.log(`Result: ${result}`);
        } catch (error) {
          console.log(`Error: ${error.message}`);
        }

        startCalculator(); // Restart the calculator
      });
    });
  });
};

startCalculator();
