import { useLocation, Link } from "react-router-dom";
import Stars from "./Stars";

export default function CharacterDisplay({ characters, addToSaved, saved }) {

     let location = useLocation();

     const loaded = () => { 
        if (location.pathname === '/saved') {
            return (
                <div className="characters">
                    {characters.map((character) => {
                        return (
                            <div key={character.id} className="card">
                                <h3>{character.name}</h3>
                                <Link to={`/saved/${character.id}`}>
                                <img src={character.image_url ? character.image_url : require('../images/castle.png')} alt={character.name} className="page-img" />
                                </Link>
                            </div>
                        )
                    })}
                </div>
            )
        } else {
            return (
                <div className="characters">
                    {characters.map((character) => {
                        return (
                            <div key={character.id} className="card">
                                <h3>{character.name}</h3>
                                <img src={character.image_url ? character.image_url : require('../images/castle.png')} alt={character.name} className="page-img" />
                                <br/>
                                <Stars />
                                { character.save ? "Saved" :
                                <button onClick={() => addToSaved(character)} className="btn-save">Save to My Characters</button>
                                }
                            </div>
                        )
                    })}
                </div>
            )
        }
      }
        
                    
    

        const loading = () => {
            return <div>No character to display</div>    
        }

        return characters ? loaded() : loading();

    }







    /* if (location.pathname === '/loved') {
            return (
                <div className="characters">
                    {characters.map((item) => {
                        return (
                            <div key={item.id} className="card">
                                <h3>
                                    {item.name}
                                </h3>
                                <Link to={`/loved/${item.id}`}>
                                <img src={item.image_url ? item.image_url : require('../images/castle.png')} alt={item.name} className="page-img" />
                                </Link>
                                <br />
                                <button id="btnL">Add to Loved</button>
                                <button id="btnH">Add to Hated</button>
                            </div>
                        )
                    })}
                </div>
            )
        } else {
            return (
                <div className="characters">
                    {characters.map((item) => {
                        return (
                            <div key={item.id} className="card">
                                <h3>{item.name}</h3>
                                    <img src={item.image_url ? item.image_url : require('../images/castle.png')} alt={item.name} className="page-img" />
                                <br />
                                { item.loved ? "Added to Loved!" : <button onClick={() => addToLoved(characters)} id="btnL">Add to Loved</button> }
                                <button id="btnH">Add to Hated</button>
                                <Stars />
                            </div>
                        )
                    })}
                </div>
            )
        }
        
        















    const loaded = () => {
            return (
                <div className="characters">
                    {characters.map((item) => {
                        return (
                            <div key={item.id} className="card">
                                <h3>
                                    {item.name}
                                </h3>
                                <Link to={`/characters/${item.id}`}>
                                <img src={item.image_url ? item.image_url : require('../images/castle.png')} alt={item.name} className="page-img" />
                                </Link>
                                
                            </div>
                        )
                    })}
                </div>
            )
            
        }
    
    */