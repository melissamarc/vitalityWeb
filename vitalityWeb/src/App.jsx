import { useState } from 'react'
import React from 'react';
import Navbar from '../src/Components/Navbar/Navbar'
import './App.css'

function App() {
    return (
      <div>
      <Navbar />
      <div className="content-container">
        <h1 className="titulo">
          Bem-vindo à Nossa <br /> Plataforma de Saúde <br /> Online!
        </h1>
      </div>
    </div>
  );
}
export default App;
