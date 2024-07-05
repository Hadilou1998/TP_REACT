import React from'react';
import './App.css';

const displayName = event => alert(event.target.id);
const emojis = [
  {
    emoji: '😀',
    name: 'grinning face'
  },
  {
    emoji: '🎉',
    name: 'party poppers'
  },
  {
    emoji: '💃',
    name: 'woman dancing'
  }
];

function App() {
  const greeting = "greeting";
  const displayAction = false;
  return (
    <div className="container">
      <h1 id={greeting}>Hello World</h1>
      {displayAction && <p>I am writing JSX</p>}
      <ul>
        {
          emojis.map(emoji => (
            <li key={emoji.name} onClick={displayName}>
              {emoji.emoji} {emoji.name}
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
