import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Makeup from './components/Makeup';
import MakupDetail from './components/MakupDetail';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Makeup />} />
        <Route path='/makeup-detail/:produtId' element={<MakupDetail/>} />
      </Routes>
    </div>
  );
}

export default App;
