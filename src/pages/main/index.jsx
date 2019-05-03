// vendors
import React, { Component, Fragment } from 'react';

// locals
import MapBox from '../../components/map';

class Main extends Component {
  state = {
    users: 'Here will be my array of users',
  };

  render() {
    return (
      <Fragment>
        <MapBox />
      </Fragment>
    );
  }
}

export default Main;
