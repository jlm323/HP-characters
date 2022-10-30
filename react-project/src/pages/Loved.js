import CharacterDisplay from "../components/CharacterDisplay";

export default function Loved({ loved, removeFromLoved, characters }) {
    return (
        <div className="loved-characters">
        <h1>Loved Characters</h1>
        {loved.map((item) => {
            return (
                <CharacterDisplay
                key={item.id}
                
                removeFromLoved={removeFromLoved} />
            )
        })}
        </div>
    )
}