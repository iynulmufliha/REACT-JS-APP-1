import React, { useState } from 'react';
function CompareNumbers() {
  const [x, setX] = useState('');
  const [result, setResult] = useState('');
  const handleCompute = () => {
    const numX = parseFloat(x);
    if (numX % 2 === 0) {
      setResult(`x(${numX}) is even`);
    } else {
      setResult(`x(${numX}) is odd`);}  };
  return (
    <div><input type="number" value={x} onChange={(e) => setX(e.target.value)}placeholder="enter x"/>
      <button onClick={handleCompute}>Compute</button>
      <p>{result}</p> </div>);}
export default CompareNumbers;
