import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from "../actions";
import { Link } from "react-router-dom";
import Payments from "./Payments";


class Header extends React.Component {
  renderLogin() {
    let i = 0;

    switch (this.props.auth) {
      case null:
        return '';
      case false:
        return <li><a href={'/auth/google'}>Login with Google</a></li>;
      default:
        return [
          <li key={i++}><Payments/></li>,
          <li key={i++}>Credits: {this.props.auth.credits} </li>,
          <li key={i++}><a href={'/api/logout'}>Logout</a></li>,
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={this.props.auth ? '/surveys' : '/'} className="left brand-logo">
            Emaily
          </Link>
          <ul className="right hide-on-small-and-down">
            {this.renderLogin()}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapState2Props = ({ auth }) => ({ auth });

export default connect(mapState2Props, { fetchUser })(Header);
