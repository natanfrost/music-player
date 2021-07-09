import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Configuration from './components/Configuration/Configuration';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import SplashLoad from './components/SplashLoad/SplashLoad';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  function handleLoadingChange(loading: boolean) {
    setTimeout(() => {
      setIsLoading(loading);
    }, 6000);
  }

  useEffect(() => {
    if (isLoading) {
      handleLoadingChange(false);
    }
  })

  return (
    <>
      {
        isLoading ?
          <SplashLoad />
          :
          <Router>
            <div className="App">
              <Switch>
                <Route path="/configuration" component={Configuration} />
                <Route path="/search" component={Search} />
                <Route path="/" component={Home} />
              </Switch>
              <Footer />
            </div>
          </Router>
      }
    </>
  );
}

export default App;
