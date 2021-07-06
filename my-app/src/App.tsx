import React from 'react';
import RecommendedList from './components/RecommendedList/RecommendedList';
import './App.css';
import Head from './components/Head/Head';

function App() {
  return (
    <div className="App">    
      <Head />  
      <RecommendedList coverPath="../assets/img/rhcp.jpg" alt="Red Hot Chili Peppers - By The Way"/>
    </div>
  );
}

export default App;
