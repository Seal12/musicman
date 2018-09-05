import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { ApolloProvider } from "react-apollo";

import { Routes } from './Routes'
import store from './store'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
          <Routes />
      </Provider>
    );
  }
}

export default App;
