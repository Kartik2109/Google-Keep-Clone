import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import './App.css';

const CreateNote= (props) =>{

const[note,setnote]=useState({
  title:"",
  content:"",
});

const InputEvent=(event)=>{
//const value=event.target.value;
//const name=event.target.value;
 const{name,value}=event.target;

 setnote((prevData)=>{
return{
  ...prevData,[name]:value,
}
 });
};

const addEvent=() =>{
props.passNote(note);
setnote({
  title:"",
  content:"",
});
};

  return(
  <>
  <div className="main">
      <form>
          <input type="text" name="title"value={note.title} onChange={InputEvent} placeholder="Title" autoComplete="off"/>
          <textarea rows="" column="" name="content" value={note.content} onChange={InputEvent} placeholder="write"></textarea>
          <Button onClick={addEvent}>
          <AddIcon className="plus_sign"/>
 </Button>
      </form>
  </div>

  </>
  );
  };

export default CreateNote;
