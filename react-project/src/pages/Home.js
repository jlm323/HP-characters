import CharacterDisplay from "../components/CharacterDisplay";
import Form from "../components/Form";

export default function Home({ character, getCharacter }) {
    return (
        <div>
        <h1>Rate Harry Potter Characters</h1>
        <Form getCharacter={getCharacter} />
        <CharacterDisplay character={character} />
        </div>
    )
}