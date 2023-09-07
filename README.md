# DYNAMIC-WEB-APPLICATIONS
# TALLY APP


# TALLY APP USING SHOELACE COMPONENT WITH JAVASCRIPT

This Folder/Project contains a JavaScript code that demonstrates how to manipulate a numeric value within specified bounds using HTML and JavaScript. The code controls a numeric input field and three buttons: "Add," "Subtract," and "Reset." The primary functionality includes:


Addition/Increment by 1: Clicking the "Add" button increments the numeric value by a predefined step amount until it reaches a maximum value, disabling the button at that point.

Subtraction/Decreement: Clicking the "Subtract" button decrements the numeric value by the same step amount until it reaches a minimum value, disabling the button accordingly.

Resetting: Clicking the "Reset" button resets the numeric value to a predefined default value and, if applicable, interacts with an element that has a show() method.


# TALLY APP CODE EXPLANATION

The JavaScript code is divided into three main event handlers:

subtractHandler: Handles the subtraction operation.
addHandler: Handles the addition operation.
resetHandler: Handles the reset operation.
Each handler performs the following steps:

Retrieves the current value of the numeric input field.
Updates the input field based on the operation (addition, subtraction, or reset).
Enables or disables the "Add" and "Subtract" buttons based on the current value and predefined limits.
Optionally interacts with an element that has a show() method when resetting.