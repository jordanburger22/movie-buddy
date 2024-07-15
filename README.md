What is State in React?

State is a built-in object used to contain data or information about the component.
State is managed within the component and can change over time.
React re-renders the component whenever the state changes, providing an interactive and dynamic user experience.


Key Features of State

Mutable: Unlike props, state can change.
Local: State is local to the component and not accessible to other components.
Triggers Re-render: Any update to the state triggers a re-render of the component to reflect the new state.


The useState Hook
useState is a Hook that allows you to add state to functional components.
stateVariable: The current value of state.
setStateFunction: A function that updates the state.
Array Destructuring with useState
useState returns an array with two elements.

Updating State
Use the state update function to change the state.
State updates are asynchronous and batched for performance.

Using Previous State

When updating state based on the previous state, pass a function to the state update function.

setCount(prevCount => prevCount + 1);
Example Usage
Initial State

const [message, setMessage] = useState("Hello, World!");

Updating State

const updateMessage = () => {
  setMessage("Hello, React!");
};

Rendering State

return (
  <div>
    <p>{message}</p>
    <button onClick={updateMessage}>Update Message</button>
  </div>
);


Benefits of Using State
Encapsulated: Keeps data management within the component.
Reactive UI: Automatically re-renders the UI to reflect the latest state.
Declarative: Makes it easier to reason about the UI and state changes.