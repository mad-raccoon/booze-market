import * as React from "react";
import "./BoozeSpecs.css";

interface BoozeSpecsProps {
  ph: number;
  volume: number;
  alcohol: number;
}

const BoozeSpecs: React.FC<BoozeSpecsProps> = ({ ph, volume, alcohol }) => {
  return (
    <div className="specs">
      {ph && <div className="spec-item ph">{ph} PH</div>}
      {alcohol && <div className="spec-item alc">{alcohol} %</div>}
      {volume && <div className="spec-item vol">{volume} L</div>}
    </div>
  );
};

export default BoozeSpecs;
