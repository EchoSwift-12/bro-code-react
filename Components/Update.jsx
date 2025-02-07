// Updater Function
// The updater function is a function form of setState or
//  a way to update state in React that depends on the previous state 
//  or props. Instead of directly passing a new value to setState, you pass it a function.
//   ex: setYear ( y => y + 1 )
//Why Do We Use It?
//Sometimes, updating state depends on the current or previous value of the state. 
//React updates state asynchronously, so if you directly
//use the current state, you might accidentally refer to an outdated value.

import React, { useState } from 'react';

const CounterUpdate = () => {

    const [counter, setCounter] = useState(0);

    const increment = () => {
        // uses the Pending state to calculate the next state
        // set functions do not trigger an update

        // Takes the PENDING state to calculate NEXT state.
        // React puts your updater function in a queue (waiting in line).
        // During the next render, it will call them in the same order.

        setCounter(count => count + 1);
        setCounter(count => count + 1);
        setCounter(count => count + 1);
    }
    const decrement = () => {
        setCounter( count => count - 1);
        setCounter( count => count - 1);
        setCounter( count => count - 1);
    }
    const reset = () => {
        // setCounter(count => count  = 0); no need
        setCounter(0);
    }

    return <>
        <div>
            <h1>{counter}</h1>
            <button onClick={increment} >+</button>
            <button onClick={decrement}> -</button>
            <button onClick={reset}> 0</button>
        </div>
    </>
}
export default CounterUpdate