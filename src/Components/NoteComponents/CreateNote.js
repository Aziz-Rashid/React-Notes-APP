import LinearProgress from "@mui/material/LinearProgress";
function CreateNote({ textHandler, saveHandler, inputText,descText,descriptionHandler }) {
  //character limit
  const charLimit = 100;
  const charLeft = charLimit - descText.length;

  return (
    <div className="note" style={{ background: "rgba(255, 255, 255, 0)" }}>
      <span style={{color:'orange',marginBottom:'10px'}}>Add/Edit Notes!</span>
      <textarea
        value={inputText}
        placeholder="Title..."
        onChange={textHandler}
        maxLength="50"
        style={{marginBottom:'10px'}}
      ></textarea>
       <textarea
        cols="10"
        rows="5"
        value={descText}
        placeholder="Description..."
        onChange={descriptionHandler}
        maxLength="300"
        style={{marginBottom:'10px'}}
      ></textarea>
     
      <div className="note__footer">
        <span className="label">{charLeft} left</span>
        <button className="note__save" onClick={saveHandler}>
          Save
        </button>
      </div>
      <LinearProgress
        className="char__progress"
        variant="determinate"
        value={charLeft}
        style={{marginBottom:'10px'}}
      />
    </div>
  );
}

export default CreateNote;
