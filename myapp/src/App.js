
import './App.css';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const App = () => {
  const [text, setText] = useState('');
  const fullText = "Hello, I am a typing animation!"; // The text you want to animate

  useEffect(() => {
    let isMounted = true;
    let currentText = '';
    let currentIndex = 0;

    const typeText = () => {
      if (isMounted && currentIndex < fullText.length) {
        currentText += fullText[currentIndex];
        setText(currentText);
        currentIndex++;
        setTimeout(typeText, 100); // Change typing speed here (milliseconds)
      }
    };

    typeText();

    return () => {
      isMounted = false;
    };
  }, [fullText]);

  return (
    <>
    <div className='outer'>
    <div className='inner'>
  <AnimatedText>{text}</AnimatedText>
  </div>
  </div>
  </>
  );
};

const AnimatedText = styled.div`
  font-size: 24px;
  font-weight: bold;
  
  color: #E1EFF1;
  text-shadow: 2px 2px 2px #6390AB,
               2px 2px 2px #486273,
               2px 2px 2px #D0E5F2;
`;

export default App;
