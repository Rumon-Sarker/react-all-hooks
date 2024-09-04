import { useCallback, useState } from "react";
import Navbar from "../Navbar";


const UseCallback = () => {
    const [value, setValue] = useState(0);

    // without useCallback Hooks
    // const number = () => {

    // }

    // with useCallback Hooks
    const number = useCallback(() => {

    }, [])

    return (
        <div className="bodyStyle">
            <h1> thsis is UseCallback </h1>
            <Navbar number={number} />

            <h1>Value Is: {value}</h1>
            <button onClick={() => setValue(value + 1)}>+</button>


        </div>
    );
};

export default UseCallback;