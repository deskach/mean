import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from "../actions";
import { Link } from "react-router-dom";


class Header extends React.Component {
  renderLogin() {
    switch (this.props.auth) {
      case null:
        return '';
      case false:
        return <a href={'/auth/google'}>Login with Google</a>;
      default:
        return <a href={'/api/logout'}>Logout</a>;
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={this.props.auth ? '/surveys' : '/'} className="left brand-logo">
            Emaily
          </Link>
          <ul className="right hide-on-med-and-down">
            <li>{this.renderLogin()}</li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapState2Props = ({ auth }) => ({ auth });

export default connect(mapState2Props, { fetchUser })(Header);
