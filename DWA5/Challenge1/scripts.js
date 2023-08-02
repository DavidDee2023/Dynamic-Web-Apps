// scripts.js

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const dividendInput = event.target.querySelector('input[name="dividend"]');
  const dividerInput = event.target.querySelector('input[name="divider"]');

  const dividendValue = parseFloat(dividendInput.value);
  const dividerValue = parseFloat(dividerInput.value);

  /**responsible for handling the scenario where the provided input values are not valid numbers. 
   
  * It displays an error message to the user, logs an error message to the console, 
  * and stops the execution of the division calculation to prevent potential issues from occurring due to invalid inputs. 
  * */
  if (isNaN(dividendValue) || isNaN(dividerValue)) {
    result.innerText = "Something critical went wrong. Please reload the page. “Division not performed. Both values are required in inputs. Try again”."; 
    console.error("Invalid input provided.");
    return;
  }

 /**
 * This code should now handle the cases of attempting to divide by zero or a negative number and display appropriate error messages for each case.
 */
  if (dividerValue === 0 || dividerValue < 0 ) {
    result.innerText = "Division not performed. Invalid number provided. Try again";
    console.error("Attempted to divide by zero.");
    return;
  }
 
  /**
   * this code snippet is checking if both dividendValue and dividerValue are whole numbers, 
   * and if not, it displays an error message, logs an error to the console, and prevents further execution of the calculation.
   */
  if (!Number.isInteger(dividendValue) || !Number.isInteger(dividerValue)) {
    result.innerText = "Division not performed. Both values must be whole numbers.";
    console.error("Non-integer values provided.");
    return;
  }

  /**
   * this code snippet is responsible for ensuring that the calculated division result is finite and handling the scenario where it might not be. 
   * It displays an error message to the user, logs an error to the console, 
   * and stops the execution of the division calculation if the result is not a finite number.
   */

  const quotient = Math.floor(dividendValue / dividerValue); //The `Math.floor()` function is used to perform integer division. It divides dividendValue by dividerValue and then rounds the result down to the nearest
  if (!Number.isFinite(quotient)) {
    result.innerText = "Something critical went wrong. Please reload the page.";
    console.error("Division result is not finite.");
    return;
  }

  result.innerText = quotient;
});
