import { useState } from 'react';
import { FaCalculator } from 'react-icons/fa';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleAddition = () => {
    setResult(Number(num1) + Number(num2));
  };

  const handleSubtraction = () => {
    setResult(Number(num1) - Number(num2));
  };

  const handleMultiplication = () => {
    setResult(Number(num1) * Number(num2));
  };

  const handleDivision = () => {
    setResult(Number(num1) / Number(num2));
  };

  return (
    <div className="calculator-container">
      <div className="calculator-header">
        <FaCalculator className="calculator-icon" />
        <h2>Calculator</h2>
      </div>
      <div className="calculator-body">
        <input
          type="number"
          className="calculator-input"
          placeholder="Enter number 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          className="calculator-input"
          placeholder="Enter number 2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <div className="calculator-buttons">
          <button onClick={handleAddition}>+</button>
          <button onClick={handleSubtraction}>-</button>
          <button onClick={handleMultiplication}>*</button>
          <button onClick={handleDivision}>/</button>
        </div>
        {result && <div className="calculator-result">Result: {result}</div>}
      </div>
    </div>
  );
};

export default Calculator;
