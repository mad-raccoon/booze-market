import * as React from "react";
import { BoozeItem } from "../../../shared/domains";
import "./BoozeForm.css";
interface BoozeFormProps {
  onSubmit: (data: BoozeItem) => void;
}

const BoozeForm: React.FC<BoozeFormProps> = ({ onSubmit }) => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = {
      name: event.target["name"].value,
      ph: event.target["ph"].value,
      volume: event.target["volume"].value,
      alcohol: event.target["alcohol"].value,
    };
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>Name:</label>
      <input type="text" name="name" required />
      <label>Ph:</label>
      <input type="number" name="ph" />
      <label>Volume:</label>
      <input type="number" name="volume" />
      <label>Alcohol:</label>
      <input type="number" name="alcohol" />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default BoozeForm;
