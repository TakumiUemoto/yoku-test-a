import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const API_URL = "https://catfact.ninja/fact";
const initialFact = "Cats have about 130,000 hairs per square inch (20,155 hairs per square centimeter).";

function App() {
  const [ text, setText ] = useState( initialFact );
  const [ isLoading, setLoading ] = useState('');

  async function handleClick() {
    setLoading(true);
    const response = await axios.get( API_URL );
    setText( response.data.fact );
    console.log( response.data.fact );
    setLoading(false);
  };

  

  return (
    <Container>
      {isLoading ? console.log('Text Loading...') : <Text>{text}</Text>}
      <button onClick={handleClick} disabled={isLoading}>
        更新
      </button>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  display: flex;
  font-size: 28px;
  width: 450px;
  line-height: 1.4;
`;

export default App;