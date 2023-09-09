// Define the Redux-inspired store
function createStore(reducer) {
    let state = undefined;
    const listeners = [];
  
    const getState = () => state;
  
    const dispatch = (action) => {
      state = reducer(state, action);
      listeners.forEach((listener) => listener());
    };
  
    const subscribe = (listener) => {
      listeners.push(listener);
      return () => {
        const index = listeners.indexOf(listener);
        if (index !== -1) {
          listeners.splice(index, 1);
        }
      };
    };
  
    // Initialize the state with a default value (0 in this case)
    dispatch({ type: '@@INIT' });
  
    return { getState, dispatch, subscribe };
  }
  
  // Define a reducer function
  function counterReducer(state = 0, action) {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      case 'RESET':
        return 0;
      default:
        return state;
    }
  }
  
  // Create the store with the reducer
  const store = createStore(counterReducer);
  
  // Function to update the display when the state changes
  function render() {
    const countInput = document.querySelector('.counter__value');
    countInput.value = store.getState().toString();
  }
  
  // Subscribe to state changes
  const unsubscribe = store.subscribe(render);
  
  // Handle button clicks to increment, decrement, and reset the count
  document.querySelector('.counter__button[data-key="add"]').addEventListener('click', () => {
    store.dispatch({ type: 'INCREMENT' });
  });
  
  document.querySelector('.counter__button[data-key="subtract"]').addEventListener('click', () => {
    store.dispatch({ type: 'DECREMENT' });
  });
  
  document.querySelector('.reset').addEventListener('click', () => {
    // Show the reset overlay dialog
    document.querySelector('.reset-overlay').showModal();
  });
  
  document.querySelector('.reset-overlay').addEventListener('sl-initial-focus', (event) => {
    // Focus on the "Cancel" button initially
    event.target.querySelector('.sl-dialog__footer sl-button:not([data-key="confirm"])').focus();
  });
  
  document.querySelector('.reset-overlay sl-button[data-key="confirm"]').addEventListener('click', () => {
    store.dispatch({ type: 'RESET' });
    // Close the reset overlay dialog
    document.querySelector('.reset-overlay').close();
  });
  
  document.querySelector('.reset-overlay sl-button[data-key="cancel"]').addEventListener('click', () => {
    // Close the reset overlay dialog without resetting
    document.querySelector('.reset-overlay').close();
  });
  
  // Initial render
  render();
  