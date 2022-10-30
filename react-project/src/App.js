import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SavedCharacters from './pages/SavedCharacters';
import CharacterDetails from './pages/CharacterDetails';



function App() {

  let [characters, setCharacters] = useState([]);
  let [saved, setSaved] = useState([]);

  let navigate = useNavigate();

  const getCharacters = () => {
      axios.get(`https://legacy--api.herokuapp.com/api/v1/characters?page=1`).then((response) => {
        console.log(response.data)
        setCharacters(response.data);
      })
    }
  
    useEffect(() => {
      getCharacters();
      console.log('test')
    }, [])

    const addToSaved = (characters) => {
      characters.save = true
      setSaved([...saved, characters]);
      alert(`Added to Saved!`);
      navigate("/saved");
    }

    const removeFromSaved = () => {
      console.log('removed')
    }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" 
          element=
            {<Home 
              characters={characters} 
              getCharacters={getCharacters} 
              setCharacters={setCharacters}
              saved={saved}
              addToSaved={addToSaved}
               />
            }
        />

        <Route path="/saved"
          element=
            {<SavedCharacters
              characters={characters}
              removeFromSaved={removeFromSaved} 
              />
            } 
        />

        <Route path="/saved/:id"
          element=
            {<CharacterDetails
              saved={saved} />} />

        
      </Routes>
    </div>
  );
}

export default App;
