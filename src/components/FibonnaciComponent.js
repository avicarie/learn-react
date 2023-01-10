import React, { useState } from 'react';

function FibbonaciComponent() {
    const [n, setN] = useState(null);
    const [factorial, setFactorial] = useState(null);

    function calculateFibbonaci(number) {
        return 0;
    }

    return (
        <div className='form'>
            <input
                id='N'
                value={n}
                onChange={(e) => {
                    setN(parseInt(e.target.value));
                }}
                type='number'
                placeholder='N'
            />
            <button
                onClick={(e) => {
                    e.preventDefault();
                    setFactorial(calculateFibbonaci(n));
                }}
            >
                Calculate N'th fibbonaci number
            </button>
            <span>N'th fibbonaci number: {factorial}</span>
        </div>
    );
}

export default FibbonaciComponent;
