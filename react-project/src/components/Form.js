import { useState } from 'react';

export default function Form({ getCharacters }) {

    let [characterName, setCharacterName] = useState('');

    const handleChange = (e) => {
        setCharacterName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getCharacters(characterName);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="search">Search for a character:</label>
            <br />
            <input type="text" id="search" value={characterName} onChange={handleChange} />
            <input type="submit" value="Submit" />
        </form>
    )
}