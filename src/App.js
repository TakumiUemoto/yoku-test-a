import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = "https://catfact.ninja/fact";
const initialFact = "Cats have about 130,000 hairs per square inch (20,155 hairs per square centimeter).";

export default function App() {
  const [text, setText] = useState(initialFact);
  const [isLoading, setLoading] = useState('');

  async function handleClick() {
    setLoading(true);
    const response = await axios.get(API_URL);
    setText(response.data.fact);
    console.log(response.data.fact);
    setLoading(false);
  }

  

  return (
    <div>
      {isLoading ? console.log('Text Loading...') : <h2>{text}</h2>}
      <button onClick={handleClick} disabled={isLoading}>
        更新
      </button>
    </div>
  );
}