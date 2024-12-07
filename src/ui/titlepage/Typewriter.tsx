import React, { useEffect, useState } from 'react';

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const phrases = [
  "Software Engineering",
  "Data Science & Analytics",
  "Frontend Development",
  "Backend Development",
  "Machine Learning",
  "Development & Operations",
  "Classical Piano",
];

const Typewriter: React.FC = () => {
  const [text, setText] = useState('');
  const [curPhraseIndex, setCurPhraseIndex] = useState(0);

  useEffect(() => {
    const writeLoop = async () => {
      for (let j = 0; j < phrases.length; j++) {
        const curWord = phrases[j];

        for (let i = 0; i <= curWord.length; i++) {
          setText(curWord.substring(0, i));
          await sleep(100);
        }

        await sleep(1000);

        for (let i = curWord.length; i >= 0; i--) {
          setText(curWord.substring(0, i));
          await sleep(100);
        }

        await sleep(500);
      }
      
      setCurPhraseIndex(prevIndex => (prevIndex + 1) % phrases.length);
    };

    writeLoop();
  }, [curPhraseIndex]);

  return <span>{text}</span>;
};

export default Typewriter;
