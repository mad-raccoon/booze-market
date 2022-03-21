import React, { FC } from "react";
import { BoozeItem } from "../../../shared/domains";
import { BoozeForm } from "../../shared";

interface BoozeAddProps {
  onItemAdd: (item: BoozeItem) => void;
}

const BoozeAdd: FC<BoozeAddProps> = ({ onItemAdd }) => {
  const handleAddBooze = (data: BoozeItem) => {
    onItemAdd(data);
  };

  return (
    <div>
      <BoozeForm onSubmit={handleAddBooze} />
    </div>
  );
};

export default BoozeAdd;
