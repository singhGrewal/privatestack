import React, { Component } from 'react';
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

class Navbar extends Component {

  render() {
    const {isAuthenticated, user} = this.props.auth;
    // console.log('isAuthenticated', isAuthenticated)
    // console.log('user', user)

    const logInOut = isAuthenticated.id ? (
      <SignedInLinks />
    ) : (
      <SignedOutLinks user={user} isAuthenticated={isAuthenticated}/>
    );
    return (
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          {/*<Link to="/" className="brand-logo">*/}
          {/*{profile.firstName}*/}
          {/*</Link>*/}
          {/*{logInOut}*/}
          {/*<SignedInLinks/>*/}
          {/*<SignedOutLinks/>*/}

          {logInOut}

        </div>
      </nav>
    );
  };
}

const mapStateToProps = state => {
  console.log("state", state);
  return {
    // auth: state.firebase.auth,
    // profile: state.firebase.profile
    auth: state.auth
  };
};


export default connect(mapStateToProps)(Navbar);
