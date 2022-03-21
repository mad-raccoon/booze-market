import * as React from "react";
import { BoozeSpecs } from "..";
import { BoozeItem } from "../../../shared/domains";
import "./BoozeCard.css";

interface BoozeCardProps extends BoozeItem {
  onRemove: (id: number) => void;
}

const BoozeCard: React.FC<BoozeCardProps> = ({
  id,
  name,
  image,
  alcohol,
  ph,
  volume,
  onRemove,
}) => {
  const handleRemove = () => {
    id && onRemove(id);
  };

  return (
    <div className="card">
      <div className="card-image">
        {image && <img src={image} alt={name} />}
      </div>
      <div className="card-info">
        <h5 className="card-title">{name}</h5>
        <BoozeSpecs ph={ph} volume={volume} alcohol={alcohol} />
        <button className="card-delete-button" onClick={handleRemove}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default BoozeCard;
