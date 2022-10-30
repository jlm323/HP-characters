import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SavedCharacters from './pages/SavedCharacters';
// import CharacterDetails from './pages/CharacterDetails';
import Featured from './pages/Featured';


function App() {

  let [characters, setCharacters] = useState([]);
  // let [saved, setSaved] = useState([]);

 // let navigate = useNavigate();

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

    // const addToSaved = (character) => {
    //   const oldSaved = [...saved];
    //   const newSaved = oldSaved.concat(character)
    //   setSaved(newSaved);
    //   // characters.save = true
    //   // setSaved([...saved, characters]);
    //   // alert(`Added to Saved!`);
    //   // navigate("/saved");
    // }

    // const removeFromSaved = (characters) => {
    //   let filteredArr = saved.filter((c) => c.id !== characters.id);
    //   setSaved(filteredArr);
    // }

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
               />
            }
        />

        <Route path="/featured"
          element=
            {<Featured />} 
        />        

        <Route path="/saved"
          element={<SavedCharacters />} 
        />
      </Routes>
    </div>
  );
}

export default App;
