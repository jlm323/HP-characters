import CharacterDisplay from "../components/CharacterDisplay";

export default function SavedCharacters({ saved }) {
    return (
        <div>
            <h1>Saved Characters</h1>
            <p>You don't have any saved characters yet</p>
        </div>
    )
}

/*

 {saved.length > 0 ? saved.map((character) => {
                return (
                    <CharacterDisplay
                    key={character.id}
                    />
                )
            }) : <p>You don't have any saved characters yet</p>}

*/