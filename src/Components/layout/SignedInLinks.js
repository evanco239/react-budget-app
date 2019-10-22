import React from "react";
import { NavLink } from "react-router-dom";
import { signOut } from "../../store/actions/authActions";
import { connect } from "react-redux";

const SignedInLinks = (props) => {
  
  const { profile } = props;
  
  const handleClick = () => {
    props.signOut();
  }

  return (
    <ul className="right">
      <li>
        <NavLink to="/createItem">New Bill</NavLink>
      </li>
      <li>
        <NavLink to="/" onClick={handleClick}>Log Out</NavLink>
      </li>
      <li className="media-small-hidden">
        <NavLink
          to="/"
          className="btn btn-floating grey lighten-2 text-lg green-text"
        >
          {profile.initials}
        </NavLink>
      </li>
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    email: state.firebase.auth.email,
    profile: state.firebase.profile
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);
