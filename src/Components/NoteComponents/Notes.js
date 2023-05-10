import { useState, useEffect } from "react";
import "../css/Note.css";
import CreateNote from "./CreateNote";
import Note from "./Note";
import { v4 as uuid } from "uuid";

function Notes() {
  //states
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");
  const [descText,setdescText] = useState("");
  const [idEdit,setId] = useState('')
  const [search,setSearch] = useState('')

  // get text and store in state
  const textHandler = (e) => {
    setInputText(e.target.value);
  };
  const descriptionHandler = (e) => {
    setdescText(e.target.value)
  }

  // add new note to the state array
  const saveHandler = () => {
    if(inputText == '' || descText == ''){
      return null
    }
    if(idEdit != ""){
      const editData = notes.map(el => {
        if(idEdit == el.id){
          return{
            id: idEdit,
            text: inputText,
            descr: descText
          }
        }else{
          return el
        }
      })
      setId('')
      setNotes(editData)
      setInputText("");
      setdescText("");
    }else{
      setNotes((prevState) => [
        ...prevState,
        {
          id: uuid(),
          text: inputText,
          descr: descText
        }
      ]);
      //clear the textarea
      setInputText("");
      setdescText("");
    }
  };

  const EditNotes = (id) => {
    const filterEdit = notes.filter(el => (el.id == id))
    setInputText(filterEdit[0].text)
    setdescText(filterEdit[0].descr);
    setId(id)
  }
  //delete note function
  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  //apply the save and get functions using useEffect
  //get the saved notes and add them to the array
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Notes"));
    if (data) {
      setNotes(data);
    }
  }, []);

  //saving data to local storage
  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="notes">
      <input className="inp" placeholder="Search Notes" value={search} onChange={(e) => setSearch(e.target.value)} />
      {notes.map((note) => {
        if(note.text.toLowerCase().includes(search.toLowerCase())){
          return(
            <Note
              key={note.id}
              id={note.id}
              desc={note.descr}
              text={note.text}
              deleteNote={deleteNote}
              EditNotes={EditNotes}
            />
          )
        }
      
      })}
      {search == '' && (
        <CreateNote
        textHandler={textHandler}
        saveHandler={saveHandler}
        descText={descText}
        inputText={inputText}
        descriptionHandler={descriptionHandler}
      />
      )}
    </div>
  );
}

export default Notes;
