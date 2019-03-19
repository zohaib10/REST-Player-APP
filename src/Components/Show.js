import React, { Component } from 'react';
import axios from 'axios';

class Show extends Component {
  state = {
    players: []
  };
  componentDidMount() {
    axios.get(`http://localhost:4000/api/players`).then(res => {
      const players = res.data;
      this.setState({ players });
    });
  }

  render() {
    const players = this.state.players.length
      ? this.state.players.map(player => {
          return (
            <tr key={player.id}>
              <td>{player.name}</td>
              <td>{player.nationalSide}</td>
              <td>{player.dob}</td>
            </tr>
          );
        })
      : null;

    console.log(this.state);
    return (
      <div className="container">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Player Name</th>
              <th scope="col">National Side</th>
              <th scope="col">Date Of Birth</th>
            </tr>
          </thead>
          <tbody>{players}</tbody>
        </table>
      </div>
    );
  }
}

export default Show;
