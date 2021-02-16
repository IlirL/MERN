import React from 'react'
import './App.css';

import Header from './Header';
import SwipeButtons from './SwipeButtons';
import TinderCards from './TinderCards';

function App() {
  return (
    <div className="app">
      {/* <h1>Tinder clone</h1> */}
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
