import { FaStar } from 'react-icons/fa';
import { useState } from 'react';

export default function Stars() {

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    
    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingVal = i + 1;
                return (
                    <label>
                        <input 
                            type="radio" 
                            name="rating" 
                            value={ratingVal}
                            onClick={() => setRating(ratingVal)} 
                            
                        />
                        <FaStar 
                            className="star" 
                            color={ratingVal <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                            onMouseEnter={() => setHover(ratingVal)}
                            onMouseLeave={() => setHover(null)} />
                    </label>
                )
            })}
        </div>
    )
}