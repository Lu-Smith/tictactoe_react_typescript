import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main value={null} player={'Player 1'} result={''} />
      <Footer />
    </div>
  );
}

export default App;
