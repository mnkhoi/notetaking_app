import NoteList from "./components/NoteList";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const oldNotes = JSON.parse(localStorage.getItem("app-data"));
    const name = JSON.parse(localStorage.getItem("bruh"))
    console.log(oldNotes, name);
    if (oldNotes) {
      setNotes(oldNotes);
    }
  }, []);

  const onAdd = (e) => {
    const newNotes = [...notes, e];
    setNotes(newNotes);
    localStorage.setItem("app-data", JSON.stringify(newNotes));
  };

  const onDelete = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes);
    localStorage.setItem("app-data", JSON.stringify(newNotes));
  };

  return (
    <div className="App">
      <header className="App-header">Note Taking App</header>
      <NoteList notes={notes} onAdd={onAdd} onDelete={onDelete} />
    </div>
  );
}

export default App;
