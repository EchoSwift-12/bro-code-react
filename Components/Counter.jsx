import React, { useState } from "react";

const Counter = () => {

    const [count, SetCount] = useState(0);

    const increment = () => {
        SetCount(count + 1);
    }
    const decrement = () => {
        SetCount(count - 1);

        if (count == 0) {
            SetCount(0);
            alert("Counter cannot be less than 0");
        }
    }
    
        const reset = () => {
            SetCount(0);
        }
        return (
            <div className="counter-container">
                <h1>Counter</h1>
                <p className="counter-display">{count}</p>
                <button className="counter-button" onClick={increment}>Increment</button>
                <button className="counter-button" onClick={decrement}>Decrement</button>
                <button className="counter-button" onClick={reset}>Reset</button>
            </div>
        )
    }
    export default Counter;