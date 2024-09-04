import { useMemo, useState } from "react";

const UseMemo = () => {

    const [number, setNumber] = useState(0);
    const [value, setValue] = useState(0);

    const qubeFun = (input) => {
        console.log("Calculate Done")
        return Math.pow(input, 3)

    }

    // ------------without useMemo ------
    // const result = qubeFun(value);

    // ----------with useMemo----------
    const result = useMemo(() => {
        return qubeFun(value)
    }, [value]);


    return (
        <div className="bodyStyle">

            <input type="number" onChange={(e) => setValue(e.target.value)} />
            <h1>Power Number Is: {result}</h1>

            <h2>Count Number Is: {number}</h2>
            <button onClick={() => setNumber(number + 1)}>Count+</button>
        </div>
    );
};

export default UseMemo;