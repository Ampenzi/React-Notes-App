import { Link, useParams, useNavigate } from 'react-router-dom'
import { ReactComponent as ArroLeft } from '../assets/arrow-left.svg'
import { useEffect, useState } from 'react'

function NotePage() {
  const {id} = useParams()
  const [ note, setNote] = useState(null)
  const navigate = useNavigate()
  useEffect( () =>{
    getNote()
    }, [id]
  )
  const getNote = async () =>{
    if(id === 'new' ) return
    const respones = await fetch(`http://localhost:8000/notes/${id}`)
    const data = await respones.json()
    setNote(data)
  }
  const handleSubmit =()=>{
    if(id !=='new' && !note.body){
      deleteNote()
    }else if (id !== 'new'){
      updateNote()
    }else if (id === 'new' && note !== null){
      createNote()
    }
    navigate('/')

  }

  const createNote = async() =>{
    await fetch(`http://localhost:8000/notes/`,{
        method: 'POST',
        headers:{
          'content-type': 'application/json'
        },
        body:JSON.stringify({...note, 'updated': new Date()})
    })
  }


  const updateNote = async() =>{
    await fetch(`http://localhost:8000/notes/${id}`,{
        method: 'PUT',
        headers:{
          'content-type': 'application/json'
        },
        body:JSON.stringify({...note, 'updated': new Date()})
    })
  }

  const deleteNote = async () =>{
    await fetch(`http://localhost:8000/notes/${id}`,{
      method: 'DELETE',
      headers:{
        'content-type': 'apllication/json'
      },
      body: JSON.stringify(note)
    })
    navigate('/')
  }

    return (
    <div className='note'>
      <div className='note-header'>
        <h3>
          <Link to='/'>
            <ArroLeft onClick={handleSubmit}/>
          </Link> 
        </h3>
        {
          id !=='new' ?(
            <button onClick={deleteNote}>Delete</button>
          ) : (
            <button onClick={handleSubmit}>Done</button>
          )
        }
      </div>
      <textarea onChange={(e) => setNote({...note, 'body': e.target.value}) } value={note?.body}></textarea>
    </div>
  )
}

export default NotePage
