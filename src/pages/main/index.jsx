// vendors
import React, { Component } from 'react';

class Main extends Component {
  state = {
    users: 'Here will be my array of users',
  };

  render() {
    return (
      <div>
        {this.state.users}
      </div>
    );
  }
}

export default Main;
