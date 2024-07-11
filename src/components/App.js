import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState('');

  const handleCalculate = () => {
    if (name1 === '' || name2 === '') {
      setResult('Please Enter valid input');
      return;
    }

    const cleanedName1 = name1.trim();
    const cleanedName2 = name2.trim();

    const remainingChars = (str1, str2) => {
      let chars = str1.split('');
      str2.split('').forEach(char => {
        const index = chars.indexOf(char);
        if (index !== -1) {
          chars.splice(index, 1);
        }
      });
      return chars.length;
    };

    const count = remainingChars(cleanedName1, cleanedName2) + remainingChars(cleanedName2, cleanedName1);
    const flamesIndex = count % 6;

    const flames = ['Friends', 'Love', 'Affection', 'Marriage', 'Enemy', 'Siblings'];
    setResult(flames[flamesIndex]);
  };

  const handleClear = () => {
    setName1('');
    setName2('');
    setResult('');
  };

  return (
    <div className="container">
      <h1>FLAMES Game</h1>
      <div className="form">
        <input
          type="text"
          data-testid="input1"
          placeholder="Enter first name"
          value={name1}
          onChange={(e) => setName1(e.target.value)}
        />
        <input
          type="text"
          data-testid="input2"
          placeholder="Enter second name"
          value={name2}
          onChange={(e) => setName2(e.target.value)}
        />
        <button
          data-testid="calculate_relationship"
          onClick={handleCalculate}
        >
          Calculate Relationship
        </button>
        <button
          data-testid="clear"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
      <h3 data-testid="answer">{result}</h3>
    </div>
  );
}

export default App;
