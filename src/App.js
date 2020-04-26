import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import SingleContent from './SingleContent/SingleContent';
import './App.scss';


const App = (props) => {
  const [heroData, setHeroData] = useState({
    hero: {header: 'Welcome to my React'},

  });

  const [singleContentData, setSingleContentData] = useState({
    singleContent: {header: 'Sup', content: 'Hello my name is React'}
  })


  const contentChangeHandler = (event) => {
    setSingleContentData({ hero: {header: 'Welcome to my React'},
      singleContent: {header: singleContentData.singleContent.header, content: event.target.value}
    })
  }
  return (
    <div className="App">
      <Hero header={heroData.hero.header}/>
      <SingleContent contentHeader={singleContentData.singleContent.header} singleContent={singleContentData.singleContent.content} userInput={contentChangeHandler}/>
    </div>
  );
}

export default App;
