import NoteList from "./components/NoteList";
import { useState } from 'react'
import { nanoid } from 'nanoid';

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      note: 'here is some notes',
      date: '10/20/2020'
    },
    {
      id: nanoid(),
      note: 'here are some notes',
      date: '10/21/2020'
    }
  ])

  const onAdd = (e) => {
    setNotes([...notes, e])
  }

  const onDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id))
  }

  return (
    <div className="App">
      <header className="App-header">
        Note Taking App
      </header>
      <NoteList notes={ notes } onAdd={ onAdd } onDelete={ onDelete }/>
    </div>
  );
}

export default App;
