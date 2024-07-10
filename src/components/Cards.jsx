import { useState } from "react";

const Cards = ({id, name, description, type, image}) => {
    const [flipped, setFlipped] = useState(false);
    return (
        <>
        <div className="cardFront" hidden={flipped} onClick={()=>setFlipped(!flipped)}>
            <img src={image} alt={name}/>
            <h3>{name}</h3>
        </div>
        <div className={type} hidden={!flipped} onClick={()=>setFlipped(!flipped)}>
            <p>{description}</p>
        </div>
        </>
    )
};
export default Cards;