import React from 'react';
import Navbar from './components/Navbar'
import BookContainer from './components/BookContainer'

function App() {
  return (
    <div className="container">
      <BookContainer />
      <Navbar />
    </div>
  );
}

export default App;
