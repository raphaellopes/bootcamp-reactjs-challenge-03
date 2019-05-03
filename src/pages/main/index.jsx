// vendors
import React, { Component, Fragment } from 'react';

// locals
import MapBox from '../../components/map';

class Main extends Component {
  state = {
    users: [{
      id: 398909,
      name: 'Raphael Lopes',
      username: 'raphaellopes',
      position: {
        latitude: -23.5439948,
        longitude: -46.6065452,
      },
    }],
  };

  get users() {
    return this.state.users;
  }

  set users(users) {
    this.setState(users);
  }

  set user(user) {
    const { users } = this;
    users.push(user);
    this.users = users;
  }

  handleMapClick = (latitude, longitude) => {
    console.log(`handleMapClick \n Lat: ${latitude} \n Long: ${longitude}`);

    this.user = {
      id: 764243,
      name: 'Guilherme Fiuza',
      username: 'fiuzagr',
      position: { latitude, longitude },
    };

    console.log(this.state.users);
  }

  render() {
    return (
      <Fragment>
        <MapBox
          users={this.state.users}
          onMapClick={this.handleMapClick}
        />
      </Fragment>
    );
  }
}

export default Main;
