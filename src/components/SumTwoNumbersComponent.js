import React, { useState } from 'react';
function SumTwoNumbersComponent() {
    const [sum, setSum] = useState(null);
    const [a, setA] = useState(null);
    const [b, setB] = useState(null);

    function sumTwoNumbers(first, second) {
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
                    setSum(sumTwoNumbers(a, b));
                }}
            >
                Sum numbers
            </button>
            <span>Sum: {sum}</span>
        </div>
    );
}

export default SumTwoNumbersComponent;
