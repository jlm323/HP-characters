import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Loved from './pages/Loved';
import Hated from './pages/Hated';
import CharacterDetails from './pages/CharacterDetails';



function App() {

  let [characters, setCharacters] = useState([]);
  let [loved, setLoved] = useState([]);
  let [hated, setHated] = useState([]);


  //let params = useParams();

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

     

  const addToLoved = (characters) => {
    characters.love = true;
    setLoved([...loved, characters]);
    // getting button element
    let added = document.getElementById('btnL');
    // if the text content of button is add to loved
    // then change text content to added to loved
    // else text content is add to loved
    if (added.textContent === "Add to Loved") {
      added.textContent = "Added to Loved!";
    } else {
      added.textContent = "Add to Loved";
    }
    // settimeout to delay navigation to loved page
    setTimeout(() => {
      navigate('/loved');
    }, 2000)
    
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
              loved={loved} 
              addToLoved={addToLoved}
              addToHated={addToHated}
               />
            }
        />

        <Route path="/loved" 
          element=
            {<Loved 
              loved={loved}
              removeFromLoved={removeFromLoved} />
            } 
        />

        <Route path="/loved/:id" 
          element=
          {<CharacterDetails 
            loved={loved}
            />} />

        <Route path="/hated" 
          element={
            <Hated 
              hated={hated}
              removeFromHate={removeFromHate} />
          } 
        />

        <Route path="/hated/:id" 
          element=
            {<CharacterDetails 
            hated={hated} 
            />} />
      </Routes>
    </div>
  );
}

export default App;
