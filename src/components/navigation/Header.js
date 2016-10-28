import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import React, { Component } from 'react';

export default class Header extends Component {
    constructor()
    {
        super();
        this.state = {isMenuOpen: false};
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    toggleMenu() {
        this.setState({isMenuOpen: !this.state.isMenuOpen});
    }
  render() {
    const menuClass = this.state.isMenuOpen ? "navbar-collapse" : "collapse navbar-collapse"; 
    return (
      <div className="header">
            <header>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <button type="button" className="navbar-toggle"  onClick={this.toggleMenu}>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span> 
                        </button>
                        <Link className="navbar-brand" to="/" >Mahi</Link>
                        </div>
                        <div className={menuClass} id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li><Link className="active" to="/" >Home</Link></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                        </ul>
                        </div>
  </div>
</nav>
            </header>
      </div>
    );
  }
}