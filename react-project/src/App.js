import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Loved from './pages/Loved';
import Hated from './pages/Hated';

let init = false;

function App() {

  let [character, setCharacter] = useState([]);

  const getCharacter = async () => {
    const response = await fetch('https://hp-api.herokuapp.com/api/characters');
    const data = await response.json();
    console.log(data)
    console.log(data[3])
    setCharacter(data);
  }

  useEffect(() => {
    if (!init) {
      getCharacter();
      console.log('test')
      init = true;
    }
    
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home character={character} getCharacter={getCharacter} />} />
        <Route path="/loved" element={<Loved />} />
        <Route path="/hated" element={<Hated />} />
      </Routes>
    </div>
  );
}

export default App;
