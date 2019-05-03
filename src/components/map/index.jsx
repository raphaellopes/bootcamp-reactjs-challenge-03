// vendor
import React, { Component } from 'react';
import {
  func, arrayOf, shape, number, string,
} from 'prop-types';
import MapGl, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// locals
import mapboxConfig from '../../config/mapbox';

export default class MapBox extends Component {
  static propTypes = {
    users: arrayOf(shape({
      id: number.isRequired,
      name: string.isRequired,
      username: string.isRequired,
      position: shape({
        latitude: number.isRequired,
        longitude: number.isRequired,
      }),
    })),
    onMapClick: func.isRequired,
  }

  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.5439948,
      longitude: -46.6065452,
      zoom: 14,
    },
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  }

  handleMapClick = (e) => {
    const [longitude, latitude] = e.lngLat;
    this.props.onMapClick(latitude, longitude);
  }

  render() {
    console.log('>>>', this.props.users);
    return (
      <MapGl
        {...this.state.viewport}
        onClick={this.handleMapClick}
        mapStyle="mapbox://styles/mapbox/basic-v9"
        mapboxApiAccessToken={mapboxConfig.accessToken}
        onViewportChange={viewport => this.setState({ viewport })}
      >
        {this.props.users.map(user => (
          <Marker
            key={user.id}
            latitude={user.position.latitude}
            longitude={user.position.longitude}
            onClick={this.handleMapClick}
            captureClick
          >
            <img
              style={{
                borderRadius: 100,
                width: 48,
                height: 48,
              }}
              src={`https://avatars2.githubusercontent.com/u/${user.id}?v=4`}
              alt=""
            />
          </Marker>
        ))}
      </MapGl>
    );
  }
}
