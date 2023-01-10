import React, { useState } from 'react';

function FactorialComponent() {
    const [a, setA] = useState(null);
    const [factorial, setFactorial] = useState(null);

    function calculateFactorial(number) {
        return 0;
    }

    return (
        <div className='form'>
            <input
                id='a'
                value={a}
                onChange={(e) => {
                    setA(parseInt(e.target.value));
                }}
                type='number'
                placeholder='A'
            />
            <button
                onClick={(e) => {
                    e.preventDefault();
                    setFactorial(calculateFactorial(a));
                }}
            >
                Calculate factorial
            </button>
            <span>Factorial: {factorial}</span>
        </div>
    );
}

export default FactorialComponent;
