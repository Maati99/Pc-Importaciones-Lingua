import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import ItemListContainer from './components/itemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="bg-warning">
      <ItemListContainer/>
      </div>
      <header className="App-header">
        <h1>PC IMPORTACIONES</h1>
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
export default App;
