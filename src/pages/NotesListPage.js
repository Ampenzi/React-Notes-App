import ListItem from '../components/ListItem'
import {useEffect, useState} from 'react'
import AddButton from '../components/AddButton'

function NotesListPage() {  

  const [ notes, setNotes] = useState([])

  useEffect(() =>{
    getNotes()
  }, [])

  const getNotes = async ()=>{
    let response = await fetch('http://localhost:8000/notes')
    let data = await response.json()
    setNotes(data)
  }


  return (
    <div className='notes'>
      <div className='notes-header'>
        <h2 className='notes-title'>&#9782; Notes</h2>
        <p className='notes-count' >{notes.length}</p>
      </div>
      {
        notes.map(note =>(<ListItem note={note}/>))
      }
      <AddButton/>
    </div>
  )
}

export default NotesListPage
