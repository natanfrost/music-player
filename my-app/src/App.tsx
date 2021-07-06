import React from 'react';
import RecommendedList from './components/RecommendedList/RecommendedList';
import './App.css';
import Head from './components/Head/Head';
import Carousel from './components/Carousel/Carousel';

function App() {
  return (
    <div className="App">    
      <Head />        
      <RecommendedList coverPath="../assets/img/rhcp.jpg" alt="Red Hot Chili Peppers - By The Way"/>
      <Carousel />
    </div>
  );
}

export default App;
