import CharacterDisplay from "../components/CharacterDisplay";
import Form from "../components/Form";

export default function Home({ characters, getCharacters }) {
    return (
        <div>
        <h1>Rate Harry Potter Characters</h1>
            <CharacterDisplay characters={characters} />
            <Form getCharacters={getCharacters} />
        
        </div>
    )
}