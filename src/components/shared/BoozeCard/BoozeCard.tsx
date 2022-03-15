import * as React from 'react';
import { BoozeSpecs } from '..';
import "./BoozeCard.css"

interface BoozeCardProps {
    title: string,
    ph: string, 
    volume: string,
    image: string,
    alcohol:string
}

const BoozeCard: React.FC<BoozeCardProps> =({title, ph, volume, image, alcohol})=> {
    return <div className="card">
        <div className="card-image" >
        <img src={image} alt={title}/>
        </div>
        <div className="card-info">
            <h5 className="card-title">{title}</h5>
            <BoozeSpecs ph={ph} volume={volume} alcohol={alcohol}/>
            <button>Remove</button>
        </div>
    </div>
}

export default BoozeCard;