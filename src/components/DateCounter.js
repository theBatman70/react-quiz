import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    // Count Functions
    case "decrease":
      const decCount = state.count - state.step;
      return { ...state, count: decCount };
    case "increase":
      const incCount = state.count + state.step;
      return { ...state, count: incCount };
    case "setCount":
      return { ...state, count: action.payload };

    // Step Functions
    case "setStep":
      return { ...state, step: action.payload };

    // Reset
    case "reset":
      return { count: 0, step: 1 };

    default:
      throw new Error("Unknown action");
  }
}

function DateCounter() {
  const initialState = { count: 0, step: 1 };
  const [state, dispatch] = useReducer(reducer, initialState);

  // This mutates the date object.
  const date = new Date("jun 21 2027");
  date.setDate(date.getDate() + state.count);

  const decrease = function () {
    dispatch({ type: "decrease" });
  };

  const increase = function () {
    dispatch({ type: "increase" });
  };

  const setCount = function (e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const setStep = function (e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: "reset" });
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={state.step}
          onChange={setStep}
        />
        <span>{state.step}</span>
      </div>

      <div>
        <button onClick={decrease}>-</button>
        <input value={state.count} onChange={setCount} />
        <button onClick={increase}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
