import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Properties from "./pages/Properties";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/about" component={About}/>
          <Route exact path="/blog" component={Blog}/>
          <Route exact path="/properties" component={Properties}/>
          <Route exact path="/contact" component={Contact}/>
        </div>
      </Router>

    );
  }
}

export default App;
