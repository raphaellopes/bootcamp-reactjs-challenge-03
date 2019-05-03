// vendor
import React, { Fragment } from 'react';
import { Provider } from 'react-redux';

// local
import Main from '../../pages/main';
import GlobalStyle from '../../styles/global';
import store from '../../store';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <GlobalStyle />
      <Main />
    </Fragment>
  </Provider>
);

export default App;
