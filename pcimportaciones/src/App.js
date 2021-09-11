import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import ItemListContainer from './components/Container/itemListContainer';
import ItemDetailConteiner from './components/Container/ItemDetailConteiner';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Cart from './components/Carrito/Cart';
import Inicio from './components/inicio';

function App() {
  return (
<Router>
  <NavBar/>
    <div className="App">    
<Switch>
  <React.Fragment>

      <header className="App-header">
        <Route exact path="/">
          <Inicio/>
        </Route>
        
        <Route exact path="/componentes">
          <ItemListContainer/>
        </Route>

        <Route exact path="/componentes/:id">
          <ItemListContainer/>
        </Route>

        <Route exact path="/detalle/:id">
            <ItemDetailConteiner/>
        </Route>

        <Route exact path="/cart">
            <Cart/>
        </Route>

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
      </header></React.Fragment>
      </Switch>
    </div></Router>
  );
}
export default App;
