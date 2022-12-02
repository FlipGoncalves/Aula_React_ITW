import logo from './logo.svg';
import './App.css';

// my components
import NavbarITW from './components/navbar';
import Gamestable from './components/gamestable';
import Error from './pages/error';
import Home from './pages/home';
import Games from './pages/Games';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <head>
      <meta charset="UTF-8" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
      </head>

      <Router>
      	<NavbarITW />
	<Routes>
		<Route path='/' exact element={<Home />} />
		<Route path='/404' exact element={<Error />} />
		<Route path='/Home' exact element={<Home />} />
		<Route path='/games' exact element={<Games />} />
	</Routes>
      </Router>

      <br /><br />
    </div>
  );
}

export default App;
