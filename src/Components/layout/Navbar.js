import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const Navbar = props => {
  const { auth } = props;
  return (
    <div className="navbar navbar-fixed  ">
      <nav className=" nav-wrapper green darken-3">
        <div className="container row">
          <div id="brand-logo" className=" col s2 m4 l6 ">
            <Link to="/" className="brand-logo">
              {" "}
              <i className="fas fa-money-check-alt" />
              Budget
            </Link>
          </div>
          <div className="col s12 m8 l6 ">
            {/* checks to see if the user is authenticated */}
            {auth.uid ? <SignedInLinks /> : <SignedOutLinks />}
          </div>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Navbar);
