import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { ApolloProvider } from "react-apollo";

import Main from './containers/main';
import store from './store'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
          <Main />
      </Provider>
    );
  }
}

export default App;
