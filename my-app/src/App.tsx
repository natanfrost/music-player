import React from 'react';
import RecommendedList from './components/RecommendedList/RecommendedList';
import './App.css';
import Head from './components/Head/Head';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">    
      <Head />        
      <RecommendedList coverPath="../assets/img/rhcp.jpg" alt="Red Hot Chili Peppers - By The Way"/>
      <Carousel title="New episodes"/>
      <Carousel title="For you!"/>
      <Footer />
    </div>
  );
}

export default App;
