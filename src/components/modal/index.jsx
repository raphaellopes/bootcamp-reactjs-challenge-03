// vendors
import React, { Fragment } from 'react';
import { node, string } from 'prop-types';

// locals
import { Backdrop, Content, Title } from './styles';

const Modal = ({ children, title }) => (
  <Fragment>
    <Backdrop />
    <Content>
      {title && (
      <Title>
        {title}
      </Title>
      )}
      {children}
    </Content>
  </Fragment>
);

Modal.propTypes = {
  children: node.isRequired,
  title: string,
};

Modal.defaultProps = {
  title: '',
};

export default Modal;
