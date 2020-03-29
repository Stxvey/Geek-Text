import React from 'react';
import Navbar from './components/Navbar'
import BookContainer from './components/BookContainer'

function findUser() {
  fetch('/user/findUser').then(res => {return res.json()}).then(data => console.log(data))
}

function App() {
  return (
    <div className="container">
      <Navbar />
      <BookContainer />
      <button onClick={findUser}>
        find user test
      </button>
    </div>
  );
}

export default App;
