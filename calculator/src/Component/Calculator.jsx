import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('');

  const appendToDisplay = (value) => {
    setDisplayValue((prevValue) => prevValue + value);
  };

  const clearDisplay = () => {
    setDisplayValue('');
  };

  const calculate = () => {
    try {
      const result = eval(displayValue);
      setDisplayValue(displayValue + ' = ' + result); 
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  const deleteLastChar = () => {
    setDisplayValue((prevValue) => {
      if (prevValue.length > 0) {
        return prevValue.slice(0, -1); 
      }
      return prevValue;
    });
  };

  return (
    <>
      <div id='calculator'>
        <input id='display' value={displayValue} readOnly />
        <div id='key'>
          <button onClick={() => appendToDisplay('+ ')} className='operator-btn'>+</button>
          <button onClick={() => appendToDisplay('7 ')}>7</button>
          <button onClick={() => appendToDisplay('8 ')}>8</button>
          <button onClick={() => appendToDisplay('9 ')}>9</button>
          <button onClick={() => appendToDisplay('- ')} className='operator-btn'>-</button>
          <button onClick={() => appendToDisplay('4')}>4</button>
          <button onClick={() => appendToDisplay('5 ')}>5</button>
          <button onClick={() => appendToDisplay('6')}>6</button>
          <button onClick={() => appendToDisplay('* ')} className='operator-btn'>*</button>
          <button onClick={() => appendToDisplay('1')}>1</button>
          <button onClick={() => appendToDisplay('2 ')}>2</button>
          <button onClick={() => appendToDisplay('3')}>3</button>
          <button onClick={() => appendToDisplay('/ ')} className='operator-btn'>/</button>
          <button onClick={() => appendToDisplay('0')}>0</button>
          <button onClick={() => appendToDisplay('.')}>.</button>
          <button onClick={calculate}>=</button>
          <button onClick={clearDisplay} className='operator-btn'>C</button>
          <button onClick={deleteLastChar} className='operator-btn'>⌫</button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
