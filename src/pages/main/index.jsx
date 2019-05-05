// vendors
import React, { Component, Fragment } from 'react';
import {
  func, oneOfType, bool, arrayOf, shape, number, string,
} from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// locals
import { Creators as UserActions } from '../../store/ducks/users';
import MapBox from '../../components/map';
import Modal from '../../components/modal';
import Input from '../../components/input';
import Button from '../../components/button';
import ButtonWrapper from '../../components/button-wrapper';
import Aside from '../../components/aside';
import Icon from '../../components/icon';

import { Form } from './styles';

class Main extends Component {
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
    addUserRequest: func.isRequired,
  }

  state = {
    error: false,
    usernameInput: '',
    isModalOpen: false,
    selectedPosition: null,
  }

  // lifecicle
  componentDidUpdate(prevProps) {
    if (prevProps.users.loading !== this.isLoading) {
      if (!this.isLoading) {
        if (this.error) {
          toast.error(this.error);
        } else {
          this.clear();
          toast.success('Usuário cadastrado com sucuesso');
        }
      }
    }
  }

  // getters and setters
  get users() {
    return this.props.users.data;
  }

  get usernameInput() {
    return this.state.usernameInput;
  }

  set usernameInput(usernameInput) {
    this.setState({ usernameInput });
  }

  set selectedPosition(selectedPosition) {
    this.setState({ selectedPosition });
  }

  get selectedPosition() {
    return this.state.selectedPosition;
  }

  set isModalOpen(isModalOpen) {
    this.setState({ isModalOpen });
  }

  get isModalOpen() {
    return this.state.isModalOpen;
  }

  get isLoading() {
    return this.props.users.loading;
  }

  get error() {
    return this.props.users.error || this.state.error;
  }

  set error(error) {
    this.setState({ error });
  }

  // handlers
  clear = () => {
    this.usernameInput = '';
    this.isModalOpen = false;
  }

  handleMapClick = (latitude, longitude) => {
    this.selectedPosition = { latitude, longitude };
    this.isModalOpen = true;
  }

  handleAddUser = (e) => {
    e.preventDefault();
    if (this.users.find(user => user.username === this.usernameInput)) {
      this.error = true;
      toast.error('Usuário já adicionado à lista');
    } else {
      this.error = false;
      this.props.addUserRequest(this.usernameInput, this.selectedPosition);
    }
  }

  // renders
  renderModalButtons() {
    const spinner = <Icon name="spinner fa-pulse" />;

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
        <Button type="submit">
          {this.isLoading ? spinner : 'salvar'}
        </Button>
      </ButtonWrapper>
    );
  }

  renderModal() {
    return (
      <Modal title="Adicionar novo usuário">
        <Form withError={this.error} onSubmit={this.handleAddUser}>
          <Input
            placeholder="Usuário no Github"
            value={this.usernameInput}
            onChange={e => this.usernameInput = e.target.value}
          />
          {this.renderModalButtons()}
        </Form>
      </Modal>
    );
  }

  render() {
    return (
      <Fragment>
        <Aside />
        <MapBox
          users={this.users}
          onMapClick={this.handleMapClick}
        />
        {this.isModalOpen && this.renderModal()}
        <ToastContainer />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
