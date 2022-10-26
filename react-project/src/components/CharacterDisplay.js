export default function CharacterDisplay({ character }) {

    const loaded = () => {
        return (
            <div>
                <h2>{character.name}</h2>
                <img src={character.image} alt={character.name} />
            </div>
        )
    }

    const loading = () => {
        return <div>No character to display</div>    
    }

    return character ? loaded() : loading();
    
}