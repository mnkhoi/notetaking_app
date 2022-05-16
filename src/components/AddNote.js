import { useState } from "react";
import { nanoid } from "nanoid";

const AddNote = ({ onAdd }) => {
  const [note, setNote] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!note) {
      alert("Please add text");
      return;
    }

    const date = new Date();

    onAdd({
      id: nanoid(),
      note: note,
      date: date.toLocaleDateString(),
    });

    setNote("");
  };

  return (
    <div className="form">
      <form className="addform" onSubmit={onSubmit}>
          <textarea
            type="longInput"
            style={{ height: "auto" }}
            name="text"
            id="text"
            placeholder="Add Text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          >
          </textarea>
        <div className="bottom">
          <input type="submit" value="Add Note" className="btn" />
        </div>
      </form>
    </div>
  );
};

export default AddNote;
