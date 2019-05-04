// vendors
import React, { Fragment } from 'react';
import { node } from 'prop-types';

// locals
import { Backdrop, Content } from './styles';

const Modal = ({ children }) => (
  <Fragment>
    <Backdrop />
    <Content>
      {children}
    </Content>
  </Fragment>
);

Modal.propTypes = {
  children: node.isRequired,
};

export default Modal;
