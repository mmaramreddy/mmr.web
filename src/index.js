import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Header from './components/navigation/Header.js';
import Footer from './components/navigation/Footer.js';
import Carousel from './components/Carousel.js';

require('./favicon.ico');


export default class App extends Component {
  render() { 
    return (
      <div>
          <Header />
          <div className="content">
              <Carousel />
          </div>
          <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'))