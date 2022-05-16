import { MdDeleteForever } from 'react-icons/md'

const Note = ({ note, onDelete }) => {
  return (
    <div className='note'>
        <span>{note.note}</span>
        <div className="notefooter">
            <small>{ note.date }</small>
            <MdDeleteForever className='deleteIcon' size="1.3em" onClick={() => onDelete(note.id) }/>
        </div>
    </div>
  )
}

export default Note