import './App.css';
import React, { useState } from 'react';

function App() {
  const [Weight, setweight] = useState(0);
  const [feet, setFeet] = useState(0);
  const [inches, setInches] = useState(0);

  const [BMI, setBMI] = useState('');
  const [message, setMessage] = useState('');

  // logic
let calcbmi = (e) => {
  e.preventDefault();

  if (Weight === 0 || (feet === 0 && inches === 0)) {
    alert('Please enter a valid weight and height');
  } else {
    let totalInches = parseInt(feet) * 12 + parseInt(inches);
    let heightInMeters = totalInches * 0.0254;
    let bmi = Weight / (heightInMeters * heightInMeters);
    setBMI(bmi.toFixed(1));
  
    if (bmi < 18.5) {
  setMessage('You are underweight');
} else if (bmi >= 18.5 && bmi < 25) {
  setMessage('You are healthy');
} else if (bmi >= 25 && bmi < 30) {
  setMessage('You are overweight');
} else {
  setMessage('You are obese');
}
}
};

  return (
    <div className="App">
      <h2>BMI Calculator</h2>
      <form onSubmit={calcbmi}>
        <div>
          <label>Weight (kg): </label>
          <input type="number" value={Weight} onChange={(e) => setweight(e.target.value)} />
        </div>
       <div>
          <label>Height:</label>
          <div style={{ display: 'flex', gap: '10px' }}>
       <input
            type="number"
            placeholder="Feet"
            value={feet}
            onChange={(e) => setFeet(e.target.value)}/>
       <input
            type="number"
            placeholder="Inches"
            value={inches}
            onChange={(e) => setInches(e.target.value)}/>
      </div>
      </div>
        <button type="submit">Calculate BMI</button>
      </form>

      <div>
        <h3>Your BMI is: {BMI}</h3>
        <p className={`message ${message.toLowerCase().split(' ')[2]}`}>{message}</p>
      </div>
    </div>
  );
}

export default App;
