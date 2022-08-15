import React from 'react'

const Main = ({activateNote,onUpdate}) => {
    const onEdit=(key,value)=>{
 onUpdate({
...activateNote,
    [key]:value,
    
    lastModified:Date.now()
 })


    }
    if(!activateNote)
    {
        return <div className='no-active-note'>No active note</div>
    }
  return (
    
    <div className='app-main'>
        <div className='app-main-note-edit'>
<input type="text" id="title" value={activateNote.title} 
onChange={(e)=>onEdit("title",e.target.value)}

autoFocus/>
<textarea id="body" value={activateNote.body} 
onChange={(e)=>onEdit("body",e.target.value)}
placeholder='Write your note here'/>
        </div>
        <div className='app-main-note-preview'>
<h1 className='note-preview'>
{activateNote.title}

</h1>
<h3>{activateNote.body}</h3>
        </div>
        
        </div>
  )
}

export default Main