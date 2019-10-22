import React, { Component } from "react";
import Notifications from "./Notifications";
import ItemList from "../items/ItemList";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  render() {
    const { items, auth, notifications } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="dashbaord container">
        <div className="row">
          <div className="col s12 m6">
            <ItemList items={items} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications}/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.firestore.ordered.item,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "item",
      orderBy: ['createdAt', 'desc'] 
    },
    {
      collection: "notifications",
      limit: 5,
      orderBy: ['time', 'desc'] 
    }
  ])
)(Dashboard);
