import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Makeup from './components/Makeup';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Makeup />} />
      </Routes>
    </div>
  );
}

export default App;
