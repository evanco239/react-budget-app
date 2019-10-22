import React, { Component } from "react";
import { connect } from "react-redux";
import { createItem } from "../../store/actions/itemActions";
import { Redirect } from "react-router-dom";

class CreateItem extends Component {
  state = {
    title: "",
    content: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSumbit = e => {
    e.preventDefault();
    this.props.createItem(this.state);
    this.props.history.push("/");
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container">
        <form onSubmit={this.handleSumbit} className="white">
          <h5 className="grey-text text-darken-3">Add New Budget Item</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" onChange={this.handleChange} id="title" />
          </div>
          <div className="input-field">
            <label htmlFor="content">Body</label>
            <input type="text" onChange={this.handleChange} id="content" />
          </div>
          <div className="input-field">
            <button className="btn green">Create Item</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createItem: item => dispatch(createItem(item))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateItem);
