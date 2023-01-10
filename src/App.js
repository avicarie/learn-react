import './App.css';
import React from 'react';
import SumTwoNumbersComponent from './components/SumTwoNumbersComponent';
import PowerComponent from './components/PowerComponent';
import FactorialComponent from './components/FactorialComponent';
import FibbonaciComponent from './components/FibonnaciComponent';

function App() {
    return (
        <React.Fragment>
            <SumTwoNumbersComponent />
            <FactorialComponent />
            <PowerComponent />
            <FibbonaciComponent />
        </React.Fragment>
    );
}
export default App;
