// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="app-container">
      <header className="header-container">
        <Header />
        <button><Link to="/users">Go to User Page</Link></button>
        <button><Link to="/admins">Go to Admin Page</Link></button>

      </header>
      <div className='main-container'>
        <div className='app-content'>
          <Outlet />
        </div>
        <div className='sidenav-container'>

        </div>
      </div>
    </div>

  );
}

export default App;
