import React from 'react';
import RecommendedList from './components/RecommendedList/RecommendedList';
import './App.css';
import Head from './components/Head/Head';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
import Configuration from './components/Configuration/Configuration';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>          
          <Route path="/configuration" component={Configuration} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
      {/* <Head />
      <RecommendedList coverPath="../assets/img/rhcp.jpg" alt="Red Hot Chili Peppers - By The Way" />
      <Carousel title="New episodes" />
      <Carousel title="For you!" /> */}
       {/* <Configuration />   */}
      <Footer />
    </div>
  );
}

export default App;
