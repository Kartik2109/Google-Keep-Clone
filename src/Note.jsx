import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
 const Note=(props) =>{

const deleteNote=()=>{
props.deleteItem(props.id);
};

return(
<>
<div className="Note">
<h1>{props.title}</h1>
<br></br>
<p>{props.content}</p>
<button className="btn" onClick={deleteNote}>
<DeleteOutlineIcon className="deleteicon"></DeleteOutlineIcon>
</button>
</div>
</>

);

 };
 export default Note;