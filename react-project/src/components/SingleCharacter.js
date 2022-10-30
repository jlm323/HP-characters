import { useState, useEffect } from 'react';
import axios from 'axios';

export default function SingleCharacter() {

    let [char, setChar] = useState({});

    useEffect(() => {
        axios.get(`https://legacy--api.herokuapp.com/api/v1/characters/462`).then(res => {
            setChar(res.data);
        }).catch(err => console.log(err))
     }, [])

    return (
        <div className="featured-info">
            <h2>{char.name}</h2>
            <div className="feat-details">
                <img src={char.image_url} alt={char.name} className="feat-img" /><br />
                <p>Born: {char.born}</p>
                <p>Died: {char.died}</p>
                {/* <p>House: {char.house.name}</p> */}
            </div>
            <div className="bio">
                <p>"Sir Nicholas de Mimsy-Porpington, known after his death as Nearly Headless Nick, (d. 31 October, 1492) was a wizard who attended Hogwarts School of Witchcraft and Wizardry and was Sorted into Gryffindor House.</p>
                
                <p>He was a wizard of the royal court as an adult. He was executed by an improper decapitation, after he had a magical mishap with Lady Grieve. He tried to straighten her teeth but it backfired and she grew tusks. Since then, he became the resident ghost of Gryffindor Tower at the Hogwarts Castle."
                    <a href="https://harrypotter.fandom.com/wiki/Nicholas_de_Mimsy-Porpington" className="source-link">[1]</a>
                </p>

                <h3>Five-hundredth Deathday Party</h3>

                <p>"The five-hundredth Deathday Party of the ghost Nicholas de Mimsy-Porpington ... was a celebration thrown by said ghost, ... to commemorate the day he died.</p>

                <p>In honour of the event, Sir Nicholas took the liberty of decorating one of the castle's roomier dungeons with black candles, which gave off a bluish glow and many black hangings.</p>
                <p>He also ordered a variety of food that had been tainted to make it stronger, and therefore more likely to be possible for ghosts to taste. This food included large, rotten fish on handsome silver platters, cakes burned charcoal-black, heaped on salvers, maggoty haggis, mouldy cheese, and, in pride of place, an enormous grey cake in the shape of a tombstone, which had his name and date of death written on it in tar-like frosting.</p>
                <p>Last but not least, Nicholas hired a ghostly orchestra to play the musical saw, and provided them with a black-draped raised platform for them to perform on."
                    <a href="https://harrypotter.fandom.com/wiki/Nicholas_de_Mimsy-Porpington%27s_five-hundredth_Deathday_Party" className="source-link">[2]</a>
                </p>
            </div>
        </div>
    )
   
}