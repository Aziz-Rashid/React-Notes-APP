import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import EditIcon from '@mui/icons-material/Edit';

function Note({ id, text, deleteNote,desc,EditNotes }) {
  return (
    <div className="note">
      <div className="note__body">{text}</div>
      <div className="note__body">{desc}</div>
      <div className="note__footer" style={{ justifyContent: "flex-end" }}>
        <DeleteForeverOutlinedIcon
          className="note__delete"
          onClick={() => deleteNote(id)}
          aria-hidden="true"
        ></DeleteForeverOutlinedIcon>
        <EditIcon onClick={() => EditNotes(id)} style={{marginLeft:'20px',cursor:'pointer'}}></EditIcon>
      </div>
    </div>
  );
}

export default Note;
