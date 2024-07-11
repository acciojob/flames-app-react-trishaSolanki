import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
const[name,setName] = useState('');
const[name1,setName1] = useState('');
const[result,setResult] = useState('');

const handleCalculat = ()  => {
 if(name === '' || name1 === ''){
  setResult('Please Enter valid input');
  return;
 }
 const cleanedName = name.trim();
 const cleanedName1= name1.trim();

 const remainingChars = (str1, str2) => {
  let chars = str1.split('');
  str2.split('').forEach(char =>{
    const index = chars.indexOf(char);
    if(index !== -1){
      chars.splice(index,1);
    }
  });
  return chars.length;
 };
 const count = remainingChars (cleanedName,cleanedName1) + remainingChars(cleanedName1 , cleanedName);
 const flamesIndex = count % 6;

 const flames = ['Friends', 'Love', 'Affection', 'Marriage', 'Enemy', 'Siblings'];
    setResult(flames[flamesIndex]);
  };
  const handleClear = () => {
    setName('');
    setName1('');
    setResult('');
  };

  return (
   <div className="container">
   <div className="form">
     <input type="text" 
     data-testid="input1"
     value={name} 
     onChange={(e) =>setName(e.target.value)}/>

     <input type="text" 
     value={name1} 
     data-testid="input2"
     onChange={(e) =>setName1(e.target.value)}/>

     <button 
     data-testid="Calculate_relationship"
     onClick={handleCalculat}>Calculate Relationship Future
     </button>

     <button 
     data-testid="answer"
     onClick={handleClear}>
     clear
     </button>

   </div>
    <h3>{result}</h3>
   </div>
  )
}


export default App;