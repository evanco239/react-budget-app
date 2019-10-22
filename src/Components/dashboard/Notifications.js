import React from "react";
import moment from 'moment'

const Notifications = (props) => {
  const { notifications } = props
  
  return (
    <div className="section notifications">
      <div className="card z-depth-1">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="">
            {notifications && notifications.map(note => {
              return (
                <li key={note.id}>
                  <span className="green-text">{note.user}</span>
                  <span > {note.content}</span>
                  <div className="grey-text note-date">
                    {moment(note.time.toDate()).fromNow()}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;