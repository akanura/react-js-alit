import React from 'react';

export class Header extends React.Component {
  render() {
    return(
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <a href="#" className="navbar-brand">
              <img alt="Alit logo" src=""></img>
            </a>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Show Case</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}
