import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import NavBar from './components/NavBar.js';
import UserList from './components/UserList';
import SignUpModal from './components/SignUpModal';

import {Provider} from 'react-redux';
import store from './store'
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <NavBar />
        <Container>
          <SignUpModal/>
        </Container>
        <UserList />
      </div>
    </Provider>

  );
}

export default App;
