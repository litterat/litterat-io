import React from 'react';
import './App.css';
import { TwitterFollowButton } from 'react-twitter-embed';

var getOutboundLink = function(url) {
  window.gtag('event', 'click', {
    'event_category': 'outbound',
    'event_label': url,
    'transport_type': 'beacon',
    'event_callback': function(){document.location = url;}
  });
}

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
          href="#"
          onClick={()=> getOutboundLink('https://github.com/litterat/litterat')}
        >github.com/litterat/litterat</a>
        <p><TwitterFollowButton
          screenName={'litterat_io'}
        /></p>
      </header>
    </div>
  );
}

export default App;
