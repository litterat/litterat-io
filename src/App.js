import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/** <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
         litterat.io
        </p>
	<p>
	 Litterat and Pep available on
	</p>
        <a
          className="App-link"
          href="https://github.com/litterat"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </header>
    </div>
  );
}

export default App;
