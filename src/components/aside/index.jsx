// vendors
import React, { Component, Fragment } from 'react';
import {
  func, shape, bool, oneOfType, arrayOf, number, string,
} from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toast } from 'react-toastify';

// locals
import Avatar from '../avatar';
import Icon from '../icon';
import Modal from '../modal';
import ButtonWrapper from '../button-wrapper';
import Button from '../button';

import { Creators as UserActions } from '../../store/ducks/users';
import { AsideStyle, UsersList, AlertResume } from './styles';

class Aside extends Component {
  static propTypes = {
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
    removeUser: func.isRequired,
  };

  state = {
    isModalOpen: false,
    selectedUser: null,
  }

  // getters and setters
  get users() {
    return this.props.users.data;
  }

  set isModalOpen(isModalOpen) {
    this.setState({ isModalOpen });
  }

  get isModalOpen() {
    return this.state.isModalOpen;
  }

  set selectedUser(selectedUser) {
    this.setState({ selectedUser });
  }

  get selectedUser() {
    return this.state.selectedUser;
  }

  // handlers
  handleRemove = (user) => {
    this.selectedUser = user;
    this.isModalOpen = true;
  }

  // renders
  renderModalButtons() {
    return (
      <ButtonWrapper>
        <Button
          type="button"
          color="neutralMid"
          onClick={() => {
            this.isModalOpen = false;
          }}
        >
          cancelar
        </Button>
        <Button onClick={() => {
          this.props.removeUser(this.selectedUser.id);
          this.selectedUser = null;
          this.isModalOpen = false;
          toast.success('Usuário removido com sucesso!');
        }}
        >
          confirmar
        </Button>
      </ButtonWrapper>
    );
  }

  renderModal() {
    const { id, name } = this.selectedUser;

    return (
      <Modal title="Atenção">
        <AlertResume>
          <p>
            Você tem certeza que deseja excluir esse usuário? <br />
            <Avatar userId={id} alt={name} /> <br />
            <strong>{name}</strong>
          </p>
        </AlertResume>
        {this.renderModalButtons()}
      </Modal>
    );
  }

  renderUsers() {
    return (
      <UsersList>
        {this.users.map(user => (
          <li key={user.id} className="user-item">
            <Avatar className="user-img" userId={user.id} alt={user.name} />
            <p className="user-info">
              <strong>{user.name}</strong>
              <small className="user-username">{user.username}</small>
            </p>
            <Icon
              onClick={() => this.handleRemove(user)}
              name="times-circle"
              color="error"
            />
            <Icon
              name="angle-right"
              color="neutralMid"
            />
          </li>
        ))}
      </UsersList>
    );
  }

  render() {
    return (
      <Fragment>
        <AsideStyle>
          {this.users.length ? this.renderUsers() : (
            <p>Clique sobre o mapa para adicionar um usuário</p>
          )}
        </AsideStyle>
        {this.isModalOpen && this.renderModal()}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Aside);
