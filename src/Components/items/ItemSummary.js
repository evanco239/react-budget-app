import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const ItemSummary = ({ item }) => {
  return (
    <Link to={`/item/${item.id}`}>
      <div className="card z-depth-0 item-summary">
        <div className="card-content hoverable lighten-4 grey-text text-darken-3 z-depth-2">
          <span className="tiles card-title">{item.title}</span>
          <p>
            Posted by {item.authorFirstName} {item.authorLastName}{" "}
          </p>
          <p className="grey-text">{moment(item.createdAt.toDate()).calendar()}</p>
        </div>
      </div>
    </Link>
  );
};

export default ItemSummary;
