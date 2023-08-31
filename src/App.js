import logo from './logo.svg';
import './App.css';
import React from 'react';

import Component01 from './components/Component01';
import Component02 from './components/Component02';
import Component03 from './components/Component03';
import Componentxx from './components/Componentxx';

function App() {
  return (

    <div className="App">
      <header className="App-header">

      <body>
      <div class="caja1" ><Component01 /></div>
        <div class="caja2"><Component02 /></div>
        <div class="caja3"><Component03 /></div>
        <div class="caja3"><Componentxx /></div>
        
      </body>  
      <div>Hola Mundo Desarrollo Web</div>

       <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
                <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

}

function VariablesEjemplo() {
  const nombre = 'Pedro';
  const edad = 23;
  const esEstudiante = true;
  return (
    <div>
      <p>Componente 1: Nombre: {nombre}</p>
      <p>Edad: {edad}</p>
      <p>¿Es estudiante?: {esEstudiante}</p>
    </div>
  );
}

function CiclosCondicionalesEjemplo() {
  const numero = [1, 2, 3, 4, 5];
  const esUsuarioAutenticado = true;

  return (
    <div>
      <h2>Componente 2: Números:</h2>
      <ul>
        {numero.map(numero => (
          <li key={numero}>{numero}</li>
        ))}
      </ul>

      {esUsuarioAutenticado ? (
        <p> Bienvenido usuario autenticado.</p>
      ) : (
        <p>Por favor, inicia sesión para acceder. </p>
      )}
    </div>
  );
}

export default App;
