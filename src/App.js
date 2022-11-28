import logo from './logo.svg';
import './App.css';

// my components
import NavbarITW from './components/navbar';
import Gamestable from './components/gamestable';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <head>
      <meta charset="UTF-8" />    
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
      </head> 
      <NavbarITW />
      <br /><br />
      <div align="center">
        <Gamestable />
      </div>
    </div>
  );
}

export default App;