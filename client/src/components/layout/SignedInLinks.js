import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {logoutUser} from "../../store/action/authAction";

class SignedInLinks extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    return (
      <div>
        <ul className="right">
          <li>
            <NavLink to="/create">New Project</NavLink>
          </li>
          <li>
            <a href="" onClick={this.onLogoutClick.bind(this)}>Log Out</a>
          </li>
          <li>
            <NavLink to="/" className="btn btn-floating pink lighten-1">
              tej
            </NavLink>
          </li>
        </ul>
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};


export default connect(mapStateToProps, {logoutUser})(SignedInLinks);
