import * as React from 'react';
import "./BoozeSpecs.css";

interface BoozeSpecsProps {
    ph: string, 
    volume: string,
    alcohol:string,
}

const BoozeSpecs: React.FC<BoozeSpecsProps> =({ph, volume, alcohol})=> {
    return <div className="specs">
        <div className="spec-item ph">PH <span>{ph}</span></div>
        <div className="spec-item vol">VOL <span>{volume}</span></div>
        <div className="spec-item alc">ALC <span>{alcohol}</span></div>
    </div>
}

export default BoozeSpecs