import React, { useState } from 'react';
import axios from 'axios';

function App() {
  // State variables initialize karte hain
  const [message, setMessage] = useState('');
  const [toxicityScore, setToxicityScore] = useState(null);
  const [userToken, setUserToken] = useState('');

  // Login karne ke liye function
  const handleLogin = async () => {
    const response = await axios.post('http://localhost:5000/login', {
      username: 'admin',
      password: 'password',
    });
    // Token ko state mein store karte hain
    setUserToken(response.data.token);
  };

  // Toxicity check karne ka function
  const checkToxicity = async () => {
    if (message.length === 0) {
      alert('Message ko enter karo!');
      return;
    }

    // Backend ko request bhejte hain toxicity score ke liye
    const response = await axios.post('http://localhost:5000/check-toxicity', { text: message });
    // Toxicity score ko state mein update karte hain
    setToxicityScore(response.data.toxicity_score);
  };

  return (
    <div className="App">
      <h1>Responsible Gaming</h1>
      <div>
        <textarea
          placeholder="Message type karo"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button onClick={checkToxicity}>Check Toxicity</button>
      {toxicityScore !== null && (
        <div>
          <h3>Toxicity Score: {toxicityScore}</h3>
        </div>
      )}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default App;
