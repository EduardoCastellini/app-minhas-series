import React, { Component } from "react";

import Routes from "./routes";

class App extends Component {
  render() {
    return (
      <div className="container">
        <nav
          className="navbar navbar-default navbar-fixed-top"
          role="navigation"
        >
          <div className="container">
            <div className="navbar-header page-scroll">
              <a className="navbar-brand page-scroll" href="#page-top">
                <img src="images/logo.png" alt="Minhas Series" height="30" />
              </a>
            </div>
            <div className="collapse navbar-collapse navbar-ex1-collapse">
              <ul className="nav navbar-nav">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="new">Nova Série</a>
                </li>
                <li>
                  <a href="about">Sobre</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes />
      </div>
    );
  }
}
export default App;
