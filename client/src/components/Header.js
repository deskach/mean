import React from 'react';


export default class Header extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="left brand-logo">Emaily</a>
          <ul className="right hide-on-med-and-down">
            <li><a href="/">Login with Google</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}
