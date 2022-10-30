// import { useEffect, useState } from "react"
// import { useNavigate, useParams } from "react-router-dom";

// export default function CharacterDetails({ characters }) {

//     let params = useParams();
//     let navigate = useNavigate();

//     let [charDetails, setCharDetails] = useState({});

//     useEffect(() => {
//         const characters = characters.filter((c) => params.id === c.id)
//         if (characters.length) {
//             setCharDetails(characters[0])
//         } else {
//             navigate("/")
//         }
//     }, [])

//     return (
//         <div>
//             <h1>Character Details</h1>
//             <h2>{charDetails.name}</h2>
//             <img src={charDetails.image_url} alt={charDetails.name} />
//             <p>Born: {charDetails.born}</p>
//             <p>Blood: {charDetails.blood}</p>
//             <p>House: {charDetails.house.name}</p>
//             <p></p>
//         </div>
//     )
// }