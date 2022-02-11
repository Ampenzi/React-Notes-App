import React from 'react'
import { Link } from 'react-router-dom'

const getTitle = (note) =>{
  const title = note.body.split('\n')[0]
  if(title.length > 15){
    return title.slice(0,20)
  }
  return title
}

const getDate= (note) =>{
  return new Date(note.updated).toLocaleDateString()
}

const getContent = (note) =>{
  let title = getTitle(note)
  let content = note.body.replaceAll('\n', ' ')

  content = content.replaceAll(title, '')

  if (content.length > 20){
    return content.slice(0,20)
  }else{
    return content
  }
}

function ListItem({note}) { 
  return (
    <div>
      <Link to={`/note/${note.id}`} key={note.id}>
        <div className='notes-list-item'>
          <h3>{getTitle(note)}</h3>
          <p>{getContent(note)}</p>
          <p><span>{getDate(note)}</span></p>
        </div>
      </Link>
    </div>
  )
}

export default ListItem