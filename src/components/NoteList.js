import AddNote from "./AddNote";
import Note from "./Note";

const NoteList = ({ notes, onAdd, onDelete }) => {
  return (
    <div className="notelist">
      {notes.map((note) => (
        <Note key={note.id} note={note} onDelete={ onDelete }/>
      ))}
      <AddNote onAdd={ onAdd }/>
    </div>
  );
};

export default NoteList;
