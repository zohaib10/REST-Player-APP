import React, { Component } from 'react';

import axios from 'axios';

class Add extends Component {
  state = {};

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const player = this.state;
    axios.post(`http://localhost:4000/api/players`, player).then(res => {
      console.log(res);
      console.log(res.data);
    });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Legend</legend>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter Name"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">National Side</label>
              <input
                type="text"
                className="form-control"
                id="nationalSide"
                onChange={this.handleChange}
                placeholder="National Side of the player"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Date of Birth</label>
              <input
                type="date"
                className="form-control"
                id="dob"
                onChange={this.handleChange}
                placeholder="National Side of the player"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Add;
