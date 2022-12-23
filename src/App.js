import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>React Routing Task</h2>
      <nav>
        <Link to="/home" className='margin'>Home</Link>
        <Link to="/about" className='margin'>About</Link>
        <Link to='/categories/foods' className='margin'>Foods</Link>
        <Link to='/categories/drinks' className='margin'>Drinks</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
