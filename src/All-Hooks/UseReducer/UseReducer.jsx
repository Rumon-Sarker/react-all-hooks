import React, { useReducer } from 'react';


const initialStae = 0;

const reducer = (state, action) => {
    switch (action) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        default:
            return state
    }
}

const UseReducer = () => {
    const [count, dispach] = useReducer(reducer, initialStae);
    return (
        <div className='bodyStyle' >
            <h1> UseReducer Hooks</h1>
            <br />

            <button onClick={() => dispach("increment")}>Increment</button>
            <h1>value:{count}</h1>
            <button onClick={() => dispach("decrement")}>Decrement</button>
        </div>
    );
};

export default UseReducer;