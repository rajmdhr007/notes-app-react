
import { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import './App.css';
import Main from './Main';
import Sidebar from './Sidebar';
function App() {

  const[notes,SetNotes]=useState(JSON.parse(localStorage.n))
  const[activateNote,setActivateNote]=useState(false)
  useEffect(()=>{
    localStorage.setItem("n",JSON.stringify(notes))
  },[notes])

const onAddNote=()=>{
 const newNote={
  id:uuid(),
  title:"Untitled Note",
  body:"",
  lastModified:Date.now()
 }
 SetNotes([newNote,...notes])


}

const onUpdate=(updatedNote)=>{


const updatedNotesArray=notes.map((note)=>{
  if(note.id===activateNote)
  {
    return  updatedNote
  }
  return note
})
SetNotes(updatedNotesArray)

}


const onDeleteNote=(idToDelete)=>{
  SetNotes(notes.filter((notes)=>notes.id!==idToDelete))
}
const getActiveNote=()=>{
  return notes.find((note)=>note.id===activateNote)

}


  return (
    <div className="App">
      <Sidebar notes={notes} 
      onAddNote={onAddNote}
       onDeleteNote={onDeleteNote}
      activateNote={activateNote}
      setActivateNote={setActivateNote}

      
      
      />
      <Main activateNote={getActiveNote()} onUpdate={onUpdate}/>
    </div>
  );
}

export default App;
