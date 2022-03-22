import * as React from "react";
import { BoozeItem } from "../../../shared/domains";
import { BoozeCard } from "../../shared";
import "./BoozeList.css";

interface BoozeListProps {
  list: BoozeItem[];
  onItemRemove: (id: number) => void;
}
const BoozeList: React.FC<BoozeListProps> = ({ list, onItemRemove }) => {
  if (list.length === 0) {
    return <h2>List is empty. Please add new booze items :)</h2>;
  }

  return (
    <div className="list-container">
      {list.map((booze: BoozeItem) => (
        <div key={booze.id} className="list-item">
          <BoozeCard {...booze} onRemove={onItemRemove} />
        </div>
      ))}
    </div>
  );
};

export default BoozeList;
