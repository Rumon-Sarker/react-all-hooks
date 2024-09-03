import { useState } from 'react';

const UseState = () => {


    const [count, setCount] = useState(0);

    const IncrementHandaleChange = () => {
        setCount(count + 1)
    }

    const DecrementHandaleChange = () => {
        setCount(count - 1)
    }


    return (
        <div className='bodyStyle'>
            <h1>UseState Hooks</h1>
            <p> Count Number: {count}</p>
            <button onClick={IncrementHandaleChange}>Increment</button>
            <br />
            <br />
            <button onClick={DecrementHandaleChange}>Decrement</button>

        </div>
    );
};

export default UseState;