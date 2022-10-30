import CharacterDisplay from "../components/CharacterDisplay";

export default function SavedCharacters({ saved }) {
    return (
        <div>
            <h1>Saved Characters</h1>
            {saved.map((character) => {
                return (
                    <CharacterDisplay
                    key={character.id}
                    />
                )
            })}
        </div>
    )
}