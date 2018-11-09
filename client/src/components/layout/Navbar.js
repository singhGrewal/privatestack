import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const Navbar = props => {
  const { auth, profile } = props;
  // const logInOut = auth.uid ? (
  //   <SignedInLinks profile={profile} />
  // ) : (
  //   <SignedOutLinks />
  // );
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        {/*<Link to="/" className="brand-logo">*/}
          {/*{profile.firstName}*/}
        {/*</Link>*/}
        {/*{logInOut}*/}
        <SignedInLinks/>
        <SignedOutLinks/>

      </div>
    </nav>
  );
};

// const mapStateToProps = state => {
//   console.log(state);
//   return {
//     auth: state.firebase.auth,
//     profile: state.firebase.profile
//   };
// };

export default Navbar;
// export default connect(mapStateToProps)(Navbar);
