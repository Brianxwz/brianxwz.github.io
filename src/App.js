import React from 'react';
import Background from './components/Background';
import About from './components/About';
import Experience from './components/Experience';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <Background />
      <main>
        <About />
        <Experience />
      </main>
    </div>
  );
};

export default App;