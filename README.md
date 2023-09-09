# DYNAMIC-WEB-APPLICATIONS
# TALLY APP


# TALLY APP USING SHOELACE COMPONENT WITH JAVASCRIPT FOR DWA10

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


# TALLY APP CODE EXPLANATION FOR DWA11

Scenario 1: Initial state

Given no interactions have been performed yet
When the "getState" method is run
And the result is logged to the console
And the browser console is open
Then the state should show a count of 0
In this scenario, the code initializes the state with a default value of 0 (dispatch({ type: '@@INIT' });). When you run the "getState" method (store.getState()) and log it to the console, it should indeed show a count of 0. The code initializes the state correctly.

Scenario 2: Increment the counter by one

Given no interactions have been performed yet
When an "ADD" action is dispatched
And another "ADD" action is dispatched
And the browser console is open
Then the state should show a count of 2
In this scenario, when you click the "Add" button (store.dispatch({ type: 'INCREMENT' });), it dispatches "ADD" actions, which increment the counter by 1 each time. Therefore, when the "getState" method is called and logged to the console, the state should show a count of 2.

Scenario 3: Decrement the counter by one

Given the current count in the state is 2
When a "SUBTRACT" action is dispatched
And the browser console is open
Then the state should display a count of 1
In this scenario, when the "getState" method is called, the state is expected to be 2 initially. When you click the "Subtract" button (store.dispatch({ type: 'DECREMENT' });), it dispatches a "DECREMENT" action, which decrements the counter by 1. Therefore, the state should indeed display a count of 1.

Scenario 4: Resetting the Tally Counter

Given the current count in the state is 1
When a "RESET" action is dispatched
And the browser console is open
Then the state should display a count of 0
In this scenario, when you click the "Reset" button (store.dispatch({ type: 'RESET' });), it dispatches a "RESET" action, which resets the counter to 0. Therefore, the state should display a count of 0 after the "RESET" action is dispatched.

