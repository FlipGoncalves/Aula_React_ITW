import logo from './logo.svg';
import './App.css';

// other imports
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// my components
import NavbarITW from './components/navbar';
import Gamestable from './components/gamestable';
import Error from './pages/error';
import Home from './pages/home';
import Games from './pages/games';
import Athletes from './pages/athletes';
import Login from './pages/login';
import FooterITW from './components/footer';

function App() {
  return (
    <div>
      <head>
      <meta charset="UTF-8" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
      </head>

      <Router>
      	<NavbarITW />
        <br /><br /><br />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/404' exact element={<Error />} />
          <Route path='/Home' exact element={<Home />} />
          <Route path='/games' exact element={<Games />} />
          <Route path='/athletes' exact element={<Athletes />} />
          <Route path='/login' exact element={<Login />} />
        </Routes>
      </Router>

      <br /><br />
      <FooterITW />
    </div>
  );
}

export default App;
