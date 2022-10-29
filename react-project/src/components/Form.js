import { useState } from 'react';

export default function Form({ getCharacters, name, setName }) {

   // let [characterName, setCharacterName] = useState('');

    const handleChange = (e) => {
      // setCharacterName(e.target.value);
       setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
      // getCharacters(characterName);
       getCharacters(name);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="search">Search for a character:</label>
            <br />
            <input type="text" id="search" value={name} onChange={handleChange} />
            <input type="submit" value="Submit" />
        </form>
    )
}