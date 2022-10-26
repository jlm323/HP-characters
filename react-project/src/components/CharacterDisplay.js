export default function CharacterDisplay({ characters }) {

    const loaded = () => {
        return (
            <div>
                <h2>{characters.name}</h2>
                <img src={characters.image} alt={characters.name} />
            </div>
        )
    }

    const loading = () => {
        return <div>No character to display</div>    
    }

    return characters ? loaded() : loading();
    
}