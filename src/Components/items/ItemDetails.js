import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from 'react-router-dom'
import moment from "moment";

const ItemDetails = props => {
  const { items, auth } = props;

  if (items) {

    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="col s12 m7 container section item-details">
        <div className="card">
          <h2 className=" container section">{items.title}</h2>
          <div className="card-content">
            <p>
              Your <span className="bill">{items.title}</span> bill is due on
              the 8th of April.
            </p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by: {items.authorFirstName} {items.authorLastName}
            </div>
            <div>{moment(items.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="col s12 m7 container center section item-details">
        <p>Loading item...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const items = state.firestore.data.item;
  const item = items ? items[id] : null;
  return {
    items: item,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "item" }])
)(ItemDetails);
