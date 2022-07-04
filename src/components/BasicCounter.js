import React, { useState } from "react";
import "../App.css";

function BasicCounter() {
  const [var1, setVar1] = useState(Number(1));
  const [var2, setVar2] = useState(Number(1));

  function value_changer(choice) {
    if (choice === "plus_var1") setVar1(var1 + 1);
    else if (choice === "minus_var1") setVar1(var1 - 1);
    else if (choice === "plus_var2") setVar2(var2 + 1);
    else setVar2(var2 - 1);
  }

  function operation(choice) {
    let display = document.getElementById("result");
    display.style.display = "block";
    if (choice === "plus") {
      let result = var1 + var2;
      display.innerHTML = `Addition of ${var1} and ${var2} is: ${result}`;
    } else if (choice === "minus") {
      if (var2 > var1) {
        let result = var2 - var1;
        display.innerHTML = `Subtraction of ${var1} from ${var2} is: ${result}`;
      } else {
        let result = var1 - var2;
        display.innerHTML = `Subtraction of ${var2} from ${var1} is: ${result}`;
      }
    } else if (choice === "multiply") {
      let result = var1 * var2;
      display.innerHTML = `Multiplication of ${var1} by ${var2} is: ${result}`;
    } else {
      if (var1 === 0 || var2 === 0) {
        display.innerHTML = `Cannot perform division with 0`;
      } else {
        let result = var1 / var2;
        let res = Math.round(result * 100) / 100;
        display.innerHTML = `Divison of ${var1} by ${var2} is: ${res}`;
      }
    }
  }

  return (
    <>
      <div className="main">
        <h1>Welcome to Counter Calculator</h1>
        <br />
        <div className="buttons">
          <button
            className="btn"
            onClick={(event) => value_changer("plus_var1")}
          >
            Increment
          </button>
          <h4 style={{ padding: "25px" }}> Value of variable 1 is: {var1}</h4>
          <button
            className="btn"
            onClick={(event) => value_changer("minus_var1")}
            disabled={var1 <= 0}
          >
            Decrement
          </button>
        </div>
        <br />
        <div className="buttons">
          <button
            className="btn"
            onClick={(event) => value_changer("plus_var2")}
          >
            Increment
          </button>
          <h4 style={{ padding: "25px" }}> Value of variable 2 is: {var2}</h4>
          <button
            className="btn"
            onClick={(event) => value_changer("minus_var2")}
            disabled={var2 <= 0}
          >
            Decrement
          </button>
        </div>
        <div
          className="operationButtons"
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <button className="op_btn" onClick={(event) => operation("plus")}>
            Add
          </button>
          <button className="op_btn" onClick={(event) => operation("minus")}>
            Subtract
          </button>
          <button className="op_btn" onClick={(event) => operation("multiply")}>
            Multiply
          </button>
          <button className="op_btn" onClick={(event) => operation("divide")}>
            Divide
          </button>
        </div>
        <div id="result" className="result"></div>
      </div>
    </>
  );
}

export default BasicCounter;
