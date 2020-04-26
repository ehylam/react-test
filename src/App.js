import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import './App.css';




const App = (props) => {
  const [siteData, setSiteData] = useState({
    header: 'Welcome to my React'
  })


  return (
    <div className="App">
      <Hero header={siteData.header}/>
    </div>
  );
}

export default App;
