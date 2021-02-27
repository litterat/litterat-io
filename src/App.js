import React from 'react';
import './App.css';
import { TwitterFollowButton } from 'react-twitter-embed';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {<img src="litterat-logo.jpg" className="App-logo" alt="logo" />} 
	<p>
	 Litterat serialization
	</p>
        <a
          className="App-link"
          href="https://github.com/litterat"
          target="_blank"
          rel="noopener noreferrer"
        >github.com/litterat</a>
        <p><TwitterFollowButton
          screenName={'litterat_io'}
        /></p>
      </header>
    </div>
  );
}

export default App;
