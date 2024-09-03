import { useEffect, useRef, useState } from "react";

const UseRef = () => {
    // -----------------------ExmapNo: 1 --
    const [number, setNumber] = useState(0);

    // ---------- Without useRef hooks ------------
    // const [count1, setCount1] = useState(0);


    const count2 = useRef(0);


    // ----------------------------ExamNo:3 --
    const userInput = useRef();
    const [name, setName] = useState('');

    const handleSubmit = () => {
        setName(userInput.current.value)
        console.log("User Input Value", userInput)
    }

    // ---------- Without useRef hooks ------------

    // useEffect(() => {
    //     setCount1(count1 + 1)
    // })

    // ------------with useRef hooks -------

    useEffect(() => {
        count2.current = count2.current + 1
    });

    // ------------with useRef hooks -------

    // ============================OR=================

    // const value = useRef(0);

    // const change = () => {
    //     value.current++
    //     console.log("value is ", value.current)
    // }

    return (
        <div className='bodyStyle'>
            <h1>UseRef Hooks</h1>


            <div>
                <button onClick={() => { setNumber(prev => prev + 1) }}>Increment</button>

                <p>Number: {number}</p>

                <button onClick={() => { setNumber(prev => prev - 1) }}>Decrement</button>

                {/* <h4>Component Rendar Counting1: {count1}</h4> */}

                <h4>Component Rendar Counting2: {count2.current}</h4>


            </div>



            <div>
                <h1> OR </h1>

                <input ref={userInput} type="text" />
                <br />
                <h3>Name: {name}</h3>

                <button onClick={handleSubmit}>Submit</button>
            </div>

            {/* =========================OR=========== */}

            {/* // ------------with useRef hooks ------- */}

            {/* useref hooks using  */}
            {/* <div>
                <button onClick={change}>Ckick</button>
            </div> */}
        </div>
    );
};

export default UseRef;