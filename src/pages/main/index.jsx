// vendors
import React, { Component, Fragment } from 'react';
import {
  func, oneOfType, bool, arrayOf, shape, number, string,
} from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// locals
import { Creators as UserActions } from '../../store/ducks/users';
import MapBox from '../../components/map';
import Modal from '../../components/modal';
import Input from '../../components/input';
import Button from '../../components/button';
import { ButtonWrapper, Form } from './styles';

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
    usernameInput: '',
    isModalOpen: false,
    selectedPosition: null,
  }

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

  clear = () => {
    this.usernameInput = '';
    this.isModalOpen = false;
  }

  handleMapClick = (latitude, longitude) => {
    console.log(`handleMapClick \n Lat: ${latitude} \n Long: ${longitude}`);
    this.selectedPosition = { latitude, longitude };
    this.isModalOpen = true;
  }

  handleAddUser = (e) => {
    e.preventDefault();
    this.props.addUserRequest(this.usernameInput, this.selectedPosition);
    this.clear();
  }

  renderModal() {
    return this.isModalOpen && (
      <Modal>
        <Form onSubmit={this.handleAddUser}>
          <h1>
            Adicionar novo usuário
          </h1>
          <Input
            placeholder="Usuário no Github"
            value={this.usernameInput}
            onChange={e => this.usernameInput = e.target.value}
          />
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
              salvar
            </Button>
          </ButtonWrapper>
        </Form>
      </Modal>
    );
  }

  render() {
    return (
      <Fragment>
        <MapBox
          users={this.users}
          onMapClick={this.handleMapClick}
        />
        {this.renderModal()}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
