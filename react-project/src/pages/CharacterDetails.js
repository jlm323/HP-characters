import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

export default function CharacterDetails({ characters }) {
 const [char, setChar] = useState({});
 const { id } = useParams();

 useEffect(() => {
    axios.get(`https://legacy--api.herokuapp.com/api/v1/characters/${id}`).then(res => {
        setChar(res.data);
    }).catch(err => console.log(err))
 }, [id])
   

    return (
        <div>
            <h2>{char.name}</h2>
            <p>testing</p>
        </div>
    )
}





/* 

 let params = useParams();
    let navigate = useNavigate();

    let [charDetails, setCharDetails] = useState({});

    useEffect(() => {
        const characters = characters.filter((c) => params.id === c.id)
        if (characters.length) {
            setCharDetails(characters[0])
        } else {
            navigate("/")
        }
    }, [])

    return (
        <div>
            <h1>Character Details</h1>
            <h2>{charDetails.name}</h2>
            <img src={charDetails.image_url} alt={charDetails.name} />
            <p>Born: {charDetails.born}</p>
            <p>Blood: {charDetails.blood}</p>
            <p>House: {charDetails.house.name}</p>
            <p></p>
        </div>
    )


*/