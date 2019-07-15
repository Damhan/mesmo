import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import NavBar from './components/NavBar.js';
import UserList from './components/UserList';

function App() {
  return (
    <div className="wrapper">
      <NavBar />
      <UserList />
    </div>
  );
}

export default App;
