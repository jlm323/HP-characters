import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Loved from './pages/Loved';
import Hated from './pages/Hated';


function App() {

  const api = process.env.REACT_APP_API;

  let [characters, setCharacters] = useState([]);
  let [loved, setLoved] = useState([]);
  let [hated, setHated] = useState([]);

  let navigate = useNavigate();

  const addToLoved = (characters) => {
    characters.love = true;
    setLoved([...loved, characters]);
    alert('added to Loved');
    navigate('/loved');
  }

  const addToHated = (characters) => {
    characters.hate = true;
    setHated([...hated, characters]);
    alert('added to Hated');
    navigate('/hated');
  }

  const removeFromLoved = (characters) => {
    characters.love = false;
    let filteredLove = loved.filter((c) => c.name !== characters.name);
    setLoved(filteredLove);
  }

  const removeFromHate = (characters) => {
    characters.hate = false;
    let filteredHate = hated.filter((c) => c.name !== characters.name);
    setHated(filteredHate);
  }

  const getCharacters = async () => {
    try {
      const response = await fetch(api);
      const data = await response.json();
      console.log(data)
      setCharacters(data);
    } catch (err) {
      console.log('error!');
      console.log(err);
    }
  }

  useEffect(() => {
      getCharacters("Draco Malfoy");
      console.log('test')
    }, [])

    // useEffect(() => {
    //   console.log("character data has changed!", characters);
    // }, [characters]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" 
          element=
            {<Home 
              characters={characters} 
              getCharacters={getCharacters} 
              loved={loved} 
              addToLoved={addToLoved}
              addToHated={addToHated} />
            }
        />

        <Route path="/loved" 
          element=
            {<Loved 
              loved={loved}
              removeFromLoved={removeFromLoved} />
            } 
        />

        <Route path="/hated" 
          element={
            <Hated 
              hated={hated}
              removeFromHate={removeFromHate} />
          } 
        />
      </Routes>
    </div>
  );
}

export default App;
