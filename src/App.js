import React, { Component } from 'react';

import Add from './Components/Add';
import Show from './Components/Show';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Player
          </a>
        </nav>
        <Add />
        <br />
        <Show />
      </div>
    );
  }
}

export default App;
