import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import NavBar from './components/NavBar.js';
import UserList from './components/UserList';

import {Provider} from 'react-redux';
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <NavBar />
        <UserList />
      </div>
    </Provider>

  );
}

export default App;
