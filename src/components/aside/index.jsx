// vendors
import React, { Component } from 'react';
import {
  node, shape, bool, oneOfType, arrayOf, number, string,
} from 'prop-types';
import { connect } from 'react-redux';

// locals
import Avatar from '../avatar';
import Icon from '../icon';
import { AsideStyle, UsersList } from './styles';

class Aside extends Component {
  static propTypes = {
    children: node.isRequired,
    users: shape({
      loading: bool.isRequired,
      error: oneOfType([null, string]),
      data: arrayOf(shape({
        id: number,
        name: string,
        username: string,
        position: shape({
          latitude: number,
          longitude: number,
        }),
      })),
    }).isRequired,
  };

  get users() {
    return this.props.users.data;
  }

  renderUsers() {
    return (
      <UsersList>
        {this.users.map(user => (
          <li className="user-item">
            <Avatar className="user-img" userId={user.id} alt={user.name} />
            <p className="user-info">
              <strong>{user.name}</strong>
              <small className="user-username">{user.username}</small>
            </p>
            <Icon name="times-circle" color="error" />
            <Icon name="angle-right" color="neutralMid" />
          </li>
        ))}
      </UsersList>
    );
  }

  render() {
    return (
      <AsideStyle>
        {this.users.length ? this.renderUsers() : (
          <p>Clique sobre o mapa para adicionar um usuário</p>
        )}
      </AsideStyle>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps)(Aside);
