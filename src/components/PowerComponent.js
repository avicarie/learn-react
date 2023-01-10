import React, { useState } from 'react';

function PowerComponent() {
    const [result, setResult] = useState(null);
    const [a, setA] = useState(null);
    const [b, setB] = useState(null);

    function pow(base, expo) {
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
            <input
                id='b'
                value={b}
                onChange={(e) => {
                    setB(parseInt(e.target.value));
                }}
                type='number'
                placeholder='B'
            />
            <button
                onClick={(e) => {
                    e.preventDefault();
                    setResult(pow(a, b));
                }}
            >
                Calulate A to the power of B
            </button>
            <span>Result: {result}</span>
        </div>
    );
}

export default PowerComponent;
