import { useEffect } from "react";
import { useState } from "react";

const UseEffect = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1)
        }, 1000);
    }, [count])

    return (
        <div className="bodyStyle">
            <h1>UseEffct Hooks</h1>

            <h2>Count Number is: {count}</h2>
        </div>
    );
};

export default UseEffect;