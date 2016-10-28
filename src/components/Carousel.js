import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import React, { Component } from 'react';

export default class Carosal extends Component {
    constructor()
    {
        super();
        this.state = {carosalIndex: 1};
        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this);
        this.onIconClick = this.onIconClick.bind(this);
    }
    prev() {
        if(this.state.carosalIndex > 1)
            this.setState({carosalIndex: this.state.carosalIndex - 1});
    }
    next() {
        if(this.state.carosalIndex < 3)
            this.setState({carosalIndex: this.state.carosalIndex + 1});
    }
    componentDidMount() {
        setInterval(this.incrementCounter.bind(this),5000);
    }
    incrementCounter()
    {
        if(this.state.carosalIndex < 3)
            this.setState({carosalIndex: this.state.carosalIndex + 1});
        else
            this.setState({carosalIndex: 1});
    }
    onIconClick(i) {
        this.setState({carosalIndex: i});
    }
  render() {
      const index = (this.state.carosalIndex <= 1 ? 1 : (this.state.carosalIndex >= 3 ? 3 : this.state.carosalIndex));
       
    return (
      <div className="container">
           <div id="myCarousel" className="carousel slide"> 
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" onClick={() => this.onIconClick(1)} className={(index == 1 ? "active" : "")}></li>
                    <li data-target="#myCarousel" onClick={() => this.onIconClick(2)} className={(index == 2 ? "active" : "")}></li>
                    <li data-target="#myCarousel" onClick={() => this.onIconClick(3)} className={(index == 3 ? "active" : "")}></li>
                </ol>

                <div className="carousel-inner" role="listbox">
                    <div className={(index == 1 ? "item active" : "item")}>
                        <img src="/img/IMG_1.jpg" alt="BabyShower1" width="460" height="345" />
                        <div className="carousel-caption">
                            <h3>Baby Shower</h3>
                            <p>Kalpana baby shower</p>
                        </div>
                    </div>

                    <div className={(index == 2 ? "item active" : "item")}>
                        <img src="/img/IMG_2.jpg" alt="BabyShower2" width="460" height="345" />
                        <div className="carousel-caption">
                            <h3>Disney</h3>
                            <p>Orlando Trip</p>
                        </div>
                    </div>

                    <div className={(index == 3 ? "item active" : "item")}>
                        <img src="/img/IMG_3.jpg" alt="BabyShower2" width="460" height="345" />
                        <div className="carousel-caption">
                            <h3>Kalpana baby shower family</h3>
                            <p>Kalpana baby shower family</p>
                        </div>
                    </div>
                </div>
                
                <a className="left carousel-control" onClick={this.prev} role="button" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>

                <a className="right carousel-control" onClick={this.next}  role="button" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
      </div>
    );
  }
}