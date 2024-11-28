// src/App.js
import React from 'react';
import './App.css';

function App() {
  const handleClick = () => {
    
  }
  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <a href="#demo">Demo</a>
          <a href="#contribute">Contribute</a>
          <a href="#about">About us</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="main">
        <h1>Translating Kazakh Language into text</h1>
        <p className="subtext">
          An enim nullam tempor sapien gravida donec enim ipsum porta justo congue magna at pretium purus pretium ligula
        </p>
        <button className="cta-button">Contribute to a project</button>
      </main>

      <section className="stats">
        <div className="stat">
          <h2>300+</h2>
          <p>Data Used</p>
        </div>
        <div className="stat">
          <h2>30%</h2>
          <p>Accuracy</p>
        </div>
        <div className="stat">
          <h2>10k</h2>
          <p>Customer</p>
        </div>
      </section>
    </div>
  );
}

export default App;

