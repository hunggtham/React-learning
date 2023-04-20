// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="app-container">
      <header className="App-header">
        <Header />
        <button><Link to="/users">Go to User Page</Link></button>
        <button><Link to="/admins">Go to Admin Page</Link></button>

      </header>
    </div>
  );
}

export default App;
