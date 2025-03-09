// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <div className="content-container">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
