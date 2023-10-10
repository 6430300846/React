import React, { useRef, useState } from 'react';
 
const BmiCalculator = () => {
    const w_inputRef = useRef(null);
    const h_inputRef = useRef(null);
    const [bmi, setBmi] = useState(null);
 
    const calBmi = () => {
        let w = parseFloat(w_inputRef.current.value);
        let h = parseFloat(h_inputRef.current.value);
 
        if (isNaN(w) || isNaN(h)) {
            alert("Please enter valid weight and height.");
            return;
        }
 
        const calculatedBmi = w / Math.pow(h / 100, 2);
        setBmi(calculatedBmi);
    };
 
    const resetInputs = () => {
        w_inputRef.current.value = '';
        h_inputRef.current.value = '';
        setBmi(null);
    };
 
    return (
        <>
            <h3>BMI Calculator</h3>
            Weight : <input
                type="text"
                ref={w_inputRef}
                placeholder="Enter weight in kg."
            /> kg.<br />
            Height : <input
                type="text"
                ref={h_inputRef}
                placeholder="Enter height in cm."
            /> cm.<br />
            <button onClick={calBmi}>Calculate</button>
            <button onClick={resetInputs}>Reset</button><br />
            {bmi !== null && (
                <>
                    BMI value: {bmi.toFixed(2)}
                    <BmiText bmi={bmi} />
                </>
            )}
        </>
    );
};
 
const BmiText = ({ bmi }) => {
    if (bmi < 18.5)
        return <h1>UnderWeight</h1>;
    if (bmi > 30)
        return <h1>OverWeight</h1>;
    return <h1>Normal</h1>;
};
 
export default BmiCalculator;