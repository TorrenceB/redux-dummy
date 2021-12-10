import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";

// Action
const increment = () => ({
  type: "INCREMENT",
});

const decrement = () => ({
  type: "DECREMENT",
});

// Reducer
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
};

// Store --> Globalized State
let store = createStore(counter);

store.subscribe(() => {
  console.log(store.getState());
});

// Dispatch
store.dispatch(increment());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
